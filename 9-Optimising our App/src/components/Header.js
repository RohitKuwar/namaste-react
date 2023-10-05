import { NAV_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const status = useOnlineStatus()
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Link to="/">
        <img src={NAV_LOGO} alt="logo" width="80px" height="80px" />
      </Link>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <li style={{ marginRight: 15, cursor: "pointer" }}>
          Online Status: {status ? '🟢' : '🔴'}
        </li>
        <li style={{ marginRight: 15, cursor: "pointer" }}>
        <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: 15, cursor: "pointer" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ marginRight: 15, cursor: "pointer" }}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ marginRight: 15, cursor: "pointer" }}>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li style={{ marginRight: 15, cursor: "pointer" }}>
          <button
            style={{
              padding: 5,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
