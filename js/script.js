// script.js

let emailIcon = document.getElementById("emailIcon");
let emailInput = document.getElementById("email");

let openModalBtn = document.getElementById("openModalBtn");
let closeModalBtn = document.getElementById("closeModalBtn");
let modal = document.getElementById("subs_modal");




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
