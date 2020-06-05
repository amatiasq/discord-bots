export type Mixin<T> = (base: any) => T;
// export type T> = { new <U>(...args: U[]): T };

export function mixin<T0, T1>(base: T0, mixin: Mixin<T1>): T0 & T1;

export function mixin<T0, T1>(base: T0, mixins: [Mixin<T1>]): T0 & T1;

export function mixin<T0, T1, T2>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>],
): T0 & T1 & T2;

export function mixin<T0, T1, T2, T3>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>],
): T0 & T1 & T2 & T3;

export function mixin<T0, T1, T2, T3, T4>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>],
): T0 & T1 & T2 & T3 & T4;

export function mixin<T0, T1, T2, T3, T4, T5>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>],
): T0 & T1 & T2 & T3 & T4 & T5;

export function mixin<T0, T1, T2, T3, T4, T5, T6>(
	base: T0,
	mixins: [Mixin<T1>, Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>, Mixin<T6>],
): T0 & T1 & T2 & T3 & T4 & T5 & T6;

export function mixin<T, U>(base: T, mixins: Mixin<U> | Array<Mixin<any>>) {
	if (!Array.isArray(mixins)) {
		return mixins(base);
	}

	return mixins.reduce((output, mixin) => mixin(output), base);
}
