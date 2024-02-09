//booklist.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { Observable } from 'rxjs';
import { book } from '../../models/book';
import { BookService } from './service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, BookComponent],
  template: `
    <div>
      <h2>Liste des livres:</h2>
      <article>
        <div class="grid">
          <div><button>Se connecter</button></div>
          <div><button (click)="createBook()">Ajouter un livre</button></div>
        </div>
      </article>
      <div class="listBook">
        <ng-container *ngFor="let book of bookList | async">
          <app-book
            [value]="book"
            (bookDeleted)="onBookDeleted($event)"
          ></app-book>
        </ng-container>
      </div>
    </div>
  `,
  styles: ``,
})
export class BooklistComponent implements OnInit {
  bookList: Observable<book[]> = new Observable<book[]>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookList = this.bookService.getBooks();
  }

  createBook() {
    console.log('Créer un livre');
    this.router.navigate(['/book-create']);
  }

  onBookDeleted(bookId: number): void {
    // Mettez à jour la liste des livres après la suppression
    this.bookList = this.bookService.getBooks();
  }
}
