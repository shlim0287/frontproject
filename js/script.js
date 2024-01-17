// script.js

document.addEventListener("DOMContentLoaded", function () {
  let emailInput = document.getElementById("email");
  let emailIcon = document.getElementById("emailIcon");

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

  emailInput.addEventListener("input",function (){
    if(!emailInput.checkValidity()){
      emailInput.placeholder="Invalid email address";
    }
  });
});




// 모달 열기 버튼
let openModalBtn = document.getElementById("openModalBtn");

// // 모달 닫기 버튼
let closeModalBtn = document.getElementById("closeModalBtn");

// 모달 요소
let modal = document.getElementById("subs_modal");

// 열기 버튼을 클릭하면 모달을 표시
openModalBtn.onclick = function () {
  // 유효하지 않은 이메일이면 모달을 띄우지 않음
  if (!emailInput.checkValidity()) {
    emailInput.placeholder="Invalid email address";
  } else {
    modal.style.display = "block";
  }
};

// // 닫기 버튼을 클릭하거나 모달 외부를 클릭하면 모달을 숨김
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
