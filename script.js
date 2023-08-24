'use strict';

// ///////////////////////////////////////
// // Selecting elements 
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// console.log(header);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

// // // Creating or inserting Elements 
// // header.insertAdjacentHTML = "<p> my name is fatima</p>"
// const box = document.createElement('div');
// box.classList.add('cookie-message');
// // box.textContent = 'This is to improve the security and functionality of the site';
// box.innerHTML = 'This is to improve the security and functionality of the site <button class="btn nav__link--btn btn--show-modal btn-btn-closest"> Got it </button>';
// header.append(box);
// // // header.prepend(box.cloneNode(true));

// // header.before(box);
// // // header.after(box.cloneNode(true));

// // Deleting Elements
// document.querySelector('.btn-btn-closest').addEventListener("click", function(){
//   box.remove();
// });

// // ///////////////////////////////////////
// // CSS Styles 
// box.style.backgroundColor = 'gray';
// box.style.width = '100vw'

// console.log(box.style.color); //cannot read
// console.log(getComputedStyle(box).color);
// box.style.height = Number.parseFloat(getComputedStyle(box).height, 10) + 30 + "px"

// // document.documentElement.style.setProperty('--color-primary', "cadetblue");

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.src);

// console.log(logo.getAttribute('src'));
// logo.setAttribute('designer', "fatima");

// // data attributes
// logo.setAttribute('data-version-number', "3.0");
// console.log(logo.dataset.versionNumber);

///////////////////////////////////////
// Handling Events 
// const h1 = document.querySelector('h1');
// // // console.log(h1);
// const h1Alert = function(){
//   alert("you entered h1");
//   h1.removeEventListener('mouseenter', h1Alert);
// }
// h1.addEventListener('mouseenter', h1Alert);

// setTimeout(h1Alert, 5000);

// h1.addEventListener('mouseleave', function(){
//   alert("you leave h1")
// })

// h1.onmouseenter = function(){
//   alert("mouse on enter");
// }

///////////////////////////////////////
//capturing and bubbling
//capturing is moving and checking the target event from parent to the target node
//bubling is returning from target node to parent node 
//target node is where the evnet happens

//////////////////////////////////////
// //BUBBLING event

// const features = document.querySelector('.nav__link');
// const linkbar = document.querySelector('.nav__links');
// const nav = document.querySelector('.nav');

// //making colors 
// const ranNum = (min, max) => {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const color = () => `rgb(${ranNum(0, 255)}, ${ranNum(0, 255)}, ${ranNum(0, 255)})`;
// console.log(color());;

// // bubbling event
// linkbar.addEventListener('click', function(e){
//   this.style.backgroundColor = `${color()}`;
//   // console.log(e.currentTarget);
// });

// features.addEventListener('click', function(e){
//   this.style.backgroundColor = `${color()}`;
//   // console.log(e.currentTarget);
// });

// nav.addEventListener('click', function(e){
//   this.style.color = `${color()}`;
//   // console.log(e.currentTarget);
// });

///////////////////////////////////
// //DOM Traversing 

// // downwards: parent to child 
// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// console.log(h1.lastChild);
// console.log(h1.firstChild);
// h1.firstElementChild.style.color = 'purple';
// h1.lastElementChild.style.color = 'orangered';

// //upwards: child to parent 
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'cadetblue';
// console.log(h1.closest('h1'));

// // sideways: Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el)=>{
//   if(el !== h1){
//     el.style.transform = 'scale(0.5)'
//   }
// });

// 📌SELECTORS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const tabContainer =  document.querySelector('.operations__tab-container');
const operationTabs = document.querySelectorAll('.operations__tab');
const contentTabs = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');
///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Scrolling
btnScrollTo.addEventListener('click', function(e){
  // x, y, top, bottom, left, right
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  //scroll distance of x and y to the initial
  console.log(window.pageXOffset, window.pageYOffset);

  // viewport height and width
  console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left:s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // })
  
  section1.scrollIntoView({behavior: 'smooth'});
});

/////////////////////////////////
//Navbar navigation (event delegation)

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener("click", function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })

// use minimum event listeners to speedup the performance
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
  console.log(e.target);
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

