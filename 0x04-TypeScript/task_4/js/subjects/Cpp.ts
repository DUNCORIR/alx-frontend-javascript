/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingC ?? 0;
      return experience > 0 
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }  
  }
} 