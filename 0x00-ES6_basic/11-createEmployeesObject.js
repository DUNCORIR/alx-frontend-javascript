export default function createEmployeesObject(departmentName, employees) {
  const departmentKey = `$${departmentName}`;
  const employeesList = employees.map(employee => `$${employee}`);
  
  return {
    [departmentKey]: employeesList,
  };
}
