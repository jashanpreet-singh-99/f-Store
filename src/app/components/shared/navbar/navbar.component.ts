import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum NavMode{
  Open,
  Closed
}

@Component({
  selector: 'f-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('void', style({
        height: '0px',
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('*', style({
        height: '*',
        transform: 'translateY(0%)',
        opacity: 1
      })),
      transition('void <=> *', [
        animate('500ms ease-in-out')
      ])
    ]),
    trigger('expandHorizontal', [
      state('void', style({
        width: '0px',
        opacity: 0
      })),
      state('*', style({
        width: '*',
        opacity: 1
      })),
      transition('void <=> *', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class NavbarComponent {
  state: NavMode = NavMode.Closed;
  searchState: NavMode = NavMode.Closed;

  toggleNavMode(): void {
    this.state = (this.state === NavMode.Open) ? NavMode.Closed : NavMode.Open;
  }

  get NavMenuIcon(): string {
    return (this.state === NavMode.Closed) ? 'menu' : 'close';
  }

  get showMobileMenu(): boolean {
    return (this.state === NavMode.Open) ? true : false;
  }

  toggleSearchMode(): void {
    this.searchState = (this.searchState === NavMode.Open) ? NavMode.Closed : NavMode.Open;
  }

  get showSearchInput(): boolean {
    return (this.searchState === NavMode.Open) ? true : false;
  }
}
