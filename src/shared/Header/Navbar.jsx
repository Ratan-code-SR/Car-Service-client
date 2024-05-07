import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../components/provider/ContextProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const navLinks = <>
        <Link className="ml-3 text-xl">Home</Link>
        <Link className="ml-3 text-xl">About</Link>
        <Link className="ml-3 text-xl">Service</Link>
        {
            user ? <Link to="/bookings" className="ml-3 text-xl">My Bookings</Link> : ""
        }
        <Link className="ml-3 text-xl">Contact</Link>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <img className="w-20" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <a className=" border border-[#ff3811] py-2 px-3 rounded-md font-bold text-[#ff3811]">Appointment </a>
                        <Link onClick={() => logOut()} className=" border border-[#ff3811] py-2 px-3 rounded-md font-bold text-[#ff3811] ml-2"
                        >Sign Out</Link>
                    </> : <>
                        <Link className=" border border-[#ff3811] py-2 px-3 rounded-md font-bold text-[#ff3811] ml-2" to="/login">Sign In</Link>
                        <Link className=" border border-[#ff3811] py-2 px-3 rounded-md font-bold text-[#ff3811] ml-2" to="/register">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;