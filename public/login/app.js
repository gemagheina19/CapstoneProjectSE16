const sign_in_btn = document.querySelector("#sign-in-btn");
const back_btn = document.querySelector("#back-btn");
const back_btn2 = document.querySelector("#back-btn2");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

back_btn.addEventListener("click", () => {
  window.location.href = '../index.html';
});

back_btn2.addEventListener("click", () => {
  window.location.href = '../index.html';
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});



document.getElementById('loginForm').addEventListener('submit', function(event) {
  // Mengambil nilai username dan password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Melakukan validasi
  if (username === '' || password === '') {
    alert('Mohon isi semua kolom');
    event.preventDefault(); // Mencegah pengiriman formulir jika tidak valid
  } else {
    
  }
});