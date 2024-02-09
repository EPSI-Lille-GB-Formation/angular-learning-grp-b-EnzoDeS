// Importez InMemoryDbService depuis 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';
import { BOOKS } from '../../../mock/mock-book';
import { PAGES } from '../../../mock/mock-page';
import { CATEGORIES } from '../../../mock/mock-categorie';
import { USERS } from '../../../mock/mock-user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const books = BOOKS;
    const users = USERS;
    const categories = CATEGORIES;
    const pages = PAGES;
    return { books, users, categories, pages };
  }
}
