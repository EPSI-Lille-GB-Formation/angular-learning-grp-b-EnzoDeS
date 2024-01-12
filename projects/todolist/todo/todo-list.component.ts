import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from '../src/app/mocko-todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Liste des choses à faire :</h1>

    <h1>Liste des choses à faire :</h1>
    <ul>
      <ng-container *ngFor="let todo of todoList">
        <div class="box">
          <li>
            {{ todo.title }}
          </li>
        </div>
      </ng-container>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  todoList = TODOS;

  constructor() {
    console.table(this.todoList);
  }

  selectTodo(id: number) {
    return this.todoList[id];
  }
}
