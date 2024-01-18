// script.js

let emailIcon = document.getElementById("emailIcon");
let emailInput = document.getElementById("email");

let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");
let modal = document.getElementById("subs_modal");


let scrollTop = document.getElementById("scrollTop");
let scrollDown = document.getElementById("scrollDown");


document.addEventListener("DOMContentLoaded", function () {
  if (emailInput && emailIcon) {
    emailInput.addEventListener("focus", function () {
      emailIcon.style.display = "none";
    });

    emailInput.addEventListener("blur", function () {
      if (emailInput.value === "") {
        emailIcon.style.display = "block";
      }
    });
  }

  // emailInput.addEventListener("input",function (){
  //   if(!emailInput.checkValidity()){
  //     // emailInput.placeholder="Invalid email address";
  //   }
  // });
});




openModalBtn.onclick = function () {
  if (emailInput.checkValidity())
    modal.style.display = "block";
};

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}




window.onscroll = function() { scrollFunction() };
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    scrollTop.classList.add("show");
    scrollDown.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
    scrollDown.classList.remove("show");
  }
}
scrollTop.onclick=function (){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
scrollDown.onclick=function (){
  window.scrollTo({
    top:document.documentElement.scrollHeight,
    behavior:"smooth"
  });
};

