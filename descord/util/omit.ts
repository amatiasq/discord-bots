export function omit<T, U extends Array<keyof T>>(object: T, ...keys: U) {
	const entries = Object.entries(object) as [keyof T, any][];
	const keep = entries.filter(([key]) => !keys.includes(key));
	return Object.fromEntries(keep) as Omit<T, U[number]>;
}
