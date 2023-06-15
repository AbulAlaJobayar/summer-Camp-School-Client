import { Link } from "react-router-dom";
import Container from "../Container";
import avater from "../../assets/pngwing.com.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const Navbar = () => {

const {user}=useContext(AuthContext)
  const navOption = (
    <>
      <li className="text-lg font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/instructor">Instructors</Link>
      </li>
      <li className="text-lg font-semibold">
        <Link to="/class"> Classes</Link>
      </li>
     {
      user &&  <li className="text-lg font-semibold">
        <Link to="/dashboard">Dashboard </Link>
      </li>
     }
    </>
  );

  return (
    <>
        <Container>
          <div className="navbar  border-b-2 border-base-300 shadow-sm ">
            <div className="navbar-start">
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
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navOption}
                </ul>
              </div>
              <Link
                to="/"
                className="btn btn-ghost normal-case text-2xl font-bold text-[#2572ff]"
              >
                Powerlearn
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOption}</ul>
            </div>
            <div className="navbar-end">
              {
              user?<>
                <img className='rounded-full'
                      src={user && user.photoURL ? user.photoURL : avater}
                      alt='profile'
                      height='30'
                      width='30'
                      title={user && user.displayName? user.displayName : "guest"}
                  />
              </>:<>
               <Link to='/login'> <button className="btn "> Login</button></Link>
              </>
             }
            </div>
          </div>
        </Container>
        
</>
  );
};

export default Navbar;
