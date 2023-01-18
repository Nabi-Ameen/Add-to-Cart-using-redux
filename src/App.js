import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./store/featurs/cartSlice";
import { useEffect } from "react";
import BoxModel from "./components/BoxModel";

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const {isModel} = useSelector((state)=>state.model)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  },[cartItems])
  return (
    <div>
      {isModel && <BoxModel/>}
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
