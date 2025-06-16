const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 15999,
        category: "phones",
        image: "https://www.incredible.co.za/api/catalog/product/i/p/iphone_15_black_pdp_image_position_1__wwen_ecommerce_ea85.png?width=700&height=700&store=incredibleconnection&image-type=image",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air",
        price: 21199,
        category: "laptops", 
        image: "https://www.istore.co.za/media/catalog/product/cache/7cbfd4bf9761b066f119e95af17e67c5/m/a/macbook_air_space_gray_pdp_image_position-1_m1_chip__wwen_1.jpg",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 3249,
        category: "accessories",
        image: "https://www.istore.co.za/media/catalog/product/cache/7cbfd4bf9761b066f119e95af17e67c5/m/t/mtjv3_av2.jpeg", 
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 15899,
        category: "phones",
        image: "https://www.incredible.co.za/api/catalog/product/s/2/s24_gray_ecommerce_c6d8.png?width=700&height=700&store=incredibleconnection&image-type=image",
        description: "Android phone with incredible features"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 14799,
        category: "laptops",
        image: "https://media.takealot.com/covers_images/37581389dcee4534a40572e6434f889e/s-zoom.file",
        description: "Reliable laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 249,
        category: "accessories", 
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2f7L77suiNWkTV6HPcJmFQM5jZBCL604FFDXweJeW1q-mSX6wtznxqIn4ry9EB0GTKBi6DdBkfX9PTL9azHwxkJjqurFTySyUm1A-SraTh13da90BLhzt1Sum8c0&usqp=CAc",
        description: "Ergonomic wireless mouse for productivity"
    }
];


// Step 2: Creating our shopping cart.
// This will store items that customers want to buy

let cart = [];

// Step 3: Get References to HTML elements
// This connects our JavaScript to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// Step 4: Utility function to format
// This makes "$999.00" instead of "999"

function formatPrice(price) {
    return 'R' + price.toFixed(2);
}

console.log('JavaScript loaded successfully');
console.log('We have', products.length, 'products');

// Function to create HTML for one product card

function createProductCard(product) {
    return `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${formatPrice(product.price)}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                    Add to cart
                </button>
                <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                    View Details
                </button>
            </div>
        </div>
    </div>
    `;
}

// Function to display products on the page

function displayProducts(productsToShow = products) {
    //If we're on the products page
    if (productsGrid) {
        // Create HTML for each product and join them together
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    }
}

//If we're on the homepage, show the first 3 products as featured
if (featuredProducts) {
    const featuredHTML = productsToShow.slice(0, 3).map(createdProductCard).join('');
    featuredProducts.innerHTML = featuredHTML;
}

//Function to add product to cart (this will be built next)
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

//Function to view products
function viewProduct(productId) {
    const product = products.find(prod => prod.id === productId)
    alert('Product: ' + product.name + '\nPrice: ' + formatPrice(product.price) + '\nDescriprion: ' + product.description);
}

// Function to handle filter button clicks

function setupFilters() {
    //Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    //Add click event to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            //Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            //Add 'active' class to clicked button
            this.classList.add('active');

            //Get the category from the button's data-category attribute
            const category = this.getAttribute('data-category');

            //Filter products based on category
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products; //Show all products
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }

            //Display the filtered products
            displayProducts(filteredProducts);

            console.log('Showing', filteredProducts.length, 'products in category', category);
        });
    });
}


// Wait for the page to load, then display products. Stay at the bottom of script

document.addEventListener('DOMContentLoaded', function(){
    console.log('Page loaded, displaying products');
    displayProducts();
    setupFilters();
})
