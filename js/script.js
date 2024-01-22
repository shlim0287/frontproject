// script.js

let emailIcon = document.getElementById("emailIcon");
let emailInput = document.getElementById("email");

let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");
let modal = document.getElementById("subs_modal");


let scrollTop = document.getElementById("scrollTop");
let scrollDown = document.getElementById("scrollDown");


document.addEventListener("DOMContentLoaded", attachEmailInputListeners);

openModalBtn.addEventListener("click",handleModalDisplay);
closeModalBtn.addEventListener("click",handleCloseModal);

window.addEventListener('scroll', scrollFunction);

scrollTop.addEventListener('click', handleScrollTop);
scrollDown.addEventListener('click',handleScrollDown);


document.querySelector(".subs_blog_form").addEventListener("submit",handleFormDefault);
function handleFormDefault(event){
  event.preventDefault();
  handleModalDisplay();
}

function handleModalDisplay() {
  if (emailInput.checkValidity() && emailInput.value !== "") {
    modal.style.display = "block";

    emailInput.style.border = "none";

    emailInput.value = "";
  } else {
    emailInput.style.border = "2px solid red";
  }
}
function attachEmailInputListeners() {
  if (emailInput && emailIcon) {
    emailInput.addEventListener("focus", handleFocus);
    emailInput.addEventListener("blur", handleBlur);
  }
}

function handleFocus (){
  emailIcon.style.display="none";
}
function handleBlur(){
  if (emailInput.value === "") {
    emailIcon.style.display = "block";
  }
}


function handleCloseModal(){
  modal.style.display="none";
}


function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    scrollTop.classList.add("show");
    scrollDown.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
    scrollDown.classList.remove("show");
  }
}


function handleScrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function handleScrollDown() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
}
