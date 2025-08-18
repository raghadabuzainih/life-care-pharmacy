import '../css/Contact.css'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()
    return (
        <div className='contact'>
            <h2>{t("contact.title")}</h2>

            <div className='contact-info-form'>
                <section>
                    <h2>{t("contact.infoTitle")}</h2>
                    <p><strong>{t("contact.phone")}:</strong> +972-2-123-4447</p>
                    <p><strong>{t("contact.email")}:</strong> info@lifecarephar.com</p>
                    <p><strong>{t("contact.address")}:</strong> {t("contact.officeAddress")}</p>
                    <p><strong>{t("contact.hours")}:</strong> {t("contact.workingHours")}</p>
                </section>
                <form>
                    <div>
                        <label htmlFor="name">{t("contact.form.name")}</label>
                        <input type="text" id="name" placeholder={t("contact.form.namePlaceholder")} required />
                    </div>
                    <div>
                        <label htmlFor="phone">{t("contact.form.phone")}</label>
                        <input type="tel" id="phone" placeholder={t("contact.form.phonePlaceholder")} required />
                    </div>
                    <div>
                        <label htmlFor="email">{t("contact.form.email")}</label>
                        <input type="email" id="email" placeholder={t("contact.form.emailPlaceholder")} required />
                    </div>
                    <div>
                        <label htmlFor="message">{t("contact.form.message")}</label>
                        <textarea id="message" rows="4" placeholder={t("contact.form.messagePlaceholder")} required></textarea>
                    </div>
                    <button type="submit">{t("contact.form.submit")}</button>
                </form>
            </div>
        </div>
    )
}
