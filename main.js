//define db
var db = {};
 
//define db functions
db.add = function(k, v, id="b36e04dc-c473-44bf-ad87-0e49fc5060b5", bas="database"){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
  		k: v
	});

	var requestOptions = {
  		method: 'PUT',
  		headers: myHeaders,
  		body: raw,
  		redirect: 'follow'
	};

	
	fetch("https://getpantry.cloud/apiv1/pantry/" + id + "/basket/" + bas + "/", requestOptions)
  		.then(response => response.text())
  		.then(result => console.log(result))
  		.catch(error => console.log('error', error));
}


db.data; 


db.get = function(id="b36e04dc-c473-44bf-ad87-0e49fc5060b5",bas="database"){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	
	fetch("https://getpantry.cloud/apiv1/pantry/" + id + "/basket/" + bas + "/", requestOptions)
	  	.then(response => response.text())
	  	.then(result => db.data = result)
	  	.catch(error => console.log('error', error));
}
