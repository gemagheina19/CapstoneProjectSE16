let navbar = document.querySelector('.header .navigation');

document.querySelector('#menu_btn').onclick = () =>{
    console.log('work');
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    console.log('work');
    navbar.classList.remove('active');
}


window.onscroll=()=>{
    navbar.classList.remove('active');
}





let searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () =>{
    console.log('work');
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    console.log('work');
    searchForm.classList.remove('active');
}


window.onscroll=()=>{
    navbar.classList.remove('active');

    if (window.scrollY >0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }
}


window.onload=()=>{
    navbar.classList.remove('active');

    if (window.scrollY >0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }
}

var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween:10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
  },
});


var swiper = new Swiper(".client-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween:10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// js error messgae

function validateAndSubmit() {
  var nomorHPInput = document.getElementById('nomorHP');
  var nomorHPError = document.getElementById('nomorHPError');

  var nomorHPRegex = /^62[0-9]{10,11}$/;
  if (!nomorHPRegex.test(nomorHPInput.value)) {
      nomorHPError.style.display = 'block'; 
      return; 
  }

  nomorHPError.style.display = 'none'; 

  console.log('Formulir berhasil diajukan!');
}
