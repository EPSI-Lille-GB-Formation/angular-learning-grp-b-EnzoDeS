import { Injectable } from '@angular/core';
import { book } from '../models/book';
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
  
    // méthode pour créer un livre
  createBook(newBook: book): Observable<book> {
    return this.http.post<book>(this.apiURL, newBook);
  }
  
  // méthode pour générer un nouvel id
  genIdBook(collection: book[]): number {
    return collection.length > 0
      ? Math.max(...collection.map((item) => item.id)) + 1
      : 1;
  }

  // méthode pour supprimer un livre
  deleteBook(bookId: number): Observable<void> {
    const URL = `${this.apiURL}/${bookId}`;
    return this.http.delete<void>(URL);
  }

  // méthode pour récupérer un livre par son id
  getBookById(id: number): Observable<book | undefined> {
    const URL = `${this.apiURL}/${id}`;
    return this.http.get<book | undefined>(URL);
  }
}
