// button navbar
let screenWidth = window.screen.width;
let buttonNav = document.querySelector('.main-navbar__button');
let headerMenu = document.querySelector('.header');
let main = document.querySelector('.main');
let text = document.querySelectorAll('.text__link');
let logoIcon = document.querySelector('.navbarBrand--icon');
let arrayOfDropdownList = [];

// Section Dropdown script
let dropdown = document.querySelectorAll('.dropdown');
for( let dropdownlist of dropdown ){
	dropdownlist.addEventListener('click',function(_event){
		if (_event.srcElement.className == "navbar__icon") {
			let headerClassRemove = headerMenu.classList[2];
			let mainClassRemove = main.classList[1];
			if(headerMenu.classList.contains('change--size')){
				changeSizeSideBar(`${headerClassRemove}`, `${mainClassRemove}`);
			}
		} else if (_event.srcElement.classList[0] == "text__link") {
			let path = _event.path[0].closest('.dropdown').nextElementSibling;
			path.classList.toggle('dropdown__list');
			path.classList.toggle('show');
			path.classList.toggle('show--fadeDown');
			let dropdownElement = document.querySelectorAll('.show--fadeDown');
			arrayOfDropdownList = dropdownElement;
		} else {
			let target = _event.srcElement.parentElement.lastElementChild;
			target.classList.toggle('dropdown__list');
			target.classList.toggle('show');
			target.classList.toggle('show--fadeDown');
			let dropdownElement = document.querySelectorAll('.show--fadeDown');
			arrayOfDropdownList = dropdownElement;
		}
	});
}

buttonNav.addEventListener('click', function (_event) {
	if (screenWidth >= 1200 && screenWidth < 1920) {
		closeDropdownFirst();
		changeSizeSideBar('header--changeSizeXl', 'main--changeSizeXl');
	} else	if (screenWidth >= 1024 && screenWidth < 1200 ) {
		closeDropdownFirst();
		changeSizeSideBar('header--changeSizeLg', 'main--changeSizeLg');
	} else	if (screenWidth >= 768 && screenWidth < 1024) {
		closeDropdownFirst();
		changeSizeSideBar('header--changeSizeNb', 'main--changeSizeNb');
	} else if (screenWidth >= 480 && screenWidth < 768) {
		closeDropdownFirst();
		changeSizeSideBar('header--changeSizeTb', 'main--changeSizeTb');
	}else {
		headerMenu.style.width = `100%`;
		main.style.width = `100%`;
		headerMenu.style.position = 'absolute';
		headerMenu.style.zIndex = '2';
	}
});

function closeDropdownFirst(){
	console.log(arrayOfDropdownList);
	arrayOfDropdownList.forEach(e => {
		e.classList.toggle('show');
		e.classList.toggle('show--fadeDown');
		e.classList.toggle('dropdown__list');
	});
	arrayOfDropdownList = [];
}

function changeSizeSideBar(_header, _main) {
	if (headerMenu.classList.contains('change--size')) {
		if (headerMenu.classList.contains('header--changeSizeNb')) {
			document.querySelectorAll('.navbar__link').forEach( e => {
				e.style.justifyContent = 'flex-start';
			});
		}
		headerMenu.classList.remove('change--size');
		headerMenu.classList.toggle(`${_header}`);
		main.classList.toggle(`${_main}`);
		logoIcon.style.transform = `rotate(${0}deg)`;
		text.forEach((e) => {
			e.style.display = 'block';
		});
	} else {
		headerMenu.classList.add('change--size');
		if (_header == "header--changeSizeNb") {
			document.querySelectorAll('.navbar__link').forEach( e => {
				e.style.justifyContent = 'center';
			});
		}
		headerMenu.classList.toggle(`${_header}`);
		main.classList.toggle(`${_main}`);
		logoIcon.classList.toggle(`spinLogo`);
		logoIcon.style.transform = `rotate(${-180}deg)`;
		text.forEach((e) => {
			e.style.display = 'none';
		});
	}
}