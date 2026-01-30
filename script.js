const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})


const img = document.querySelector('.two-image img');

let scale = 1;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  scale = 1 + scrollY / 1000; 
  img.style.transform = `scale(${scale})`;
});


