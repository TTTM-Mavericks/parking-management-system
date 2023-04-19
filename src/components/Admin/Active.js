const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active')); // remove active class from all items
    item.classList.add('active'); // add active class to the clicked item
  });
});
// In this code, we first select all li elements and add a click event listener to each of them. When an item is clicked, we first remove the active class from all li elements, and then add the active class to the clicked item. The active class is defined in the CSS and changes the background color


