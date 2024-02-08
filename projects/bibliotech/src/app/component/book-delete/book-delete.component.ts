import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [],
  template:`<div>
  <h2>Supprimer le livre</h2>
  <p>Êtes-vous sûr de vouloir supprimer le livre " {{ Book?.title }} " ?</p>
  <div class="grid">
    <button (click)="deleteBook()">
      Supprimer définitivement
    </button>
    <button (click)="cancelButton(Book?.id)">Annuler</button>
  </div>
</div>`,
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent implements OnInit{

    Book:book|undefined; 

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const id_book = this.route.snapshot.paramMap.get('id_book');
 
    if (id_book) {
      this.bookService.getBookById(+id_book).subscribe(
        (Book: book | undefined) => {
          this.Book = book;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  deleteBook(): void {
    if (this.Book) {
      this.bookService.deleteBook(this.Book.id).subscribe(
        () => {
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1000);
        }
      )
    }
  }

  cancelButton(idBook: number | undefined): void {
    this.router.navigate(['book', idBook]);
  }
}
