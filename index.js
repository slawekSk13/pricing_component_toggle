// slider toggler
var sliderCheck = true;

function sliderChange () {
  document.querySelector(".slider").classList.toggle("slider-inactive");
  if(sliderCheck === true) {
    document.querySelectorAll("h1")[0].innerText = "$199.99";
    document.querySelectorAll("h1")[1].innerText = "$249.99";
    document.querySelectorAll("h1")[2].innerText = "$399.99";
  } else {
    document.querySelectorAll("h1")[0].innerText = "$19.99";
    document.querySelectorAll("h1")[1].innerText = "$24.99";
    document.querySelectorAll("h1")[2].innerText = "$39.99";
  }
    sliderCheck = sliderCheck ? false : true;
    return sliderCheck;
}

document.getElementById("slider").addEventListener("click", sliderChange);
