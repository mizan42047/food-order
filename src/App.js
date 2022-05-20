import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
const App = () => {
  const [isModal, setIsModal] = useState(false);
  const showCartHandler = () => {
    setIsModal(true);
  }

  const cartCloseHandler = () => {
    setIsModal(false);
  }
  
  return (
    <>
      {isModal && <Cart onClose = {cartCloseHandler}/>}
      <Header onClick ={showCartHandler}/>
      <Meals />
    </>
  )
}
export default App;
