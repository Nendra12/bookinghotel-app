import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <Link to={"/"}>Hotelku</Link>
        </div>

        <div className="space-x-6">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link to={"/hotels"} className="hover:text-blue-600">
            Hotels
          </Link>
          {user ? (
            <>
              <Link to={"/my-bookings"} className="hover:text-blue-600">
                My Bookings
              </Link>
              <span className="text-green-600">{user.email}</span>

              <button onClick={logout} className="text-red-600 cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <Link to={"/login"} className="hover:text-blue-600">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
