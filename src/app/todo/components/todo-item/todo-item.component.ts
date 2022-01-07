import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoItem | null = null;
  @Input() index: number = 0;

  @Output() public todoChecked = new EventEmitter<TodoItem>();
  @Output() public todoDelete = new EventEmitter<TodoItem>();
  @Output() public todoUpdate = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDeleteClicked(): void {
    this.todoDelete.emit(this.todo!);
  }

  public onCheckedClicked(): void {
    this.todoChecked.emit(this.todo!);
  }

  public onUpdateClicked(): void {
    this.todoUpdate.emit(this.todo!);
  }

}
