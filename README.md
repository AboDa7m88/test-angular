# Session 1

### 1\. Mental Shift from JS to Angular

### 5\. Event & Data Binding

### 6\. Create more components

### 7\. Conditional Rendering & Styling

## Angular Task: To-Do List App

### Objective

Build a simple To-Do List application where users can add tasks, mark them as completed, and remove them.

## Concepts Covered

 Components

 Event Binding

(click)

 Two-way Binding

\[(ngModel)\]

 Conditional Rendering

ngIf

 Conditional Styling

\[ngClass\]

or

\[style\]

 FormsModule

## Requirements

### 1\. App Layout

The page should contain:

\----------------------------- My To-Do List \[\_\_\_\_\_\_\_\_\_\_\_\_\_\] \[Add\] ----------------------------- ☐ Learn Angular Delete ☑ Finish Homework Delete ☐ Buy Milk Delete ----------------------------- Completed Tasks: 1

​

### 2\. Add Task

There should be:

An input field

An Add button

When the user types a task and clicks Add:

Add the task to the list.

Clear the input.

Use:

\[(ngModel)\]

​

and

(click)

​

### 3\. Display Tasks

Use

for()

​

to display every task.

Each task should contain:

Task name

Complete button

Delete button

### 4\. Complete Task

When clicking Complete

Toggle the completed status.

Example:

Before

Learn Angular

​

After

✔ Learn Angular

​

### 5\. Conditional Styling

If a task is completed:

Text becomes gray.

Text gets a line-through.

Button color changes.

Example:

Learn Angular

​

↓

Learn Angular

Use either:

\[ngClass\]

​

or

\[style.text-decoration\]

​

### 6\. Conditional Rendering

If there are no tasks, show:

No tasks yet.

​

Otherwise show the list.

Use

@if()

​

### 7\. Delete Task

When clicking Delete

Remove the task from the list.

### 8\. Task Counter

Display

Total Tasks: 5

​

and

Completed: 2

​

## Suggested Components

### App Component

Contains:

Title

Input

Add button

Task list

Counter

#### Optional (to practice components)

Create a child component:

TodoItemComponent

​

Inputs:

task

Outputs:

delete

toggleComplete

The parent component holds the array of tasks.

## Task Model

{ title: string; completed: boolean; }

​

## Bonus Challenges

Disable the Add button if the input is empty.

Press Enter to add a task.

Show completed tasks in green.

Display:

🎉 All tasks completed!

​

when every task is completed.

Add a button:

Hide Completed

​

that only shows incomplete tasks.