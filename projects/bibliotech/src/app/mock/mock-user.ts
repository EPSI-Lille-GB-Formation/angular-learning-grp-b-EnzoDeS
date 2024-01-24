import { user } from '../models/user';

export const USERS: user[] = [
  {
    id: 1,
    firstname: 'Enzo',
    lastname: 'De Sousa',
    email: 'enzodesousa@gmail.com',
    password: 'EnzoDS',
    role: 'admin',
  },
  {
    id: 2,
    firstname: 'Maxime',
    lastname: 'Devillpoix',
    email: 'maximedevillpox@gmail.com',
    password: 'MaximeD',
    role: 'user',
  },
  {
    id: 3,
    firstname: 'Alister',
    lastname: 'Flandrynck',
    email: 'alisterflandrynck@gmail.com',
    password: 'AllisterF',
    role: 'user',
  },
  {
    id: 4,
    firstname: 'Matthieu',
    lastname: 'Cellier',
    email: 'matthieucellier@gmail.com',
    password: 'MatthieuC',
    role: 'user',
  },
];
