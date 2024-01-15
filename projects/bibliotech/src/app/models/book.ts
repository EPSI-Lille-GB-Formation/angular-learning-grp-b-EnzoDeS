import { User } from './user';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public resume: string,
    public images: string,
    public createdAt: Date,
    public updatedAt: Date,
    public user: User
  ) {
    this.createdAt = new Date();
  }
}
