import { NAV_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useContext } from "react";
import { useSelector } from 'react-redux';

const Header = () => {
  const status = useOnlineStatus()
  const user = useContext(UserContext)

  // subscribing to the store using a selector
  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src={NAV_LOGO} alt="logo" width="80px" height="80px" />
      </Link>
      <ul
        className="flex"
      >
        <li className="px-4 cursor-pointer">
          Online Status: {status ? '🟢' : '🔴'} {user}
        </li>
        <li className="px-4 cursor-pointer">
        <Link to="/">Home</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-4 cursor-pointer">
        <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        <li className="px-4">
          <button className="p-1 bg-gray-200 cursor-pointer">
            Log In
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
