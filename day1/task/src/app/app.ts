import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTaskTitle = '';

  tasks: Task[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Finish Homework', completed: true },
    { title: 'Buy Milk', completed: false }
  ];

  addTask(): void {
    const title = this.newTaskTitle.trim();
    if (!title) return;

    this.tasks.push({ title, completed: false });
    this.newTaskTitle = '';
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
}
