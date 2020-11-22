const image = document.getElementById('image');

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let currentIndex = 1;
const maxIndex = 5;

let getImagePath = function(index) {
	return 'img/pic'.concat(index, '.jpeg');
}

let changeImage = function(direction) {
	currentIndex = currentIndex == maxIndex && direction > 0 || currentIndex == 1 && direction < 0? currentIndex : currentIndex + direction;
	const img = getImagePath(currentIndex);
	image.style.background = 'url("'.concat(img, '")');
}

leftBtn.addEventListener('click', () => changeImage(-1));
rightBtn.addEventListener('click', () => changeImage(1));

image.style.background = 'url("img/pic1.jpeg")';