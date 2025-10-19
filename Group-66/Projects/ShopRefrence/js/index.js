const icon = document.querySelector("#cart")
const pop = document.querySelector("#PopUp")

icon.addEventListener("click", () => {
    if (pop.style.display != "none" && pop.style.display != "") {
        pop.style.display = "none"
    } else {
        pop.style.display = "flex"
    }
})

const finalCart = document.querySelector("#CartList")

const cash = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const price = document.querySelector("#totalCash")
    if (products.length === 0) {
        price.innerHTML = `<p id="totalCash">Total Price: 0.00$</p>`
    } else {
        let sum = 0
        products.forEach(product => {
            sum += product.price
        })
        price.innerHTML = `<p id="totalCash">Total Price: ${sum.toFixed(2)}$</p>`
    }
}

const cartRender = () => {
    finalCart.innerHTML = ""
    const products = JSON.parse(localStorage.getItem("products")) || []
    if (products.length === 0) {
        finalCart.innerHTML = "<li><p>Cart is empty.</p></li>"
    } else{
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
            trash.addEventListener("click", () => {

                let cart = JSON.parse(localStorage.getItem("products")) || []
                const index = cart.findIndex(item => item.id === product.id)
                if (index > -1) {
                    cart.splice(index, 1)
                }
                localStorage.setItem("products", JSON.stringify(cart))
                cartRender()
                cash()
                
            })
        })
    }
}

cartRender()
cash()

const clearAll = document.querySelector("#clear")

clearAll.addEventListener("click", () =>{
    localStorage.setItem("products", JSON.stringify([]))
    cartRender();
    cash();
})