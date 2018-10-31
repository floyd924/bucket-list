//listens for data-loaded

const PubSub = require('../helpers/pub_sub.js');
const WishView = require('./wishes_view.js');

const WishesGridView = function (container) {
  this.container = container;
};

WishesGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Wishes:data-loaded', (event) => {
    this.render(event.detail);
  });
};

WishesGridView.prototype.render = function (wishes) {
  this.container.innerHTML = '';
  const wishView = new WishView(this.container);
  wishes.forEach((wish) => wishView.render(wish));

};

module.exports = WishesGridView;
