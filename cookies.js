use strict"

let Nomaina = 0;
// let krasa = document.getElementById("body");


function Nospied() {
  let krasa = document.getElementById("body");

    switch(Nomaina){
      case 0: 
        krasa.style.backgroundColor = "grey";
        Nomaina++;
        document.cookie = "Krasa=grey";

        break;
      case 1:
        krasa.style.backgroundColor = "azure";
        Nomaina--;
        document.cookie = "Krasa=azure";

        break;  
    }
}


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
console.log(getCookie("Krasa"));




setcolor()
function setcolor() {
  let krasa = document.getElementById("body");

  switch(getCookie("Krasa"))
  {
    case "grey":
      krasa.style.backgroundColor = "grey";
      Nomaina = 1;
      break;

    case "azure":
      krasa.style.backgroundColor = "azure";
      Nomaina = 0;
      break
  }
}
