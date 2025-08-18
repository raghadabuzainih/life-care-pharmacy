import '../css/About.css'
import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about'>
            <h1>{t("about.title")}</h1>
            <p>
                <span>{t("about.pharmacyName")}</span> {t("about.description")}
            </p>
            <p>{t("about.established")}</p>
            <h2>{t("about.missionTitle")}</h2>
            <p>{t("about.missionDescription")}</p>
            <h2>{t("about.whyChooseTitle")}</h2>
            <p>{t("about.whyChooseDescription")}</p>
        </div>
    );
};
