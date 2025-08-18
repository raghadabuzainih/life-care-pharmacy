import { Link, Outlet } from "react-router-dom"
import '../css/Navbar.css'
import { useTranslation } from "react-i18next"

export const Navbar = ({isLoggin, setIsLoggin}) => {
    const {t} = useTranslation()

    function handleLogout(){
        setIsLoggin(false) //to prevent enter protected routes like products..
    }

    return(
        <>
            <nav>
                <div>
                    <Link to="/">{t("navbar.home")}</Link>
                    <Link to="/about">{t("navbar.about")}</Link>
                    <Link to="/products">{t("navbar.products")}</Link>
                    <Link to="/contact">{t("navbar.contact")}</Link>
                </div>
                {
                    isLoggin ?
                    <Link onClick={handleLogout} to="/login">{t("navbar.logout")}</Link>
                    :
                    <div>
                        <Link to="/login">{t("navbar.login")}</Link>
                        /
                        <Link to="/signup">{t("navbar.signup")}</Link>
                    </div>  
                }
            </nav>
            <Outlet />
        </>
    )
}