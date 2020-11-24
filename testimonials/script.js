const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const nameLabel = document.getElementById('name');
const testLabel = document.getElementById('testimonial');
const picture = document.getElementById('picture');

const testimonials = [];
let current = 0;

class Testimonial {
    constructor(image, name, text) {
        this.image = image;
        this.name = name;
        this.text = text;
    }
}

const addTestimonial = (img, name , text) => {
    const fullImg = 'img/customer-'.concat(img, '.jpg');
    const test = new Testimonial(fullImg, name, text);
    testimonials.push(test);
}

const updateTemplate = (t) => {
    nameLabel.textContent = t.name;
    testLabel.textContent = t.text;
    picture.style.backgroundImage = 'url("'.concat(t.image, '")');
}

addTestimonial(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
addTestimonial(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
addTestimonial(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
addTestimonial(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
addTestimonial(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

const click = (direction) => {
    if (direction > 0) {
        current = current == testimonials.length - 1 ? 0 : current + 1;
    } else {
        current = current == 0 ? testimonials.length - 1 : current - 1;
    }
    updateTemplate(testimonials[current]);
}

nextBtn.addEventListener('click', () => click(1));
prevBtn.addEventListener('click', () => click(-1));

updateTemplate(testimonials[current]);