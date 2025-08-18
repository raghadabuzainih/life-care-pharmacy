import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import '../css/Signup.css'
import {useNavigate} from "react-router-dom"
import users from '../data/users.json'
import { useTranslation } from "react-i18next"

export const Signup = ({isLoggin, setLanguage}) => {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()

    const changeLanguage = (event) => {
        const language = event.currentTarget.value
        i18n.changeLanguage(language)
        setLanguage(language)
        document.body.dir = language == 'ar' ? 'rtl' : 'ltr'
    }

    const initialValues = {
        'first-name': "",
        'last-name': "",
        'date-of-birth': "2008-01-01",
        gender: "",
        email: "",
        password: "",
        'confirm-password': "",
        'phone-number': "",
        language: "",
        'personal-photo': null,
        agree: false
    }

    const validationSchema = Yup.object({
        'first-name': Yup.string().required(t("validation.firstName")),
        'last-name': Yup.string().required(t("validation.lastName")),
        'date-of-birth': Yup.date().required(t("validation.dob")),
        gender: Yup.string().required(t("validation.gender")),
        email: Yup.string()
            .email(t("validation.emailInvalid"))
            .test('repeteadEmail', t("validation.emailExists"), 
            (value)=> value && (users.find(user => user.email == value) == undefined))
            .required(t("validation.emailRequired")),
        password: Yup.string()
            .min(8, t("validation.passwordMin"))
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,t("validation.passwordPattern"))
            .required(t("validation.passwordRequired")),
        'confirm-password': Yup.string()
            .oneOf([Yup.ref("password")], t("validation.passwordsNotMatch"))
            .required(t("validation.confirmPassword")),
        'phone-number': Yup.string()
            .matches(/^[0-9]+$/, t("validation.phoneDigits"))
            .length(10, t("validation.phoneLength"))
            .required(t("validation.phoneRequired")),
        'personal-photo': Yup.mixed()
            .required(t("validation.photoRequired"))
            .test("fileFormat", t("validation.photoFormat"), (value) => 
                value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)),
        agree: Yup.boolean().oneOf([true], t("validation.agree"))
})


    const handleSubmit = () => {
        isLoggin(true)
        navigate('/')
    }

    return(
        <div className='signup'>
            <h2>{t("signup.title")}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ setFieldValue }) => (
                <Form>
                    <div className="full-name">
                        <div className='field'>
                            <label htmlFor="first-name">{t("signup.firstName")}</label>
                            <Field type="text" id="first-name" name="first-name"/>
                            <ErrorMessage name="first-name" component="p" className="error"/>
                        </div>
                        <div className='field'>
                            <label htmlFor="last-name">{t("signup.lastName")}</label>
                            <Field type="text" id="last-name" name="last-name"/>
                            <ErrorMessage name="last-name" component="p" className="error" />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor="date-of-birth">{t("signup.dob")}</label>
                        <Field type="date" id="date-of-birth" name="date-of-birth" min='1965-01-01' max='2008-01-01'/>
                        <ErrorMessage name="date-of-birth" component="p" className="error" />
                    </div>
                    <div>
                        <label htmlFor="gender">{t("signup.gender")}</label>
                        <Field type="radio" name="gender" id="male" value="male"/>{t("signup.male")}
                        <Field type="radio" name="gender" id="female" value="female"/>{t("signup.female")}
                        <ErrorMessage name="gender" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">{t("signup.email")}</label>
                        <Field type="text" name="email" id="email" placeholder={t("signup.emailPlaceholder")}/>
                        <ErrorMessage name="email" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="password">{t("signup.password")}</label>
                        <Field type="password" name="password" id="password" placeholder={t("signup.passwordPlaceholder")}/>
                        <ErrorMessage name="password" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="confirm-password">{t("signup.confirmPassword")}</label>
                        <Field type="password" name="confirm-password" id="confirm-password" />
                        <ErrorMessage name="confirm-password" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="phone-number">{t("signup.phone")}</label>
                        <Field type="text" name="phone-number" id="phone-number" placeholder={t("signup.phonePlaceholder")}/>
                        <ErrorMessage name="phone-number" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="language">{t("signup.language")}</label>
                        <Field as="select" name="language" id="language" onClick={changeLanguage}>
                            <option value="en" className="selected-lang">{t("signup.english")}</option>
                            <option value="ar" className="selected-lang">{t("signup.arabic")}</option>
                        </Field>
                        <ErrorMessage name="language" component="p" className="error" />
                    </div>
                    <div>
                        <label htmlFor="personal-photo">{t("signup.photo")}</label>
                        <input
                            type="file"
                            id="personal-photo"
                            name="personal-photo"
                            onChange={(event) => setFieldValue("personal-photo", event.currentTarget.files[0])}
                        />
                        <ErrorMessage name="personal-photo" component="p" className="error" />
                    </div>
                    <div>
                        <Field type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">{t("signup.agree")}</label>
                        <ErrorMessage name="agree" component="p" className="error" />
                    </div>
                    <button type='submit'>{t("signup.submit")}</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}