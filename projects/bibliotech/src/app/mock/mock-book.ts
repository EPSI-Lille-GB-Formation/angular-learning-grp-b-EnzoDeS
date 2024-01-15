import { Book } from '../models/book';

export const Books: Book[] = [
  {
    id: 1,
    title: 'book1',
    resume: 'Book1 book1 book1 book1 book1 book1 book1 book1',
    images: 'image du livres1',
    createdAt: new Date('2012/10/03'),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'book2',
    resume: 'Book2 book2 book2 book2 book2 book2 book2 book2',
    images: 'image du livres2',
    createdAt: new Date('2013/10/03'),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'book3',
    resume: 'Book1 book3 book3 book3 book3 book3 book3 book3',
    images: 'image du livres3',
    createdAt: new Date('2014/10/03'),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: 'book4',
    resume: 'Book4 book4 book4 book4 book4 book4 book4 book4 ',
    images: 'image du livres4',
    createdAt: new Date('2015/10/03'),
    updatedAt: new Date(),
  },
];
