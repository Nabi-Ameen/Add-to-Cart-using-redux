import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./store/featurs/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  },[cartItems])
  return (
    <div>
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
