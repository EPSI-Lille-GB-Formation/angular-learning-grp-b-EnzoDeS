// book.component.ts

import { Component, Input } from '@angular/core';
import { argv, argv0 } from 'process';
import { __values } from 'tslib';
import { book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <article>
        {{ Book?.title }}
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
  `,
  styles: ``,
})
export class BookComponent {
  @Input('value')
  Book: book | undefined;
}
