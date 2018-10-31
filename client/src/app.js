const WishesFormView = require('./views/wishes_form_view.js');
const Wishes = require('./models/wishes.js');
const WishesGridView = require('./views/wishes_grid_view.js');

document.addEventListener('DOMContentLoaded', function() {
  console.log("App loaded");

  const form = document.querySelector('#form');
  const wishesFormView = new WishesFormView(form);
  wishesFormView.bindEvents();


  const wishesContainer = document.querySelector('#wishes-list');
  const wishesGridView = new WishesGridView(wishesContainer);
  wishesGridView.bindEvents();

  const wishes = new Wishes();
  wishes.bindEvents();
  wishes.getData();
});
