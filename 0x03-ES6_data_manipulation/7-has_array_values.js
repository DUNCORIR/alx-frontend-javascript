/**
 * Checks if all values from the array exist in the set.
 * @param {Set} set - A JavaScript Set
 * @param {Array} array - An array of elements to check
 * @returns {boolean} - True if all array elements are in the set, otherwise false
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
