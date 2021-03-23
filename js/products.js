const productsJSON = `
[
    {
        "id": "1",
        "title": "Space house interior",
        "image": "interior.png",
        "price": 59.99
    },
    {
        "id": "2",
        "title": "Mars Poster",
        "image": "poster.png",
        "price": 99.99
    },
    {
        "id": "3",
        "title": "Train and coast",
        "image": "train.png",
        "price": 39.99
    },
    {
        "id": "4",
        "title": "House near the lake",
        "image": "house.png",
        "price": 19.99
    }
]
`;

function renderProducts(products, sortOrder = 'ascending') {
    const productsContainer = document.querySelector('.product-list');
    const sortedProducts = products.slice()
                            .sort( (a, b) => sortOrder === 'ascending' ? a.price - b.price
                                                                           : b.price - a.price );
    productsContainer.innerHTML = '';
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="img/${product.image}" alt="${product.title}">
                <div class="button-container">
                    <h3>${product.title}</h3>
                    <button class="button card-button btn btn-primary">Byu (${product.price})</button>
                </div>
            </div>`
    }
}

renderProducts(JSON.parse(productsJSON));

const sortAscendingButton = document.querySelector('.sort-asc');
const sortDescendingButton = document.querySelector('.sort-desc');

sortAscendingButton.addEventListener('click', sortProductAscending);
sortDescendingButton.addEventListener('click', sortProductDescending);

function sortProductAscending() {
    sortDescendingButton.classList.remove('active');
    sortAscendingButton.classList.add('active');
    renderProducts(JSON.parse(productsJSON), 'ascending');
}

function sortProductDescending() {
    sortDescendingButton.classList.add('active');
    sortAscendingButton.classList.remove('active');
    renderProducts(JSON.parse(productsJSON), 'descending');
}