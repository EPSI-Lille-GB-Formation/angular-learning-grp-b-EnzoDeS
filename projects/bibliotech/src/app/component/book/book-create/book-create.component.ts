import { Component } from '@angular/core';
import { book } from '../../../models/book';
import { BookService } from '../service/book.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, forkJoin, map } from 'rxjs';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <div>
        <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
          <div>
            <label for="title">Titre:</label>
            <input type="text" id="title" formControlName="title" required />
          </div>

          <div>
            <label for="resume">Résumé:</label>
            <textarea id="resume" formControlName="resume" required></textarea>
          </div>

          <div>
            <label for="image">Image:</label>
            <input
              type="text"
              id="image"
              formControlName="image"
              placeholder="Url de l'image"
              required
            />
          </div>
          <div>
            <button type="submit" [disabled]="!bookForm.valid">
              Créer le livre
            </button>
            <button type="button" (click)="goToHomePage()">Annuler</button>
          </div>
        </form>
      </div>
    </article>
  `,
  styles: `
  `,
})
export class BookCreateComponent {
  bookForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    resume: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.getBooks().subscribe((Book: book[]) => {
        const newBook: book = {
          id: this.bookService.genIdBook(Book),
          title: this.bookForm.get('title')?.value,
          resume: this.bookForm.get('resume')?.value,
          image: this.bookForm.get('image')?.value,
          createDate: new Date(),
          updateDate: null,
          id_user: 0,
        };

        this.bookService.createBook(newBook).subscribe(() =>
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1)
        );
      });
    }
  }
  goToHomePage(): void {
    this.router.navigate(['']);
  }
}
