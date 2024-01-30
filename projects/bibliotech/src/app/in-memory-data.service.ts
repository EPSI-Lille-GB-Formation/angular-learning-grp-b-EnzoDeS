// Importez InMemoryDbService depuis 'angular-in-memory-web-api'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { BOOKS } from './mock/mock-book';
import { PAGES } from './mock/mock-page';
import { CATEGORIES } from './mock/mock-categorie';
import { USERS } from './mock/mock-user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { BOOKS, PAGES, CATEGORIES, USERS };
  }
}
