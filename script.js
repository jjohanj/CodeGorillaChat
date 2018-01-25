
var number = "";
setInterval(testFunction, 5000);

function loadDoc() {
  var x = document.getElementById("myText").value;
  var y = document.getElementById("myName").value;
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=write&mykey=0101034&value=" + y +": " + x, false);
  xhttp.send();

  number = parseInt(xhttp.responseText);
  var returnText = "https://www.codegorilla.nl/read_write/api.php?action=read&mykey=0101034&id=" + number;

  xhttp.open("GET", returnText, false);
  xhttp.send();

  var newp = document.createElement("p");

  var chattext = document.getElementById("demo").appendChild(newp);
  chattext.innerHTML = xhttp.responseText;
  clearField();


}

function clearField() {
    document.getElementById("myText").value = "";
}

function testFunction() {

  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=list&mykey=0101034", false);
  xhttp.send();

  var list = xhttp.responseText;
  var b = list.split(',').map(Number);

  if (number === "") {
  number = b.slice(-1)[0];
  console.log (number);
  }
  console.log (number);

  var index = b.indexOf(number) + 1;
  b.splice(0, index);


  var xhttp = new XMLHttpRequest();
  var i;
  for (i = 0; i < b.length; i++) {


    xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=read&mykey=0101034&id=" + b[i], false);
    xhttp.send();

    var newp2 = document.createElement("p");
    var chattext2 = document.getElementById("demo").appendChild(newp2);
    chattext2.innerHTML = xhttp.responseText;
}
console.log(number);
console.log(b);
if (b.length > 0){
    var length = b.length;
    number = number + length;
  }

}
