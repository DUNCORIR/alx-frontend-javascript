/**
 * Creates an ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - Length of the ArrayBuffer
 * @param {number} position - Index to insert the value
 * @param {number} value - The Int8 value to insert
 * @returns {DataView} - DataView of the buffer with the value set
 * @throws {Error} - If position is out of range
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}
