import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  public readonly basePath: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllTodoItems(): Promise<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(`${this.basePath}todos`)
    .pipe(retry(2))
    .toPromise()
    .then(todos => todos!.map(todo => todo));
  }

  public saveTodoItem(item: TodoItem): Promise<TodoItem> {
    return lastValueFrom(this.httpClient.post<TodoItem>(`${this.basePath}todos`, item));
  }

  public deleteTodoItem(item: TodoItem): Promise<TodoItem> {
    return lastValueFrom(this.httpClient.delete<TodoItem>(`${this.basePath}todos/${item.id}`));
  }

  public updateToDoItem(item: TodoItem): Promise<TodoItem> {
    return lastValueFrom(this.httpClient.put<TodoItem>(`${this.basePath}todos/${item.id}`, item));
  }

  public markToDoItem(item: TodoItem): Promise<TodoItem> {
    return lastValueFrom(this.httpClient.patch<TodoItem>(`${this.basePath}todos/${item.id}`, {done: !item.done}));
  }
}
