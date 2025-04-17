
// Define a class named ClassRoom using the ES6 `class` syntax
class ClassRoom {
  /**
   * Constructor for the ClassRoom object.
   * @param {number} maxStudentsSize - Maximum number of students allowed.
   */
  constructor(maxStudentsSize) {
    // Store the value as a class property with an underscore prefix
    this._maxStudentsSize = maxStudentsSize;
  }
}

// Export the ClassRoom class as the default export of this module
export default ClassRoom;
