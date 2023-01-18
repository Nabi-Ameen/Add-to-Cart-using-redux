import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal, getCartItems } from "./store/featurs/cartSlice";
import { useEffect } from "react";
import BoxModel from "./components/BoxModel";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const {isModel} = useSelector((state)=>state.model)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])
  
  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    )
  }
  return (
    <div>
      {isModel && <BoxModel/>}
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
