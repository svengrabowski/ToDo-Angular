import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CutPipe } from './pipes/cut.pipe';
import { TodoCreateReactiveComponent } from './components/todo-create-reactive/todo-create-reactive.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoCreateComponent,
    CutPipe,
    TodoCreateReactiveComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TodoListComponent,
  ]
})
export class TodoModule { }
