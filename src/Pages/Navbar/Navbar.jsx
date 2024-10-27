import { Link } from "react-router-dom";

const navOptions = (
    <>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      
      </li>
      <li>
      <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/ourMenu">Our Menu</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/orderFood">Order Food</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
      
    </>
  );
  
  const Navbar = () => {
    return (
      <>
        <div className="navbar bg-base-100">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            </div>
  
            {/* Logo */}
            <a className="btn btn-ghost normal-case text-xl">TaBLe TaLk</a>
          </div>
  
          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
  
          {/* End Section */}
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  