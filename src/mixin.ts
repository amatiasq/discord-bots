export type Mixin<T> = (ctor: any) => T;

export function mixin<T1, T2>(base: T1, mixin: Mixin<T2>): T1 & T2;
export function mixin<T1, T2>(base: T1, mixins: [Mixin<T2>]): T1 & T2;
export function mixin<T1, T2, T3>(
	base: T1,
	mixins: [Mixin<T2>, Mixin<T3>],
): T1 & T2 & T3;
export function mixin<T1, T2, T3, T4>(
	base: T1,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>],
): T1 & T2 & T3 & T4;
export function mixin<T1, T2, T3, T4, T5>(
	base: T1,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>],
): T1 & T2 & T3 & T4 & T5;
export function mixin<T1, T2, T3, T4, T5, T6>(
	base: T1,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>, Mixin<T6>],
): T1 & T2 & T3 & T4 & T5 & T6;
export function mixin<T, U>(base: T, mixins: Mixin<U> | Array<Mixin<any>>) {
	if (!Array.isArray(mixins)) {
		return mixins(base);
	}

	return mixins.reduce((output, mixin) => mixin(output), base);
}
