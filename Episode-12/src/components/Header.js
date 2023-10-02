import { LOGO_URL } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
  const {loggedInUser}=useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between h-20 shadow-lg">
      <div className="logo-container">
        <img className="w-44 h-20 object-contain" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex font-serif">
          <li className="mx-10 hover:text-red-400">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="mx-10 hover:text-red-400">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="mx-10 hover:text-red-400">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="mx-10 hover:text-red-400 cursor-pointer"><Link to="/cart">Cart ({cartItems.length})</Link></li>
          <li className="mx-10 hover:text-red-400">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <button
            className="border-solid border-[1.5px] border-inherit border-black rounded-md shadow-md text-white bg-black px-4 hover:bg-white hover:text-black"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="mx-10 hover:text-red-400">{onlineStatus===true?"🟢":"🔴"}</li>
          <li className="mx-5 hover:text-red-400 cursor-pointer">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
