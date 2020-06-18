const PARSEABLE = [
	'PermissionInteger',
	'SerializedDate',
	'SerializedUnixTimestamp',
];
const PARSED = ['Permission[]', 'Date', 'Date'];

console.log(await main());

async function main() {
	const stdin = await Deno.readAll(Deno.stdin);
	const content = new TextDecoder().decode(stdin);
	return transform(content);
}

function transform(content: string) {
	const { name, imports, properties } = parse(content);
	const hasCasing = /_/.test(properties);

	const newImports = adaptImports(name, imports, hasCasing);

	const result = PARSEABLE.reduce(
		(x, y, i) => x.replace(`: ${y}`, `: ${PARSED[i]}`),
		content,
	)
		.replace(imports, newImports)
		.replace(/Raw(\w+)/g, '$1');

	return `import { Raw${name} } from '../raw/Raw${name}.ts';
${toCamelCase(result)}

export ${writeWrap(name, properties, hasCasing)};

export ${writeUnwrap(name, properties, hasCasing)};
`;
}

function adaptImports(name: string, imports: string, hasCasing: boolean) {
	const list = PARSEABLE.reduce(
		(x, y) => x.replace(y, `parse${y}, unparse${y}`),
		imports,
	)
		.replace(/import\s*\{\s*Raw(\w+)\s*\}/g, 'import { $1, wrap$1, unwrap$1 }')
		.split('\n')
		.filter(Boolean);

	if (hasCasing) {
		list.push("import { fromApiCasing, toApiCasing } from '../casing.ts';");
	}

	return list.join('\n') + '\n\n';
}

function parse(content: string) {
	const match = content.match(
		/((?:.|\n)*)export interface Raw(\w+) \{((?:.|\n)*)\}/m,
	);

	if (!match) {
		console.log('Interface not found in:\n\n', content);
		Deno.exit(1);
	}

	return {
		imports: match[1],
		name: match[2],
		properties: match[3],
	};
}

function writeWrap(name: string, properties: string, hasCasing: boolean) {
	const props = serialization(
		properties,
		(_, key, opt, value) =>
			`${toCamelCase(key)}: ${
				opt ? `x.${key} && ` : ''
			}parse${value}(x.${key}),`,
		(_, key, opt, value) =>
			`${toCamelCase(key)}: ${
				opt ? `x.${key} && ` : ''
			}wrap${value}(x.${key}),`,

		(_, key, opt, value) =>
			`${toCamelCase(key)}: ${
				opt ? `x.${key} && ` : ''
			}x.${key}.map(wrap${value}),`,
	);

	const body = buildBody(hasCasing ? 'fromApiCasing(x)' : 'x', props);
	return `function wrap${name}(x: Raw${name}): ${name} {\n\t${body}\n}`;
}

function writeUnwrap(name: string, properties: string, hasCasing: boolean) {
	const props = serialization(
		properties,
		(_, key, opt, value) =>
			`${key}: ${
				opt ? `x.${toCamelCase(key)} && ` : ''
			}unparse${value}(x.${toCamelCase(key)}),`,
		(_, key, opt, value) =>
			`${key}: ${
				opt ? `x.${toCamelCase(key)} && ` : ''
			}unwrap${value}(x.${toCamelCase(key)}),`,

		(_, key, opt, value) =>
			`${key}: ${opt ? `x.${toCamelCase(key)} && ` : ''}x.${toCamelCase(
				key,
			)}.map(unwrap${value}),`,
	);

	const body = buildBody(hasCasing ? 'toApiCasing(x)' : 'x', props);
	return `function unwrap${name}(x: ${name}): Raw${name} {\n\t${body}\n}`;
}

function buildBody(base: string, props: string) {
	return props.length
		? `return {\n\t\t...${base},\n\t${props.replace(/\n\t/g, '\n\t\t')}\n\t};`
		: `return ${base};`;
}

function serialization(
	properties: string,
	onSerializable: (
		_: string,
		key: string,
		opt: '?' | '',
		value: string,
	) => string,
	onEntity: (_: string, key: string, opt: '?' | '', value: string) => string,
	onArray: (_: string, key: string, opt: '?' | '', value: string) => string,
) {
	return properties
		.split('\n')
		.map(line => {
			if (PARSEABLE.some(x => line.includes(x))) {
				return line.replace(/((?:\w|_)+)(\??): (\w+);/, onSerializable);
			}

			if (/: Raw/.test(line)) {
				return line
					.replace(/((?:\w|_)+)(\??): Raw(\w+);/g, onEntity)
					.replace(/((?:\w|_)+)(\??): Raw(\w+)\[\];/g, onArray);
			}
		})
		.filter(Boolean)
		.join('\n');
}

function toCamelCase(value: string) {
	return value.replace(/_(\w)/g, (_, x) => x.toUpperCase());
}
