import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="bg-[#e9ecee] w-full h-screen p-4">
      <div className="w-[550px] bg-white m-auto p-4">
        {cartItems.map((cartItem) => (
          <div
            key={cartItem?.card?.info?.id}
            className="w-[500px] flex relative justify-between items-center"
          >
            <div className="p-2 text-[14px] w-40">
              {cartItem?.card?.info?.name}
            </div>
            <button
              className="font-bold w-8 h-8 bg-gray-400 m-2 rounded-md text-white text-lg hover:shadow-md hover:bg-gray-500"
              onClick={() => handleRemoveItem(cartItem)}
            >
              -
            </button>
            <p className="text-[13px]">₹ {cartItem?.card?.info?.price / 100}</p>

            
          </div>
        ))}
        {cartItems.length !== 0 && (
          <button
            className="h-8 w-20 border-[1.5px] text-xs font-bold bg-[#60b246] rounded-md text-white hover:shadow-md my-4 mx-[425px]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <h1 className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white font-bold rounded-sm text-center h-20 pt-7">
            Cart is Empty. Add items to the cart!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
