const RequestHelper = function(url) {
  this.url = url;
};



//index
RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

//show
//this should work but we don't know for sure
// RequestHelper.prototype.getID = function (id) {
//   return fetch(`${this.url}/${id}`)
//     .then((response) => response.json())
// };



//create
RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
  .then((response) => response.json());
};



//update
//should work, but we dont know for sure
// RequestHelper.prototype.put = function (id, payload) {
//   return fetch(`${this.url}/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(payload),
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then((response) => response.json());
// 
// };



//delete

RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.json());
};





module.exports = RequestHelper;
