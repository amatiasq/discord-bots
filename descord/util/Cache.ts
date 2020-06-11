export class Cache<TKey, TValue> {
	private readonly storage = new Map<TKey, TValue>();

	set(key: TKey, value: TValue) {
		this.storage.set(key, value);
	}

	get(key: TKey) {
		return this.storage.get(key);
	}
}
