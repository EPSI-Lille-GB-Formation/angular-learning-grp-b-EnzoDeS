import { Component } from '@angular/core';
import { BOOKS } from '../mock/mock-book';
import { CommonModule } from '@angular/common';
import '@picocss/pico';

@Component({
  selector: 'app-book.component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Moi je suis le book</p>
    <article *ngFor="let book of Book">
      {{ book.title }}
    </article>
  `,
  styles: ``,
})
export class BookComponentComponent {
  Book = BOOKS;
}
