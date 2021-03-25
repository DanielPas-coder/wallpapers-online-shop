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

async function fetchAndRenderProducts(order) {
    const response = await fetch('products.json');
    const products = await response.json();
    renderProducts(products, order);
}
fetchAndRenderProducts('ascending');

const sortAscendingButton = document.querySelector('.sort-asc');
const sortDescendingButton = document.querySelector('.sort-desc');

sortAscendingButton.addEventListener('click', sortProductAscending);
sortDescendingButton.addEventListener('click', sortProductDescending);

function sortProductAscending() {
    sortDescendingButton.classList.remove('active');
    sortAscendingButton.classList.add('active');
    fetchAndRenderProducts('ascending');
}

function sortProductDescending() {
    sortDescendingButton.classList.add('active');
    sortAscendingButton.classList.remove('active');
    fetchAndRenderProducts('descending');
}