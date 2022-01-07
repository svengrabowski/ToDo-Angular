import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
})
export class TodoCreateComponent implements OnInit {

  @Input() public todo: TodoItem = new TodoItem();
  @Output() public todoEditDone = new EventEmitter<TodoItem>();
  @Output() public todoUpdateDone = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public isNewTodo(): boolean {
    return !this.todo?.id;
  }

  public cancelUpdate(form: NgForm) {
    this.todo = new TodoItem();
    form.resetForm();
  }

  public onSubmit(form: NgForm): void {
    if (!this.isNewTodo()) {
      this.todoUpdateDone.emit(this.todo);
    } else {
      this.todoEditDone.emit(this.todo);
    }
    this.todo = new TodoItem();
    form.resetForm();
  }

}
