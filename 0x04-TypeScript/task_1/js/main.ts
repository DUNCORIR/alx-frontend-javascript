// task 1: Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // allows extra properties like 'contract'
}

const teacher1: Teacher = {
  firstName: 'Duncan',
  lastName: 'Korir',
  fullTimeEmployee: true,
  location: 'Nairobi',
  contract: true,
};

console.log('Teacher:', teacher1);

// task 2: Directors Interface (extends Teacher)
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director:', director1);

// task 3: printTeacher function & interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log('Print Teacher:', printTeacher("Duncan", "Korir"));

// task 4: Student class with interfaces

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface describing the class instance
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the StudentInterface
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create an instance using the class
const student = new StudentClass('Duncan', 'Korir');
console.log('Student display name:', student.displayName()); // Duncan
console.log('Homework status:', student.workOnHomework());   // Currently working