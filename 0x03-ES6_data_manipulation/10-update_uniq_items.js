/**
 * Updates the quantity of items in a Map if the quantity is 1.
 * @param {Map} itemsMap - The input map to be updated.
 * @returns {Map} - The updated map.
 * @throws {Error} - If the argument is not a Map.
 */
export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of itemsMap) {
    if (quantity === 1) {
      itemsMap.set(item, 100);
    }
  }

  return itemsMap;
}
