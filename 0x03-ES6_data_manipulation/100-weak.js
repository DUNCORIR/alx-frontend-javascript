/**
 * Tracks the number of queries for a given endpoint.
 * Throws an error if queries exceed 4.
 *
 * @param {Object} endpoint - The endpoint object to track.
 * @throws {Error} When query count reaches 5 or more.
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
