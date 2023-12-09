const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};
const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

const carouselImg = document.querySelector(".carousel-product-hot");

const dragStartImg = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carouselImg.scrollLeft;
};

const draggingImg = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carouselImg.scrollLeft = prevScrollLeft - positionDiff;
};
const dragStopImg = () => {
  isDragStart = false;
};

carouselImg.addEventListener("mousedown", dragStartImg);

carouselImg.addEventListener("mousemove", draggingImg);

carouselImg.addEventListener("mouseup", dragStopImg);

const submitGmail = document.getElementById("submitGmail");
const showThank = document.getElementById("showThank");

submitGmail.onclick = (e) => {
  e.preventDefault();
  showThank.style.display = "block";
};

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper2 = new Swiper(".mySwiperitemProduct", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const filter = document.getElementById("filterRight");

filter.onclick = () => {
  var element = document.getElementById("headerLeft");
  element.style.visibility = "visible";
  element.classList.add("show");
};
const close = document.getElementById("close-menu");
close.onclick = () => {
  const headerleft = document.getElementById("headerLeft");
  headerleft.style.visibility = "hidden";
  headerleft.classList.remove("show");
};
