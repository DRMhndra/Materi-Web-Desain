let dropdown = document.querySelectorAll('.dropdown');
for( let dropdownlist of dropdown ){
	dropdownlist.addEventListener('click',function(_event){
		if (_event.srcElement.className == "navbar__icon" || _event.srcElement.classList[0] == "text__link") {
			let path = _event.path[0].closest('.dropdown').nextElementSibling;
			path.classList.toggle('dropdown__list');
			path.classList.toggle('show');
			path.classList.toggle('show--fadeDown');
		} else {
			let target = _event.srcElement.parentElement.lastElementChild;
			target.classList.toggle('dropdown__list');
			target.classList.toggle('show');
			target.classList.toggle('show--fadeDown');
		}
	});
}

// button navbar
let buttonNav = document.querySelector('.main-navbar__button');
let headerMenu = document.querySelector('.header');
let main = document.querySelector('.main');
let text = document.querySelectorAll('.text__link');
let logoIcon = document.querySelector('.navbarBrand--icon');
buttonNav.addEventListener('click', function (_event) {
		if (headerMenu.classList.contains('change--size')) {
			headerMenu.classList.remove('change--size');
			headerMenu.style.width = '20%';
			main.style.width = '80';
			logoIcon.style.transform = `rotate(${0}deg)`;
			text.forEach((e) => {
				e.style.display = 'block';
			});
		} else {
			headerMenu.classList.add('change--size');
			headerMenu.style.width = '5%';
			main.style.width = '95%';
			logoIcon.style.transform = `rotate(${-180}deg)`;
			text.forEach((e) => {
				e.style.display = 'none';
			});
		}
})