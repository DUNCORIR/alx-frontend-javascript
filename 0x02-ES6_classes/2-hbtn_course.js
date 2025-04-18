class ALXCourse {
  /**
   * Create an ALXCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - Duration of the course.
   * @param {string[]} students - List of students enrolled.
   */
  constructor(name, length, students) {
    // Type validation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(s => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Assign to internal private-like properties
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every(s => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

// Export the class
export default ALXCourse;
