export type Mixin<T> = (ctor: any) => Ctor<T>;
export type Ctor<T> = { new <U>(arg: U): T };

export function mixin<T1, T2>(base: Ctor<T1>, mixin: Mixin<T2>): Ctor<T1 & T2>;

export function mixin<T1, T2>(
	base: Ctor<T1>,
	mixins: [Mixin<T2>],
): Ctor<T1 & T2>;

export function mixin<T1, T2, T3>(
	base: Ctor<T1>,
	mixins: [Mixin<T2>, Mixin<T3>],
): Ctor<T1 & T2 & T3>;

export function mixin<T1, T2, T3, T4>(
	base: Ctor<T1>,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>],
): Ctor<T1 & T2 & T3 & T4>;

export function mixin<T1, T2, T3, T4, T5>(
	base: Ctor<T1>,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>],
): Ctor<T1 & T2 & T3 & T4 & T5>;

export function mixin<T1, T2, T3, T4, T5, T6>(
	base: Ctor<T1>,
	mixins: [Mixin<T2>, Mixin<T3>, Mixin<T4>, Mixin<T5>, Mixin<T6>],
): Ctor<T1 & T2 & T3 & T4 & T5 & T6>;

export function mixin<T, U>(
	base: Ctor<T>,
	mixins: Mixin<U> | Array<Mixin<any>>,
) {
	if (!Array.isArray(mixins)) {
		return mixins(base);
	}

	return mixins.reduce((output, mixin) => mixin(output), base);
}
