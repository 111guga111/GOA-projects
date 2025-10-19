

function Checkout({handleSubmit, cart, price}){
    return(
        <section>
            <h2>Checkout</h2>

            <p>Current price: {price}</p>
            <p>Discounted price: </p>
            
            <form onSubmit={handleSubmit}>
            <input type="text" name="promo" placeholder="Promocode" required />
            <button disabled={cart.length == 0 ? true : false}>Submit</button>
            </form>
            
        </section>
    )
}

export default Checkout