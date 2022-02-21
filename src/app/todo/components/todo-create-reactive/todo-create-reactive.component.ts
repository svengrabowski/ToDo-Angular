import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-create-reactive',
  templateUrl: './todo-create-reactive.component.html',
})
export class TodoCreateReactiveComponent implements OnInit {
  @Input() public todo: TodoItem = new TodoItem();
  @Output() formSubmitted = new EventEmitter<TodoItem>();
  public todoForm: FormGroup;

  get f() { return this.todoForm.controls };

  constructor(private formsBuilder: FormBuilder) {
    this.todoForm = this.formsBuilder.group({
      title: [this.todo.title, [Validators.required]],
      description: [this.todo.description, [Validators.required]],
      dueDate: [this.todo.dueDate]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.todoForm.value);
  }

}
