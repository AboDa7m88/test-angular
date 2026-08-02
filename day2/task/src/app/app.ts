import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentList } from './components/student-list/student-list';
import { StudentForm } from './components/student-form/student-form';
import { StudentService } from './services/student';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentList, StudentForm, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  students: Student[] = [];
  searchTerm = '';
  sortAscending = true;
  showList = true;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onStudentAdded(student: Student): void {
    this.studentService.addStudent(student);
    this.students = this.studentService.getStudents();
  }

  onDeleteStudent(student: Student): void {
    this.studentService.deleteStudent(student);
    this.students = this.studentService.getStudents();
  }

  toggleSort(): void {
    this.sortAscending = !this.sortAscending;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }

  get filteredStudents(): Student[] {
    const term = this.searchTerm.toLowerCase();
    const filtered = this.students.filter(s => s.name.toLowerCase().includes(term));

    return [...filtered].sort((a, b) =>
      this.sortAscending ? a.grade - b.grade : b.grade - a.grade
    );
  }

  get passedCount(): number {
    return this.students.filter(s => s.status === 'Passed').length;
  }

  get failedCount(): number {
    return this.students.filter(s => s.status === 'Failed').length;
  }
}
