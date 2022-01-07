import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public links = [
    { title: 'ToDos', fragment: 'todo' },
    { title: 'Notes', fragment: 'note' }
  ];
  public title = 'todo-app';

  constructor(public route: ActivatedRoute) {}
}
