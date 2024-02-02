function isSubarray(arr, subarr, comparator = (a, b) => a === b) {
	return subarr.every((s) => arr.some((a) => comparator(a, s)));
}

module.exports = isSubarray;

if (require.main === module) {
	// Run the code if the file is run directly (e.g., `node subarray.js`).
	const assert = require('assert');
	assert(isSubarray([1, 2, 3], [2, 3]));
	assert(isSubarray([1, 2, 3], [2]));
	assert(isSubarray([1, 2, 3], [1, 2, 3]));
	assert(isSubarray([1, 2, 3], []));
	assert(isSubarray([], []));
	assert(isSubarray([1, 2, 3], [1, 2], (a, b) => a == b));
	assert(!isSubarray([1, 2, 3], [4]));
	assert(!isSubarray([], [1]));
}
