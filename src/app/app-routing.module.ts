import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'todo', component: TodoListComponent},
  {path:'notes', component: NoteListComponent},
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
