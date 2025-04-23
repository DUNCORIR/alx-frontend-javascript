/**
 * Returns students in a given city with their grades updated from a grade list.
 * @param {Array<Object>} students - List of student objects
 * @param {String} city - City to filter students by
 * @param {Array<Object>} newGrades - Array of objects with studentId and grade
 * @returns {Array<Object>} - Updated students with grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
