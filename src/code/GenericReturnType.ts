interface Callable<R> {
	(...args: any[]): R;
}

export type GenericReturnType<R, X> = X extends Callable<R> ? R : never;
