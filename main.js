//Include jQuery
//define db
var db = {};
 
//define db functions
db.add = function(k, v, bas="ok"){
	var settings = {
  "url": "https://getpantry.cloud/apiv1/pantry/2ffe12f3-0436-4ea7-8e4a-5549d02e603d/basket/" + bas,
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": "{'" + k + "':'" + v + "'}"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
}


db.data; 


db.get = function(bas="ok"){
	var settings = {
  "url": "https://getpantry.cloud/apiv1/pantry/2ffe12f3-0436-4ea7-8e4a-5549d02e603d/basket/" + bas,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
}
