/**
 * Creates a new function that can only be called once. Subsequent calls to the
 * returned function will always return the same result as the first call.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to be called once
 * @returns {Function} - A function that can only be called once
 *
 * @example
 *
 * const add = (a, b) => a + b;
 * const addOnce = once(add);
 *
 * console.log(addOnce(2, 3)); // => 5
 * console.log(addOnce(2, 3)); // => undefined
 */
const once = (fn: Function): Function => {
	let called = false;
	return (...args: any) => {
		if (!called) {
			called = true;
			return fn(...args);
		}
	};
};

export default once;
