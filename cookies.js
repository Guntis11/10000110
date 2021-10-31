"use strict"

let Nomaina = 0;

function Nospied() {
    let krasa = document.getElementById("body");
    switch(Nomaina){
      case 0: 
        krasa.style.backgroundColor = "grey";
        Nomaina++;
        document.cookie = "grey";

        break;
      case 1:
        krasa.style.backgroundColor = "azure";
        Nomaina--;
        document.cookie = "azure";

        break;  
    }
}

setCookie();
function setCookie(){
  let cookie = document.cookie;
  if(cookie.getCookie != "grey") {
    document.cookie = "azure";

  }
}
readCookie();
function readCookie(){
  let krasa = document.cookie("Krasa");
  if(krasa){
    case "grey":
      krasa.style.backgroundColor = "grey";
      Nomaina = 1;
      break;

    case "azure":
      krasa.style.backgroundColor = "azure";
      Nomaina = 0;
      break;
      default:
      Nomaina = 1;
  }    
}
