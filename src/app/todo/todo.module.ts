import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoCreateComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    TodoListComponent,
  ]
})
export class TodoModule { }
