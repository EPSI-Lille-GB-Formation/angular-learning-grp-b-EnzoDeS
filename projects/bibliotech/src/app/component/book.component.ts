// book.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { argv, argv0 } from 'process';
import { __values } from 'tslib';
import { book } from '../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <article *ngIf="Book">
        <div>
          <img [src]= 'Book.image'/>
        </div>
        {{ Book.title }} 
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
            <button (click)="deleteBookById(Book)">Supprimer</button>
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
  bookList : book[] = [];
  @Output() bookDeleted: EventEmitter<number> = new EventEmitter<number>();

    constructor(private bookService: BookService) {
      
     }

  deleteBookById(Book: book): void {
    this.bookService.deleteBook(Book.id).subscribe(
      () => {
        console.log('Livre supprimé avec succès');
        // Mettre ici toute logique à exécuter après la suppression du livre
        this.bookService.getBooks().subscribe(books => {
            this.bookList = books;
            console.log(this.bookList);
            this.bookDeleted.emit(Book.id);
          })
        
      },
      (error) => {
        console.error('Erreur lors de la suppression du livre:', error);
        // Gérer l'erreur, par exemple afficher un message à l'utilisateur
      }
    );
  }
}
