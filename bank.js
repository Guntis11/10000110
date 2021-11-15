var output2020 = "";
var output2021 = "";
var input = "";
var starpiba = "";
var tax2020 = 0.67;
var tax2021 = 0.70;
function button()
    {
      var output2020 = document.getElementById("input").value * tax2020;
      var output2021 = document.getElementById("input").value * tax2021;
      var starpiba = output2021 - output2020;
     // alert("2020: " + output2020 + " / 2021: " + output2021 + " / Starpiba: " + starpiba)
      document.getElementById("p2021").innerHTML = "Alga 2021. gadā: " + output2021
      document.getElementById("p2020").innerHTML = "Alga 2020. gadā: " + output2020
      document.getElementById("pstarpiba").innerHTML = "Starpība: " + starpiba
    }

  