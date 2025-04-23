/**
 * Returns an array of student IDs from an array of student objects.
 * @param {Array<Object>} students - List of student objects
 * @returns {Array<Number>} - List of student IDs
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
