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

  const name = this.createName(wish.name);
  wishContainer.appendChild(name);

  const description = this.createParagraph('Description', wish.description);
  wishContainer.appendChild(description);

  const location = this.createParagraph('Location', wish.location);
  wishContainer.appendChild(location);

  const image = this.createImage(wish.image_url);
  // console.log("THIS IS OUR CONSOLE LOG:", wish);
  wishContainer.appendChild(image);

  //h3
  // const wishHeading = document.createElement('h3');
  // wishHeading.textContent = wish.name.value;
  // wishContainer.appendChild(wishName);
  //
  // //p
  // const wishDescription = document.createElement('p');
  // if(wish.description != undefined) {
  //   wishDescription.textContent = wish.description.value;
  //   wishContainer.appendChild(wishDescription);
  //   return wishDescription;
  // };
  //
  //
  // //p
  // const wishLocation = document.createElement('p');
  // if(wish.location != undefined) {
  //   wishLocation.textContent = wish.location.value;
  //   wishContainer.appendChild(wishLocation);
  //   return wishLocation;
  // }
  //
  //
  // //img
  // const wishImage = document.createElement('img');
  // if(wish.image != undefined) {
  //   wishImage.src = wish.image.value;
  //   wishContainer.appendChild(wishImage);
  //   return wishImage;
  // }
  //
  // //button
  //   //event listener
  const deleteButton = document.createElement('button');
  deleteButton.value = wish._id;
  deleteButton.textContent = "DELETE";
  wishContainer.appendChild(deleteButton);

  //append div to container
  this.container.appendChild(wishContainer);
  // console.log("Container:", this.container);

  deleteButton.addEventListener('click', (event) => {
    PubSub.publish('WishView:delete-clicked', event.target.value);
  });
};

WishView.prototype.createName = function (text) {
  const heading = document.createElement('h3');
  heading.textContent = text;
  return heading;
};

//create paragraph

WishView.prototype.createParagraph = function (label, text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `${label}: ${text}`;
  return paragraph;
};

//create image
WishView.prototype.createImage = function (text) {
  const image = document.createElement('img');
  image.src = text;
  return image;
};


module.exports = WishView;
