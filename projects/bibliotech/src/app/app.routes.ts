import { Routes } from '@angular/router';
import { BooklistComponent } from './component/book/booklist.component';
import { BookCreateComponent } from './component/book/book-create/book-create.component';
import { BookReadComponent } from './component/book/book-read/book-read.component';

export const routes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'book-create', component: BookCreateComponent }, // Définissez la route pour la création de livre
  { path: 'book-read/:id', component: BookReadComponent }, // Définissez la route pour la lecture de livre
];
