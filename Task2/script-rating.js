const append = new URLSearchParams(window.location.search);

append.set('Ayush', '9');
window.location.search = append;



setTimeout(function(){ 
const paramValue= new URLSearchParams(window.location.search);
const rate = paramValue.get('Ayush');
console.log(rate);
var radiobtn = document.getElementById(rate);
radiobtn.checked = true;
var radios = document.querySelectorAll("input[type=radio]");
for (var i = 0, iLen = radios.length; i < iLen; i++) {
  radios[i].onclick = function() {
    showResult(this.name);
  }
}

function showResult(name) {
  var x = document.getElementsByName(name);
  const rate = paramValue.get('Ayush');
  for (var i = 0; i < x.length; i++) {
  	if(x[i].id == rate){x[i].enabled = true;}else{
  		x[i].checked=false;
  		x[i].disabled = true; }
    
  }
}


 }, 3000);

