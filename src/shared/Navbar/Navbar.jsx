import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null); // Ref to track the menu element

  const toggleMenu = () => setMenu((prevMenu) => !prevMenu);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar--wrapper">
      <div className="container mx-auto">
        <div className="navbar--main--wrapper">
          {/* Logo Section */}
          <div className="nr--navbar--logo">
            <Link className="nr--logo" to="/">
              Logo
            </Link>
          </div>

          {/* Menu and Buttons */}
          <div className="navbar--menus--wrapper">
            <div className="nr--login--btn">
              <Link to="/logIn">Log In</Link>
            </div>
            <div className="nr--getStrat--btn">
              <Link to="/sign-up">Get Started</Link>
            </div>

            {/* Menu Toggle Button */}
            <div className="menu--wrapper--btn" ref={menuRef}>
              <div className="menu--wrapper--clickble" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 60 60"
                  fill="none"
                  aria-label="Menu Toggle"
                >
                  <path
                    d="M8 11H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 24H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 36H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 49H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={`menuHeader--munu--wrappers ${menu ? "active" : ""}`}>
                <ul role="menu">
                  <li>
                    <Link to="/" role="menuitem">
                      <span>Home</span>
                      <div className="right--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M12.0001 24L20 16L12 8"
                            stroke="#F9FAFB"
                            strokeWidth="1.5"
                            strokeMiterlimit={16}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="./contact" role="menuitem">
                      <span>Contact us</span>
                      <div className="right--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M12.0001 24L20 16L12 8"
                            stroke="#F9FAFB"
                            strokeWidth="1.5"
                            strokeMiterlimit={16}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="terms" role="menuitem">
                      <span>Terms</span>
                      <div className="right--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M12.0001 24L20 16L12 8"
                            stroke="#F9FAFB"
                            strokeWidth="1.5"
                            strokeMiterlimit={16}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-history" role="menuitem">
                      <span>Payment History</span>
                      <div className="right--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M12.0001 24L20 16L12 8"
                            stroke="#F9FAFB"
                            strokeWidth="1.5"
                            strokeMiterlimit={16}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/presentation" role="menuitem">
                      <span>Presentation</span>
                      <div className="right--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M12.0001 24L20 16L12 8"
                            stroke="#F9FAFB"
                            strokeWidth="1.5"
                            strokeMiterlimit={16}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>


              {/* Dropdown Menu */}
              {/* {menu && (
                <div className="menuHeader--munu--wrappers">
                 
                  
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


