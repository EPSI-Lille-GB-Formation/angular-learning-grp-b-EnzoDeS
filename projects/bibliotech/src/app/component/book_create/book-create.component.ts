import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookCreateFormComponent } from '../book-create-form/book-form.component'; 
import { BookForm } from '../../models/book-form';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule, BookCreateFormComponent],
  template: `
    <div>
      <h1>Création de Livre</h1>
      <app-book-create-form (bookCreated)="createBook($event)"></app-book-create-form>
      <button (click)="goToBookList()">Accueil</button>
    </div>
  `,
  styles: ``,
})
export class BookCreateComponent {
  constructor(private router: Router) {}

  goToBookList() {
    // Utilisez le Router pour naviguer vers la page booklist
    this.router.navigate(['']); // Assurez-vous que la route '/booklist' existe dans votre configuration de routes
  }

  // Déplacez ces déclarations à l'extérieur de la classe
  @Output() bookCreated = new EventEmitter<BookForm>();

  createBook(newBook: BookForm) {
    console.log('Créer un livre', newBook);
    // Ajoutez le code pour créer un livre via le service BookService si nécessaire
  }
}
