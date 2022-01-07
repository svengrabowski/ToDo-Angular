import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  public links = [
    { title: 'ToDos', fragment: '/todo' },
    { title: 'Notes', fragment: '/note' }
  ];

  public currentFragment: string | null = null;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      this.currentFragment = this.router.url;
    });
  }
}
