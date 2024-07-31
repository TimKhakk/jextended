interface ArrayAndString {
	isEmpty: boolean;
}
declare global {
	interface String extends ArrayAndString {}

	interface Array<T> extends ArrayAndString {
		toSortedNumbers(): T[];
	}
	interface Array<T> {
		isEmpty: boolean;

		toSortedNumbers(): T[];
	}
}
export function arrayAndStringExtender() {
	const isEmpty = {
		get() {
			return (this as Array<unknown> | string).length === 0;
		},
	} satisfies PropertyDescriptor;

	const toSortedNumbers = {
		value: function () {
			return (this as Array<number>).toSorted((a, b) => a - b);
		},
	} satisfies PropertyDescriptor;

	Object.defineProperties(Array.prototype, {
		isEmpty,
		toSortedNumbers,
	});

	Object.defineProperties(String.prototype, {
		isEmpty,
	});
}
