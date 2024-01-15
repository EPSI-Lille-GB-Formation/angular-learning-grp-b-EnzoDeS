import { Book } from '../models/book';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: ' book1',
    resume: ' resume du Book1',
    images: ' image du livres1',
    createdAt: new Date('2012/10/03'),
    updatedAt: new Date(),
    userId: 2,
  },
  {
    id: 2,
    title: ' book2',
    resume: ' resume du Book2',
    images: ' image du livres2',
    createdAt: new Date('2013/10/03'),
    updatedAt: new Date(),
    userId: 2,
  },
  {
    id: 3,
    title: ' book3',
    resume: ' resume du Book3',
    images: ' image du livres3',
    createdAt: new Date('2014/10/03'),
    updatedAt: new Date(),
    userId: 2,
  },
  {
    id: 4,
    title: ' book4',
    resume: ' resume du Book4',
    images: ' image du livres4',
    createdAt: new Date('2015/10/03'),
    updatedAt: new Date(),
    userId: 2,
  },
];
