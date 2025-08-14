import { Link, Outlet } from "react-router-dom"
import '../css/Navbar.css'

export const Navbar = () => {
    return(
        <>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    /
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}