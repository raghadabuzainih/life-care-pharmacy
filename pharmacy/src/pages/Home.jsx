import '../css/Home.css'
import { useTranslation } from 'react-i18next'

export const Home = () => {  
    const {t} = useTranslation()
      
    return(
        <div className="home">
            <img src="/images/pharmacy.jpg" alt="photo-of-pharmacy" />
            <div className="headers">
                <h1>{t("home.title")}</h1>
                <h2>{t("home.welcome")} <span>{t("home.community")}</span></h2>
            </div>
        </div>
    )
}