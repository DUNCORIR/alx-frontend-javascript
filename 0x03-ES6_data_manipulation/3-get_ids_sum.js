/**
 * Returns the sum of all student IDs in the list.
 * @param {Array<Object>} students - List of student objects
 * @returns {Number} - Sum of student IDs
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
