import { Injectable } from '@angular/core';
import { book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

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

  deleteBook(bookId: number): Observable<void> {
    const url = `${this.apiURL}/${bookId}`;
    return this.http.delete<void>(url).pipe(
      tap(() => {
        console.log(`Livre avec ID ${bookId} supprimé avec succès`);
      }),
      catchError(error => {
        console.error(`Erreur lors de la suppression du livre avec ID ${bookId}:`, error);
        return of();
      })
    );
  }

  // méthode pour récupérer un livre par son id
  getBookById(id: number): Observable<book | undefined> {
    const URL = `${this.apiURL}/${id}`;
    return this.http.get<book | undefined>(URL);
  }
}
