import './global.pcss';
import { createMenuItem } from './assets/js/builder';

const triple = {
  name: 'Triples especiales',
  info: '',
  prices: [
    {
      unit: '1/2',
      value: '350',
    },
    {
      unit: 'entero',
      value: '500',
    },
  ],
  ingredients: 'peceto-pollo',
};

document
  .getElementById('cafe')
  .insertAdjacentHTML('beforeend', createMenuItem(triple));
