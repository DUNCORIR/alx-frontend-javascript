// 1. Define the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // 2. Create two students
  const student1: Student = {
    firstName: 'Alice',
    lastName: 'Wanjiru',
    age: 20,
    location: 'Nairobi'
  };
  
  const student2: Student = {
    firstName: 'Brian',
    lastName: 'Ochieng',
    age: 22,
    location: 'Kisumu'
  };
  
  // 3. Store them in an array
  const studentsList: Student[] = [student1, student2];
  
  // 4. Create the table
  const table: HTMLTableElement = document.createElement('table');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  headerRow.innerHTML = `<th>First Name</th><th>Location</th>`;
  table.appendChild(headerRow);
  
  // 5. Append rows for each student
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
  });
  
  // 6. Append the table to the body
  document.body.appendChild(table);