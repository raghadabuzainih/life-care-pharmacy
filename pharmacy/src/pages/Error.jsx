import { useTranslation } from "react-i18next"

export const Error = () => {
    const {t} = useTranslation()

    return(
        <h1 
            style={{color: 'rgba(221, 45, 45, 0.57)'}}
        >
            {t("error")}
        </h1>
    )
}