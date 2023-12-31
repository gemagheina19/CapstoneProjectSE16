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

function tampilWaktu() {
    let waktuSekarang = new Date();
    let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][waktuSekarang.getDay()];
    let tanggal = waktuSekarang.getDate();
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][waktuSekarang.getMonth()];
    let tahun = waktuSekarang.getFullYear();
    let jam = waktuSekarang.getHours();
    let menit = waktuSekarang.getMinutes();
    let waktuZone = - waktuSekarang.getTimezoneOffset() / 60;

    if (jam < 10) {
        jam = "0" + jam;
    }
    if (menit < 10) {
        menit = "0" + menit;
    }

    let hariTanggalWaktu = document.getElementById("hariTanggalWaktu");
    hariTanggalWaktu.innerText = hari + ", " + tanggal + " " + bulan + " " + tahun + " , " + jam + ":" + menit + " WIB";
}

tampilWaktu();
setInterval(tampilWaktu, 1000);

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}
