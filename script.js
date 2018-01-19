
var number = ""

function loadDoc() {
  var x = document.getElementById("myText").value;
  var y = document.getElementById("myName").value;
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=write&mykey=0101033&value=" + y +": " + x, false);
  xhttp.send();

  number = parseInt(xhttp.responseText);
  var returnText = "https://www.codegorilla.nl/read_write/api.php?action=read&mykey=0101033&id=" + number;

  xhttp.open("GET", returnText, false);
  xhttp.send();

  var newpar = document.createElement("p");

  var chattext = document.getElementById("demo").appendChild(newpar);
  chattext.innerHTML = xhttp.responseText;
  clearField();
}

function clearField() {
    document.getElementById("myText").value = "";
}

function testFunction() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=list&mykey=0101033", false);
  xhttp.send();

  var list = xhttp.responseText;
  var b = list.split(',').map(Number);

  var i;
  for (i = 0; i < b.length; i++) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://www.codegorilla.nl/read_write/api.php?action=read&mykey=0101033&id=" + b[i], false);
    xhttp.send();

    var newpar2 = document.createElement("p");
    var chattext2 = document.getElementById("demo").appendChild(newpar2);
    chattext2.innerHTML = xhttp.responseText;

  }

}
