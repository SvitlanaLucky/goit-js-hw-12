import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getAllPhotos, getMorePhoto, instance } from './js/pixabay.-api';
import {
  photosTamplate,
  photosTamplateFromLoadMore,
} from './js/render-functions';

const lightbox = new SimpleLightbox('.image-container a', {
  captionDelay: 250,
});

let searchQuery = '';
