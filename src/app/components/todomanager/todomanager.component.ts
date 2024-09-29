import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todomanager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
  newTask: string = '';
  toDoList: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.toDoList.push(this.newTask);
      this.newTask = ''; 
    }
  }

  removeTask(index: number) {
    this.toDoList.splice(index, 1); 
  }
}

