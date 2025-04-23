/**
 * Returns a string of set values that start with a specific string,
 * removing the prefix and joining the rest with '-'.
 * @param {Set} set - A set of strings
 * @param {string} startString - The prefix string to match
 * @returns {string} - Cleaned and joined string of matching values
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
