
import { useSelector } from "react-redux";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} | Total Price:$ {total}</h1> 
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
