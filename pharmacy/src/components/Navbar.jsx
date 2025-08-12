import { Link, Outlet } from "react-router-dom"
import '../css/Navbar.css'

export const Navbar = () => {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </>
    )
}