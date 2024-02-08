import { book } from '../models/book';

export const BOOKS: book[] = [
  {
    id: 1,
    title: 'Mashle',
    resume: 'Le résumé de Mashle',
    image: 'https://otakulevel10.fr/wp-content/uploads/2023/02/Mashle_Anime_Teaser_Visual.webp',
    createDate: new Date(2024 / 1 / 1),
    updateDate: null,
    id_user:1
  },
  {
    id: 2,
    title: 'Death note',
    resume: 'Le résumé de Death note',
    image: 'https://m.media-amazon.com/images/I/71Z+r6-8SjL._AC_UF1000,1000_QL80_.jpg',
    createDate: new Date(2024 / 1 / 1),
    updateDate: null,
    id_user:1
  },
  {
    id: 3,
    title: 'Naruto',
    resume: 'Le résumé de Naruto',
    image: 'https://fr.web.img2.acsta.net/pictures/19/08/02/15/12/4423178.jpg',
    createDate: new Date(2024 / 1 / 1),
    updateDate: null,
    id_user:1
  },
  {
    id: 4,
    title: 'Frieren',
    resume: 'Le résumé de Frieren',
    image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f446d7a2a155c6120742978fb528fb82.jpe',
    createDate: new Date(2024 / 1 / 1),
    updateDate: null,
    id_user:1
  },
];
