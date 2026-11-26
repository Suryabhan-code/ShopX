const products = [
    {
        name: "Stylish T-Shirt",
        price: 299,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
        name: "Smart Watch",
        price: 799,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        name: "Sports Shoes",
        price: 999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        name: "Headphones",
        price: 599,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        name: "Home Decor",
        price: 399,
        category: "Home",
        image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=400"
    },
    {
        name: "Beauty Kit",
        price: 249,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"
    },
    {
        name: "Casual Shirt",
        price: 499,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400"
    },
    {
        name: "Wireless Headphones",
        price: 899,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400"
    }
];

let cart = [];

function displayProducts(items) {
    const container = document.getElementById("product-list");

    container.innerHTML = items.map((product, index) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <div class="price">₹${product.price}</div>
            <button onclick="addToCart(${products.indexOf(product)})">
                Add to Cart
            </button>
        </div>
    `).join("");
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;

    const container = document.getElementById("cart-items");

    if (cart.length === 0) {
        container.innerHTML = "Your cart is empty.";
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <span>${item.name} - ₹${item.price}</span>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `).join("");
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(
            product => product.category === category
        );
        displayProducts(filtered);
    }
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});

function showCart() {
    document.getElementById("cart-section").scrollIntoView({
        behavior: "smooth"
    });
}

function goToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

displayProducts(products);
updateCart();