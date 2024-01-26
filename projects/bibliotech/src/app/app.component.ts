import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BOOKS } from './mock/mock-book';
import '@picocss/pico';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <article>
      <h1>Voici la BiblioTech</h1>
      <div *ngFor="let book of Bibliotech">
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
export class AppComponent {
  Bibliotech = BOOKS;
}
