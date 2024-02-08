import { Routes } from '@angular/router';
import { BooklistComponent } from './component/booklist.component';
import { BookCreateComponent } from './component/book-create/book-create.component';


export const routes: Routes = [
    { path: '', component: BooklistComponent},
    { path: 'book-create', component: BookCreateComponent }, // Définissez la route pour la création de livre
];
