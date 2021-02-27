import './global.pcss';
import { createMenuItem } from './assets/js/builder';
import data from './data/menu';

// 1. Get every menu on the page
const menuContainers = document.querySelectorAll('.menu');

if (menuContainers) {
  // 2. Use the menu id to access the array that contains the menu items.
  //    The createMenuItem method returns a menu-item HTML element as a string.
  menuContainers.forEach((menu) => {
    const markdown = data[menu.id].map((item) => createMenuItem(item)).join('');
    menu.insertAdjacentHTML('beforeend', markdown);
  });
}
