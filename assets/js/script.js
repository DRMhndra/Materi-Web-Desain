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