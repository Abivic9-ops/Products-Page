let cartContainer = document.querySelector(".three-columns")

let products = [
    {
        name: "Waffles",
        image: "images/waffle image.jpg",
        tags: ["Waffle with Berries"],
        price: "$6.50"
    },
    {
        name: "Crème Brûlée",
        image: "images/creme brulee.jpg",
        tags: [" Vanilla Bean Crème Brûlée"],
        price: "$7.00"
    },
    {
        name: "Tiramisu",
        image: "images/tiramisu.jpg",
        tags: ["  Classic Tiramisu"],
        price: "$5.50"
    },
    {
        name: "Macaron",
        image: "images/macaron.jpg",
        tags: [" Macaron Mix of Five"],
        price: "$8.00"
    },
    {
        name: "Baklava",
        image: "images/baklava.jpg",
        tags: [" Pistachio Baklava"],
        price: "$4.00"
    },

    {
        name: "Pie",
        image: "images/meringue.jpg",
        tags: [" Lemon Meringue Pie"],
        price: "$5.00"
    },

    {
        name: "Cake",
        image: "images/red-velvet cake.jpg",
        tags: ["Red Velvet Cake"],
        price: "$4.50"
    },

    {
        name: "Brownie",
        image: "images/brownie.jpg",
        tags: ["  Salted Caramel Brownie"],
        price: "$6.50"
    },

    {
        name: "Panna Cotta",
        image: "images/panna-cotta.jpg",
        tags: ["  Vanilla Panna Cotta"],
        price: "$7.50"
    }


];


function displayProducts() {
    cartContainer.innerHTML = "";
    console.log({ products })
    products.forEach(product => {
        console.log({ product })

        cartContainer.innerHTML += `
            <div class="product-container">
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="card-info">
                <div class="product-title">${product.name}</div>
             <div class="tags">${product.tags.join(', ')}</div>
                <div class="price-info">
                    <span class="price">${product.price}</span>
                    <div class="action-btns">
                     <button class="cart-btn"><img src="images/icon-add-to-cart.svg"><span>Add to
                                Cart</span></button>
                    <div class="btn-add"><i class="fa-solid fa-plus"></i></div>
                    </div>
                </div>
            </div>
            `;
    })
}


displayProducts()