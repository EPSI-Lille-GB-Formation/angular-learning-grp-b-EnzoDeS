import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { book } from '../../models/book';

@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [],
  templateUrl: './book-delete.component.html',
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent implements OnInit{

  ngOnInit(): void {
    
  }

}
