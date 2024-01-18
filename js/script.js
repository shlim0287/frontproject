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
    emailInput.addEventListener("focus", handleFocus);

    emailInput.addEventListener("blur", handleBlur);
  }
});

function handleFocus (){
  emailIcon.style.display="none";
}
function handleBlur(){
  if (emailInput.value === "") {
    emailIcon.style.display = "block";
  }
}


openModalBtn.addEventListener("click",function (){
  if(emailInput.checkValidity()){
    modal.style.display="block";
  }
})

closeModalBtn.addEventListener("click",function (){
  modal.style.display="none";
})



window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    scrollTop.classList.add("show");
    scrollDown.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
    scrollDown.classList.remove("show");
  }
}


scrollTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

scrollDown.addEventListener('click', function() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
});
