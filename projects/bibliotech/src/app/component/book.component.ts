import { Component } from '@angular/core';
import { BOOKS } from '../mock/mock-book';

@Component({
  selector: 'app-book.component',
  standalone: true,
  imports: [],
  template: `
  <article *ngFor="let book of Bibliotech">
{{book.title}}
</artcile>
  `,
  styles: ``,
})
export class BookComponentComponent {
  Book = BOOKS;
}
