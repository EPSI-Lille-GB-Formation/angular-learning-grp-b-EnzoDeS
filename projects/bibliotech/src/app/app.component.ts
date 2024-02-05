import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BOOKS } from './mock/mock-book';
import '@picocss/pico';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet> `,
  styles: ``,
})
export class AppComponent {
  Bibliotech = BOOKS;
}