//////////////////////////////////
//Tabbed component
tabContainer.addEventListener("click", function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // guard clause(null)
  if(!clicked) return;

  // for tabs
  operationTabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // for content
  contentTabs.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

////////////////////////////////////
// Navbar Fading
const handleOver = function(e){
  // console.log(this);
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    // console.log(link);
    const sibling = e.target.closest('.nav').querySelectorAll('.nav__link');
    // console.log(sibling);
    const logo = e.target.closest('.nav').querySelector('img');
    // console.log(logo);

    sibling.forEach(el => {
      if(el != link)el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));

////////////////////////////////////
// Sticky navigation 
// window.addEventListener('scroll', function(e){
//   // console.log(window.scrollY);
//   if(window.scrollY > section1.getBoundingClientRect().top){
//     nav.classList.add('sticky');
//   }else {
//     nav.classList.remove('sticky');
//   }
// });

///////////////////////////////////
//Intersection observer API (IOA)

// const callBackFunc = function(entries){
//   entries.forEach(entry => console.log(entry));
// }
// const observerOpts = {
//   root: null,
//   threshold: [0, 0.2],
// }
// const observer = new IntersectionObserver(callBackFunc, observerOpts);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const func = function(entries){
  // console.log(entries);
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting){
    nav.classList.add('sticky');
  }else{
    nav.classList.remove('sticky');
  }
}
const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
}
const headerObserver = new IntersectionObserver(func, options);
headerObserver.observe(header);

////////////////////////////////////
//Sections revealing
const allSections = document.querySelectorAll('.section'); 
const sectionFunc = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(sectionFunc, {
  root: null,
  threshold: 0.15,
});
// for all sections observe
allSections.forEach((section) =>{
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//////////////////////////////////
//Lazy loading Images 
const images = document.querySelectorAll('img[data-src]');
// console.log(images);
const imgFunc = function(entries, observer){
  const [entry] = entries;
  // console.log(entry.target);

  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const lazyImg = new IntersectionObserver(imgFunc, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
images.forEach(img => lazyImg.observe(img));


/////////////////////////////////////
//Slider Component 
const slider = function(){
  const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
let currSlide = 0;

// slider.style.overflow = 'visible';
// slider.style.transform = `scale(0.5) translateX(-900px)`
// console.log(slides);

const goToSlide = function(curr){
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curr)}%)`;
    dotActivate(curr);
  });
}

const nextSlide = function(){
  if(currSlide < (slides.length - 1)){
    currSlide++;
    goToSlide(currSlide);
  }else if(currSlide === (slides.length - 1)){
    currSlide = 0
    goToSlide(currSlide);
  }
}

const prevSlide = function(){
  if(currSlide === 0){
    currSlide = slides.length - 1;
    goToSlide(currSlide)
  }else if(currSlide > 0){
    currSlide--;
    goToSlide(currSlide)
  }
}

slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`) //0% 100% 200% 300%

//Click Events
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener("click", prevSlide);

// keyBoard Events 
document.addEventListener('keydown', function(e){
  // console.log(e);
  if(e.key === 'ArrowRight'){
    nextSlide();
  }
  if(e.key === 'ArrowLeft'){
    prevSlide();
  }
});

// dots
const dotContainer = document.querySelector('.dots');

const createDots = function(){
  slides.forEach((_, i) =>{
    dotContainer.insertAdjacentHTML('beforeend', `<button class ="dots__dot" data-slide = "${i}"></button>`);
  });
}
createDots();

const dotActivate = function(s){
  document.querySelectorAll('.dots__dot').forEach(d => d.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide= '${s}']`).classList.add('dots__dot--active');
}
dotActivate(0);

dotContainer.addEventListener("click", function(e){
  if(e.target.classList.contains('dots__dot')){
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    dotActivate(slide);
  }
});
}
slider();

/////////////////////////////
//OTHER DOM EVENTS
window.addEventListener("load", function(e){
  console.log("page fully loaded",e);
});

document.addEventListener('DOMContentLoaded', function(e){
  console.log("html and dom tree built", e);
});

// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })

