export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,  // Spread the employeesList into the allEmployees object
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;  // Returns the number of departments
    },
  };
}
