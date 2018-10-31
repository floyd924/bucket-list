const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

// bindEvents
  // subs to deleted
  // subs to submitted
  // subs to updated

const Wishes = function(url) {
  this.url = "http://localhost:3000/api/wishes";
  this.request = new RequestHelper(this.url);
};

  Wishes.prototype.bindEvents = function () {
    PubSub.subscribe('WishView:delete-clicked', (event) => {
      this.deleteWish(event.detail);
    });

    PubSub.subscribe('WishesFormView:wish-submitted', (event) => {
      // console.log("Received", event.detail);
      this.postWish(event.detail);
    })
  };

  Wishes.prototype.postWish = function (wish) {
    // console.log("Postwish console log:", wish);
    this.request.post(wish)
    .then( (wishes) => {
      PubSub.publish('Wishes:data-loaded', wishes);
    })
    .catch(console.error);
  };

  Wishes.prototype.getData = function () {
    this.request.get()
    .then( (docs) => {
      PubSub.publish('Wishes:data-loaded', docs);
    })
    .catch(console.error);
  };

  Wishes.prototype.deleteWish = function (wishId) {
    this.request.delete(wishId)
    .then( (wishes) => {PubSub.publish('Wishes:data-loaded', wishes);
  })
    .catch(console.error);
  };

module.exports = Wishes;
