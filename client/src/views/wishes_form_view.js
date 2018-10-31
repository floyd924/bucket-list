const PubSub = require('../helpers/pub_sub.js');

const WishesFormView = function(form) {
  this.form = form;
};

WishesFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  });
};

WishesFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newWish = this.createWish(event.target);
  PubSub.publish('WishesFormView:wish-submitted', newWish);
  // console.log('Published', newWish);
};


WishesFormView.prototype.createWish = function (form) {
  const newWish = {
    name: form.name.value,
    description: form.description.value,
    location: form.location.value,
    image: form.image.value
  }
  return newWish;
};

module.exports = WishesFormView;
