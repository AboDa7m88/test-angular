import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {
  @Input({ required: true }) student!: Student;
  @Output() delete = new EventEmitter<void>();

  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
