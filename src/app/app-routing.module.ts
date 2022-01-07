import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';

const routes: Routes = [
  {path:'todo', component: TodoListComponent},
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then(m => m.NoteModule)
  },
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
