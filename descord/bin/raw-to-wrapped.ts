const PARSEABLE = [
	'PermissionInteger',
	'SystemChannelFlagInteger',
	'UserFlagInteger',
	'ISO8601Timestamp',
	'UnixTimestamp',
];
const PARSEABLE_IMPORT = [
	'Permission, ',
	'SystemChannelFlag, ',
	'UserFlag, ',
	'',
	'',
];
const PARSED = [
	'Permission[]',
	'SystemChannelFlag[]',
	'UserFlagInteger[]',
	'Date',
	'Date',
];

console.log(await main());

async function main() {
	const stdin = await Deno.readAll(Deno.stdin);
	const content = new TextDecoder().decode(stdin);
	return transform(content);
}

function transform(content: string) {
	const { name, parent, imports, properties, partials } = parse(content);
	const hasCasing = /_/.test(properties);

	const newImports = adaptImports(name, imports, hasCasing, partials);

	const result = PARSEABLE.reduce(
		(x, y, i) => x.replace(new RegExp(`: ${y}`, 'g'), `: ${PARSED[i]}`),
		content,
	)
		.replace(imports, newImports)
		.replace(/Raw(\w+)/g, '$1');

	return `import { Raw${name} } from '../raw/Raw${name}.ts';
${toCamelCase(result)}
${writeFunctions(name, parent, properties, hasCasing)}
`;
}

function writeFunctions(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const wrapBody = writeWrap(name, parent, properties, hasCasing);
	const unwrapBody = writeUnwrap(name, parent, properties, hasCasing);
	const wrapPartialBody = writeWrapPartial(name, parent, properties, hasCasing);
	const unwrapPartialBody = writeUnwrapPartial(
		name,
		parent,
		properties,
		hasCasing,
	);

	return `
export function wrap${name}(x: Raw${name}): ${name} {\n\t${wrapBody}\n}

export function unwrap${name}(x: ${name}): Raw${name} {\n\t${unwrapBody}\n}

export ${
		wrapPartialBody === wrapBody
			? `const wrap${name}Partial = wrap${name} as (x: Partial<Raw${name}>) => Partial<${name}>;`
			: `function wrap${name}Partial(x: Partial<Raw${name}>): Partial<${name}> {\n\t${wrapPartialBody}\n}`
	}

export ${
		unwrapPartialBody === unwrapBody
			? `const unwrap${name}Partial = unwrap${name} as (x: Partial<${name}>) => Partial<Raw${name}>;`
			: `function unwrap${name}Partial(x: Partial<${name}>): Partial<Raw${name}> {\n\t${unwrapPartialBody}\n}`
	}
`;
}

function adaptImports(
	name: string,
	imports: string,
	hasCasing: boolean,
	partials: string[],
) {
	const list = PARSEABLE.reduce(
		(x, y, i) => x.replace(y, `${PARSEABLE_IMPORT[i]}parse${y}, unparse${y}`),
		imports,
	)
		.replace(/import\s*\{\s*Raw(\w+)\s*\}/g, 'import { $1, wrap$1, unwrap$1 }')
		.split('\n')
		.filter(Boolean);

	if (hasCasing) {
		list.push("import { fromApiCasing, toApiCasing } from '../casing.ts';");
	}

	const finish = partials.reduce(
		(x, partial) =>
			x.replace(new RegExp(`wrap${partial}`, 'g'), `wrap${partial}Partial`),
		list.join('\n'),
	);

	return `${finish}\n\n`;
}

function parse(content: string) {
	const match = content.match(
		/((?:.|\n)*)export interface Raw(\w+)(?: extends Raw(\w+))? \{((?:.|\n)*)\}/m,
	);

	if (!match) {
		console.error('Interface not found in:\n\n', content);
		Deno.exit(1);
	}

	const partials = content.matchAll(/Partial<Raw(\w+)>/g);

	return {
		imports: match[1],
		name: match[2],
		parent: match[3],
		properties: match[4],
		partials: [...partials].map(x => x[1]),
	};
}

function writeWrap(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
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
	);

	const json = 'x';
	const child = parent ? `wrap${parent}(${json})` : json;
	const cased = hasCasing ? `fromApiCasing(${child})` : child;
	return buildBody(cased, props);
}

function writeUnwrap(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
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
	);

	const json = 'x';
	const child = parent ? `unwrap${parent}(${json})` : json;
	const cased = hasCasing ? `toApiCasing(${child})` : child;
	return buildBody(cased, props);
}

function writeWrapPartial(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const props = serialization(
		properties,
		(_, key, opt, value) =>
			`${toCamelCase(key)}: x.${key} && parse${value}(x.${key}),`,
		(_, key, opt, value) =>
			`${toCamelCase(key)}: x.${key} && wrap${value}(x.${key}),`,
	);

	const json = 'x';
	const child = parent ? `wrap${parent}(${json})` : json;
	const cased = hasCasing ? `fromApiCasing(${child})` : child;
	return buildBody(cased, props);
}

function writeUnwrapPartial(
	name: string,
	parent: string,
	properties: string,
	hasCasing: boolean,
) {
	const props = serialization(
		properties,
		(_, key, opt, value) =>
			`${key}: x.${toCamelCase(key)} && unparse${value}(x.${toCamelCase(
				key,
			)}),`,
		(_, key, opt, value) =>
			`${key}: x.${toCamelCase(key)} && unwrap${value}(x.${toCamelCase(key)}),`,
	);

	const json = 'x';
	const child = parent ? `unwrap${parent}(${json})` : json;
	const cased = hasCasing ? `toApiCasing(${child})` : child;
	return buildBody(cased, props);
}

function buildBody(base: string, props: string) {
	return props.length
		? `return {\n\t\t...${base},\n\t${props.replace(/\n\t/g, '\n\t\t')}\n\t};`
		: `return ${base};`;
}

function serialization(
	properties: string,
	onSerializable: Conversor,
	onEntity: Conversor,
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
					.replace(/((?:\w|_)+)(\??): Raw(\w+)\[\];/g, doArrays(onEntity));
			}

			if (/: Partial<Raw/.test(line)) {
				return line
					.replace(/((?:\w|_)+)(\??): Partial<Raw(\w+)>;/g, doPartial(onEntity))
					.replace(
						/((?:\w|_)+)(\??): Partial<Raw(\w+)>\[\];/g,
						doPartial(doArrays(onEntity)),
					);
			}
		})
		.filter(Boolean)
		.join('\n');
}

function doPartial(fn: Conversor): Conversor {
	return (...args) => fn(...args).replace(/(wrap\w+)/, '$1Partial');
}

function doArrays(fn: Conversor): Conversor {
	return (...args) => fn(...args).replace(/(\w+)\((x\..*)\)/, '$2.map($1)');
}

function toCamelCase(value: string) {
	return value.replace(/_(\w)/g, (_, x) => x.toUpperCase());
}

type Conversor = (
	_: string,
	key: string,
	opt: '?' | '',
	value: string,
) => string;
