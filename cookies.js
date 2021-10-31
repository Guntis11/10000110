"use strict"

let Nomaina = 0;

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

setCookie();
function setCookie(){
  let cookie = document.cookie;
  if(cookie.getCookie !== "krasa") {
    document.cookie = "Krasa=azure";

  }
}
readCookie();
function readCookie(){
  let krasa = getCookie("Krasa");
  switch(krasa){
    case "grey":
      krasa.style.backgroundColor = "grey";
      Nomaina = 1;
      break;

    case "azure":
      krasa.style.backgroundColor = "azure";
      Nomaina = 0;
      break;
  }    
}
