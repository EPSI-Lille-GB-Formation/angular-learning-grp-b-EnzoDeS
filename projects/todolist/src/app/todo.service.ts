import { Injectable, inject } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'api/todos';
  constructor(private http: HttpClient) {}
  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap((todoList) => console.log(todoList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
  getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todosUrl}/${todoId}`).pipe(
      catchError((error) => {
        console.log(error);
        return of();
      })
    );
  }
}
