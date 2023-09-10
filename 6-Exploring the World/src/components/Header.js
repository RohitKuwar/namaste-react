import { NAV_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
    <img src={NAV_LOGO} alt="logo" width='80px' height='80px' />
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-between', fontSize: 25 }}>
        <li style={{ marginRight: 15 }}>Home</li>
        <li style={{ marginRight: 15 }}>About Us</li>
        <li style={{ marginRight: 15 }}>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
