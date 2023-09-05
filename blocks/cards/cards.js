import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { h, Component, render } from 'https://esm.sh/preact';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  const sample = h('h1', null, 'Hello World!');
  const cards = Array.from(document.getElementsByClassName('cards')[0].children[0].children)
  cards.forEach(card => {render(sample, card)})
}
