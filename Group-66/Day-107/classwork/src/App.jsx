import CartContext from "./Contexts/cartAddContext"
import Products from "./pages/products"


function App() {

  return (
    <>
      <CartContext>
        <Products/>
      </CartContext>
    </>
  )
}

export default App
