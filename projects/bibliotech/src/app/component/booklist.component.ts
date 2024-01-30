import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { Observable } from 'rxjs';
import { book } from '../models/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, BookComponent],
  template: `
    <div>
      <h2>Liste des livres:</h2>
      <div class="listBook">
        <ng-container *ngFor="let book of bookList | async">
          <app-book [value]="book"></app-book>
        </ng-container>
      </div>
    </div>
  `,
  styles: ``,
})
export class BooklistComponent implements OnInit {
  bookList: Observable<book[]> = new Observable<book[]>();

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookList = this.bookService.getBooks();
  }
}
