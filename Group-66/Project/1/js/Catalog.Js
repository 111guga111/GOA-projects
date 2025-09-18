const list = document.querySelector("#shopItems")
const finalCart = document.querySelector("#CartList")


const cash = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const price = document.querySelector("#totalCash")
    if (products.length == 0) {
        price.innerHTML = `<p id="totalCash">Total Price: 0.00$</p>`
    }else{
        let sum = 0
        products.forEach(product => {
            sum += product.price
        })
        price.innerHTML = `<p id="totalCash">Total Price: ${sum.toFixed(2)}$</p>`
    }
}

const remove = (button,product) =>{
    button.addEventListener("click",()=>{
       let cart = JSON.parse(localStorage.getItem("products")) || [];
        const index = cart.findIndex(item => item.id === product.id);
        if (index > -1) {
            cart.splice(index, 1);
        }
        localStorage.setItem("products", JSON.stringify(cart));
        cartRender();
        cash();
    });
};

const cartRender = () => {

    finalCart.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length === 0) {
        finalCart.innerHTML = "<li><p>Cart is empty.</p></li>";
    }else{
        const counts = {}
        products.forEach(product => {
            if (counts[product.id]) {
                counts[product.id].count += 1
            } else {
                counts[product.id] = { ...product, count: 1 }
            }
        })

        Object.values(counts).reverse().forEach(product => {
            const li = document.createElement("li");
            li.classList.add("CartItem")

            li.innerHTML = `
                <div class="addedCart">
                    <div class="addedImg"><img src="${product.image}"/></div>
                    <div class="addedInfo">
                        <p>${product.title}</p>
                        <p>${product.count} X ${product.price}$</p>
                        <i class="trash fa-solid fa-trash"></i>
                    </div>
                </div>
            `;

            finalCart.appendChild(li);

            const trash = li.querySelector(".trash")
            trash.style.width = "10px"
            trash.style.cursor = "pointer"
            remove(trash,product)
        })
    }
}


const addCart = (product,button) => {

    button.addEventListener("click",()=>{

        let cart = JSON.parse(localStorage.getItem("products")) || [];
        cart.push(product)

        localStorage.setItem("products", JSON.stringify(cart) )
        cartRender();
        cash();
    })
}

const get = (data) => {
    
    data.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("shopItem")

        li.innerHTML = `
            <div class="liDiv">
                <div class="productTitle">
                    <img src="${product.image}"/>
                    <p>${product.title}</p>
                </div>

                <p class="productCategory" >Category: ${product.category}</p>
                <p class="productPrice" >Price: ${product.price}$</p>
            </div>
            <div class="options">
                <button class="wishList">
                    <div class="wishIcon"><i class="fa-solid fa-heart"></i></div>
                    Add To Wishlist
                </button>
                <button class="cartList">
                    <div class="cartIcon"><i class="fa-solid fa-cart-shopping"></i></div>
                    Add To Cart
                </button>
            </div>
        `;

        const cartButton = li.querySelector(".cartList");

        list.appendChild(li);
        addCart(product,cartButton);
    });
}



const asy = async () =>{

    const fet = await fetch(`https://fakestoreapi.com/products`)
    const data = await fet.json()
    
    get(data)
    console.log(data)
};

asy();
cartRender();
cash();

const icon = document.querySelector("#cart")

const pop = document.querySelector("#PopUp")

icon.addEventListener("click", () => {

    if (pop.style.display != "none" && pop.style.display != ""){
            pop.style.display = "none"
    }else{
            pop.style.display = "flex"
    }

})

const clearAll = document.querySelector("#clear")

clearAll.addEventListener("click", () =>{
    localStorage.setItem("products", JSON.stringify([]))
    cartRender();
    cash();
})