import { Component } from '@angular/core';
import { BOOKS } from '../mock/mock-book';

@Component({
  selector: 'app-book.component',
  standalone: true,
  imports: [],
  template: `
  <p>Moi je suis le book</p>
  <article *ngFor="let book of Bibliotech">
{{book.title}}
</artcile>
  `,
  styles: ``,
})
export class BookComponentComponent {
  Book = BOOKS;
}
