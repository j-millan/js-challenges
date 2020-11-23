const label = document.getElementById('counter');
const btnIn = document.getElementById('increase');
const btnDe = document.getElementById('decrease');

let counter = 0;

const clicked = (unit) => {
    counter += unit;
    label.style.color = counter == 0 ? 'white' : counter > 0 ? 'green' : 'red';
    label.textContent = counter;
}

btnIn.addEventListener('click', () => clicked(1));
btnDe.addEventListener('click', () => clicked(-1));