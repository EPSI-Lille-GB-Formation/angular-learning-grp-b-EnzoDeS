import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { book } from '../../models/book'; // Assuming 'book' is the correct class name
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  template: ` <div>
    <h2>Supprimer le livre</h2>
    <p>Êtes-vous sûr de vouloir supprimer le livre " {{ book?.title }} " ?</p>
    <div class="grid">
      <button (click)="deleteBook()">Supprimer définitivement</button>
      <button (click)="cancelButton(book?.id)">Annuler</button>
    </div>
  </div>`,
  styleUrls: ['./book-delete.component.css'],
})
export class BookDeleteComponent implements OnInit {
  Book: book | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_book = this.route.snapshot.paramMap.get('id_book');

    if (id_book) {
      this.bookService.getBookById(+id_book).subscribe(
        (Book: book | undefined) => {
          this.Book = Book;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  deleteBook(): void {
    if (this.Book) {
      this.bookService.deleteBook(this.Book.id).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      });
    }
  }

  cancelButton(idBook: number | undefined): void {
    this.router.navigate(['book', idBook]);
  }
}
