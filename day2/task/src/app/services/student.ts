import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { name: 'Ahmed', age: 20, grade: 85, status: 'Passed' },
    { name: 'Sara', age: 19, grade: 40, status: 'Failed' }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(s => s !== student);
  }
}
