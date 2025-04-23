/**
 * Returns a filtered list of students based on their city.
 * @param {Array<Object>} students - List of student objects
 * @param {String} city - The city to filter students by
 * @returns {Array<Object>} - Students located in the specified city
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
