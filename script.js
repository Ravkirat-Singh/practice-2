const products = [
    {
        name: "Adidas Running Shoes",
        category: "shoes",
        description: "High-performance running shoes for comfort and speed.",
        img: "images/shoes1.png",
        link: "https://www.adidas.com"
    },
    {
        name: "Nike Air Zoom",
        category: "shoes",
        description: "Breathable and lightweight sneakers for daily runs.",
        img: "images/shoes2.png",
        link: "https://www.nike.com"
    },
    {
        name: "Formal Shirt",
        category: "shirts",
        description: "Premium cotton formal shirt for office wear.",
        img: "images/formalshirt.png",
        link: "https://www.myntra.com"
    },
    {
        name: "Casual T-Shirt",
        category: "shirts",
        description: "Cool and comfy casual T-shirt for everyday style.",
        img: "images/casualshirt.png",
        link: "https://www.ajio.com"
    },
    {
        name: "Smartwatch",
        category: "gadgets",
        description: "Stay connected with style using this sleek smartwatch.",
        img: "images/smartwatch.png",
        link: "https://www.titan.co.in"
    },
    {
        name: "Bluetooth Earbuds",
        category: "gadgets",
        description: "Noise-cancelling wireless earbuds for music lovers.",
        img: "images/earpods.png",
        link: "https://www.boat-lifestyle.com"
    }
];

const productList = document.getElementById("productList");
const categorySelect = document.getElementById("category");

function displayProducts(filter) {
    productList.innerHTML = "";
    const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        card.addEventListener("click", () => {
            window.open(product.link, "_blank");
        });
        productList.appendChild(card);
    });
}

categorySelect.addEventListener("change", (e) => {
    displayProducts(e.target.value);
});

displayProducts("all");
