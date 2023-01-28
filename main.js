class DB{
	constructor(binId, masterKey){
		this.binId = binId;
		this.masterKey = masterKey;
		this.data = {};
	}
	uptade(a, b){
		let req = new XMLHttpRequest();
	
	req.onreadystatechange = () => {
  		if (req.readyState == XMLHttpRequest.DONE) {
    		console.log(req.responseText);
		  }
	};
	
	req.open("PUT", "https://api.jsonbin.io/v3/b/" + this.binId, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Master-Key", this.masterKey);
	this.data[a] = b;
	req.send(JSON.stringify(this.data));
	}
	
	//get function
	get(callback="console.log"){
	let req = new XMLHttpRequest();

	req.onreadystatechange = () => {
	  if (req.readyState == XMLHttpRequest.DONE) {
	    eval(callback + "(" + req.responseText + ")")
	    this.data = JSON.parse(req.responseText);
	  }
	};
		
	req.open("GET", "https://api.jsonbin.io/v3/b/" + this.binId + "?meta=false", true);
	req.setRequestHeader("X-Master-Key", this.masterKey);
	req.send();
}
}
