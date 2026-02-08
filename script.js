const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})


const img = document.querySelector('.two-image img');

let currentScale = 1;
let targetScale = 1;

const ease = 0.08; // smaller = smoother/slower

window.addEventListener('scroll', () => {
  targetScale = 1 + window.scrollY / 1000;
});

function animate() {
  currentScale += (targetScale - currentScale) * ease;
  img.style.transform = `scale(${currentScale})`;
  requestAnimationFrame(animate);
}

animate();


