/* create a new view
h3 - name
paragraphs - desc, location, img
delete button
update button
*/


const PubSub = require('../helpers/pub_sub.js');

const WishView = function (container) {
  this.container = container;
};

WishView.prototype.render = function (wish) {

  const wishContainer = document.createElement('div');
  wishContainer.id = 'wish';

  //h3
  const wishName = document.createElement('h3');
  wishName.textContent = wish.name.value;
  wishContainer.appendChild(wishName);

  //p
  const wishDescription = document.createElement('p');
  wishDescription.textContent = wish.description.value;
  wishContainer.appendChild(wishDescription);

  //p
  const wishLocation = document.createElement('p');
  wishLocation.textContent = wish.location.value;
  wishContainer.appendChild(wishLocation);


  //img
  const wishImage = document.createElement('img');
  wishImage.src = wish.image.value;
  wishContainer.appendChild(wishImage);

  //button
    //event listener
  const deleteButton = document.createElement('button');
  deleteButton.value = wish._id;
  wishContainer.appendChild(deleteButton);

  //append div to container
  this.container.appendChild(wishContainer);

};

module.exports = WishView;
