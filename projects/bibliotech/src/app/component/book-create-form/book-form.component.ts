// book-create-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookForm } from '../../models/book-form';

// Ajoutez cette importation ici
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-create-form',
  standalone:true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Création d'un livre</h2>
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
      <label for="title">Titre:</label>
      <input type="text" id="title" formControlName="title" required>

      <label for="author">Auteur:</label>
      <input type="text" id="author" formControlName="author" required>

      <!-- Ajoutez d'autres champs si nécessaire -->

      <button type="submit" [disabled]="bookForm.invalid">Créer</button>
    </form>
  `,
  styles: [`
    form {
      max-width: 300px;
      margin: auto;
    }
  `],
})
export class BookCreateFormComponent {
  @Output() bookCreated = new EventEmitter<BookForm>();

  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      // Initialisez d'autres champs du formulaire si nécessaire
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const formData: BookForm = this.bookForm.value;
      this.bookCreated.emit(formData);
      this.bookForm.reset(); // Réinitialise le formulaire après la création
    }
  }
}

// N'oubliez pas de retirer cette partie du code du composant
// <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
