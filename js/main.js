const btn = document.querySelector('.header__burger-btn');
const head = document.querySelector('.header__inner');

btn.addEventListener('click', ()=>{
	head.classList.toggle('menu-open');
});



