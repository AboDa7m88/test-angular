import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { StudentCard } from '../student-card/student-card';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCard],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnChanges, OnDestroy {
  @Input() students: Student[] = [];
  @Output() delete = new EventEmitter<Student>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('StudentList: students input changed ->', changes['students']?.currentValue);
  }

  ngOnDestroy(): void {
    console.log('StudentList: destroyed (list was hidden)');
  }
}
