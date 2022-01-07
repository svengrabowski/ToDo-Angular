import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoItem } from '../../models/todo-item';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit, OnDestroy {

  public userName: string = 'Sven'
  public todoList: TodoItem[] = [];
  public todoToBeEdited: TodoItem = new TodoItem();
  public error: boolean = false;
  public loading: boolean = true;

  private subscription: Subscription | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadToDos();
  }

  public retry(): void {
    this.error = false;
    this.loading = true;
    this.loadToDos();
  }

  private loadToDos(): void {

    this.subscription = this.todoService.getAllTodoItems()
      .subscribe({
        next: (data) => {
          this.todoList = data;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      })
  }

  public onCreateTodo(todoItem: TodoItem): void {
    this.todoService.saveTodoItem(todoItem).then(item => {
      this.todoList.push(item);
    });
  }

  public deleteTodoItem(todoItem: TodoItem): void {
    this.todoService.deleteTodoItem(todoItem).then(item => {
      this.todoList = this.todoList.filter(todo => todo.id !== todoItem.id);
    });
  }

  public markAsChecked(todoItem: TodoItem): void {
    this.todoService.markToDoItem(todoItem).then(data => {
      const index = this.todoList.findIndex(i => i.id === todoItem.id);
      this.todoList[index] = data;
      console.log(this.todoList);
    });
  }

  public saveUpdatedToDo(todoItem: TodoItem): void {
    this.todoService.updateToDoItem(todoItem).then(data => {
      const index = this.todoList.findIndex(i => i.id === todoItem.id);
      this.todoList[index] = data;
      console.log(this.todoList);
    });
  }

  public updateToDo(todoItem: TodoItem): void {
    this.todoToBeEdited = {...todoItem};
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
