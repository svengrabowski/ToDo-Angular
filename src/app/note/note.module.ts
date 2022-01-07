import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteRoutingModule } from './note-routing.module';



@NgModule({
  declarations: [
    NoteListComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
  ]
})
export class NoteModule { }
