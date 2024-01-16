import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BOOKS } from '../../mock';
import { USERS } from '../../mock';
import { User } from '../../models/user';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Liste des livres</h1>

      <ng-container *ngFor="let book of bookList">
        <article>
          ⎪ {{ book.title }} ⎪
          {{ getUserForBook(book)?.firstname || 'Inconnu' }} ⎪
        </article>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class BookComponent {
  @Input('value')
  book: Book | undefined;

  bookList = BOOKS;
  userList = USERS;

  getUserForBook(book: Book): User | undefined {
    return this.userList.find((user) => user.id === book.userId);
  }
}
