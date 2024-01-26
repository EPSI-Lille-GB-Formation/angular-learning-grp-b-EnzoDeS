import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOKS } from '../mock/mock-book';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <h1>Voici la BiblioTech</h1>
      <h1>BookList</h1>
      <div *ngFor="let book of BookList">
        <article>
          {{ book.title }}
          <div class="grid">
            <div>
              <br />
              <button>Modifier</button>
            </div>
            <div>
              <br />
              <button>Détail</button>
            </div>
            <div>
              <br />
              <button>Supprimer</button>
            </div>
          </div>
        </article>
      </div>
    </article>
  `,
  styles: ``,
})
export class BooklistComponent {
  BookList: any[] = BOOKS;
}
