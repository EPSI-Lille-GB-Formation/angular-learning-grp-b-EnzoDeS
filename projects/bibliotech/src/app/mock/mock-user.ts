import { User } from '../models/user';

export const USERS: User[] = [
  {
    id: 1,
    firstname: 'test1',
    lastname: 'lastnametest1',
    email: 'test1@test.fr',
    password: 'test1',
    role: 'user',
  },
  {
    id: 2,
    firstname: 'Enzo',
    lastname: 'lastnametest2',
    email: 'test2@test.fr',
    password: 'test2',
    role: 'auteur',
  },
  {
    id: 3,
    firstname: 'test3',
    lastname: 'lastnametest3',
    email: 'test3@test.fr',
    password: 'test3',
    role: 'admin',
  },
];
