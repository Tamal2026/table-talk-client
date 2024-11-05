import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UseCart from "../../UseCart/UseCart";
import UseAdmin from "../../components/UseAdmin/UseAdmin";

const Navbar = () => {
  const [cart] = UseCart();

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin();

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-yellow-500" : "text-white"
          }
          style={({ isActive }) => ({
            color: isActive ? "#FBBF24" : "#FFFFFF",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline text-yellow-500" : "text-white"
          }
          style={({ isActive }) => ({
            color: isActive ? "#FBBF24" : "#FFFFFF",
          })}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "underline text-yellow-500" : "text-white"
          }
          style={({ isActive }) => ({
            color: isActive ? "#FBBF24" : "#FFFFFF",
          })}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourMenu"
          className={({ isActive }) =>
            isActive ? "underline text-yellow-500" : "text-white"
          }
          style={({ isActive }) => ({
            color: isActive ? "#FBBF24" : "#FFFFFF",
          })}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline text-yellow-500" : "text-white"
          }
          style={({ isActive }) => ({
            color: isActive ? "#FBBF24" : "#FFFFFF",
          })}
        >
          Contact
        </NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink
            to="/dashboard/adminHome"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-500" : "text-white"
            }
            style={({ isActive }) => ({
              color: isActive ? "#FBBF24" : "#FFFFFF",
            })}
          >
            Dashboard
          </NavLink>
        </li>
      )}

      {/* Conditionally render Dashboard and Cart links */}
      {user?.email && !isAdmin && (
        <>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-500" : "text-white"
              }
              style={({ isActive }) => ({
                color: isActive ? "#FBBF24" : "#FFFFFF",
              })}
            >
              Cart {cart.length}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                isActive ? "underline text-yellow-500" : "text-white"
              }
              style={({ isActive }) => ({
                color: isActive ? "#FBBF24" : "#FFFFFF",
              })}
            >
              Dashboard  
            </NavLink>
          </li>
        </>
      )}

      {user ? (
        <li>
          <button onClick={handleLogOut} className="text-white">
            Logout
          </button>
        </li>
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-500" : "text-white"
            }
            style={({ isActive }) => ({
              color: isActive ? "#FBBF24" : "#FFFFFF",
            })}
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed top-0 w-full bg-black text-yellow-500 font-bold shadow-md duration-300 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          TaBLe TaLk
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
