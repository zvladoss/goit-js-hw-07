const refs = {
  list: document.querySelector('#categories'),
  items: document.querySelectorAll('#categories .item'),
  categoriesTitle: document.querySelectorAll('h2'),
  categoriesList: document.querySelectorAll('li ul'),
  categoriesListItem: document.querySelectorAll('li ul li'),
  paragraph: document.querySelector('p'),
};

console.log(`Number of categories: ${refs.items.length}`);

refs.items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
refs.list.classList.add('categories');
refs.categoriesTitle.forEach(title => title.classList.add('categories-title'));
refs.categoriesList.forEach(list => list.classList.add('categories-list'));
refs.categoriesListItem.forEach(item => item.classList.add('categories-list-item'));

const newDiv = document.createElement('div');
newDiv.classList.add('task-1-container');

refs.list.parentNode.insertBefore(newDiv, refs.list)
newDiv.appendChild(refs.list);
