import { Component, Input, OnInit } from '@angular/core';
import { book } from '../../../models/book';
import { Observable } from 'rxjs';
import { BookService } from '../service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-read',
  imports:[CommonModule],
  template: `
    <div *ngIf="book">
      <h2>{{ book?.id }}</h2>
      <img [src]="book?.image" alt="{{ book?.title }} Image" />
      <p>Auteur: {{ book?.id_user }}</p>
      <p>Date de publication: {{ book?.createDate}}</p>
      <p>Résumé: {{ book?.resume }}</p>
      <!-- Ajoutez d'autres propriétés du livre ici -->
    </div>
  `,
  styles: `
    /* Ajoutez des styles CSS si nécessaire */
  `,
})
export class BookReadComponent implements OnInit {
  @Input() bookId: number | undefined;
  book: book | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe((result) => {
        this.book = result;
      });
    }
  }
}
