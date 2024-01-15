import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { BOOKS } from '../../mock';
import { User } from '../../models/user';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez FormsModule ici
  template: `
    <div class="container">
      <h1>Liste des livres</h1>

      <ng-container *ngFor="let book of bookList">
        <article>
          ⎪ {{ book.title }} ⎪ {{ user.firstname }} ⎪
          {{ book.images }}
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

  @Input('value')
  user: User | undefined;

  userList = BOOKS;
}
