var db = {};
//Write here your db url
db.url;
db.loadData = function(){
  fetch(db.url)
  .then(response => response.json())
  .then(data => return data);
}
db.editData(variable, content){
  
}
