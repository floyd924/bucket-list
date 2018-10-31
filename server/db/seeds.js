use bucket_list;
db.dropDatabase();

db.wishes.insertMany([
  {
    name: "Drive a convertible car through the Alps",
    location: "French Alps",
    image_url: "https://i.dailymail.co.uk/i/pix/2015/03/21/23/26E02B3200000578-3005972-The_car-m-66_1426981268829.jpg"
  },
  {
    name: "Visit New Zealand",
    location: "New Zealand",
    image_url: "https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/milford-sound.jpg?focalpointx=61&focalpointy=52&height=427&outputformat=jpg&quality=85&source=3097492&transformationsystem=focalpointcrop&width=640&securitytoken=DEDF8293A96FD582A28F2103F0F80B86"
  },
  {
    name: "US road trip",
    description: "See blues bands in Chicago, eat food in New York, see the Grand Canyon, surf in California, see the geology around San Francisco, Yellowstone, and Yosemite.",
    location: "United States of America",
    image_url: "https://luxurybackpacking.net/wp-content/uploads/2017/08/USA-Road-trip.png"
  },
  {
    name: "Get music on iTunes",
    image_url: "https://www.washingtonpost.com/resizer/kXgricS06sGMbcfA3rl3QUlxvug=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EWA7NFBODII6RMFQ64DIO7NWDA.jpg"
  }
]);
