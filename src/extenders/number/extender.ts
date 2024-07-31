declare global {
	interface Number {
		isEven: boolean;
		isOdd: boolean;
	}
}

export function numberExtender() {
	const isEven = {
		get() {
			return (this as number) % 2 === 0;
		},
	} satisfies PropertyDescriptor;

	const isOdd = {
		get() {
			return (this as number) % 2 === 1;
		},
	} satisfies PropertyDescriptor;

	Object.defineProperties(Number.prototype, {
		isOdd,
		isEven,
	});
}
