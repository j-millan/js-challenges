const productsDiv = document.querySelector('#store .items');

const cardTemplate = document.querySelector('.card');
cardTemplate.hidden = true;

const buttons = document.getElementById('filter-buttons');
const searchBar = document.querySelector('#search input');

const products = [];
let filteredProducts = [];

class Product {
    constructor(name, type, price, index) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.image = this.setImagePath(index);
    }

    setImagePath(index) {
        return 'img/'.concat(this.type, '-', index, '.jpeg');
    }
}

const renderProducts = () => {
    productsDiv.innerHTML = '';
    filteredProducts.forEach((product) => {
        const newCard = cardTemplate.cloneNode(true);
        newCard.querySelector('.image').style.backgroundImage = 'url("'.concat(product.image, '")');
        newCard.querySelector('.details .name').textContent = product.name;
        newCard.querySelector('.details .price').textContent = '$'.concat(product.price);
        newCard.hidden = false;
        productsDiv.appendChild(newCard);
    })
}

const createProduct = (n, t, p, i) => {
    const product = new Product(n, t, p, i);
    products.push(product);
}

const filterByType = (e) => {
    const type = e.target.dataset.filter;
    if (type === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = [];
        products.forEach((product) => { 
            if (product.type === type) {
                filteredProducts.push(product);
            }
        });
    }
    renderProducts();
}

const filterByQuery = (e) => {
    const query = e.target.value;
    filteredProducts = [];
    products.forEach((product) => {

        if (
            product.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            product.price.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            product.type.toLowerCase().indexOf(query.toLowerCase()) > -1
        ) { filteredProducts.push(product); }
    })
    renderProducts();
}

createProduct('Fruits cake', 'cake', 15, 1);
createProduct('Mega cake', 'cake', 50, 2);
createProduct('Pink cake', 'cake', 25, 3);

createProduct('Fruits cupcake', 'cupcake', 3, 1);
createProduct('Choco-cupcake', 'cupcake', 5, 2);
createProduct('Big cupcake', 'cupcake', 10, 3);

createProduct('Normal doughnut', 'doughnut', 8, 1);
createProduct('Party donut', 'doughnut', 10, 2);
createProduct('Bear dughnut', 'doughnut', 15, 3);

createProduct('Macaroons', 'sweets', 30, 1);
createProduct('Lorem ipsum', 'sweets', 15, 2);
createProduct('Chocochunks', 'sweets', 15, 3);

function setUp() {
    searchBar.addEventListener('input', filterByQuery);

    const btns = buttons.querySelectorAll('button');
    for (let i=0; i<btns.length; i++) {
        const button = btns[i];
        button.addEventListener('click', filterByType);
        console.log(button.dataset.filter);
    }

    filteredProducts = products;
    renderProducts();
}

setUp();