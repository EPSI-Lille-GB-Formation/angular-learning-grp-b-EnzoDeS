import { Injectable } from '@angular/core';
import { book } from './models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiURL: string = 'api/books';

  constructor(private http: HttpClient) {}

  // méthode pour récupérer la liste des livres
  getBooks(): Observable<book[]> {
    return this.http.get<book[]>(this.apiURL);
  }
}
