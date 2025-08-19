import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import '../css/Signup.css'
import {useNavigate} from "react-router-dom"
import users from '../data/users.json'
import { useTranslation } from "react-i18next"
import { FieldError } from "../components/FieldError"
import React from "react"

export const Signup = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()

    const changeLanguage = (event) => {
        const language = event.currentTarget.value
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
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

    const [passwordIsHidden, setPasswordIsHidden] = React.useState(true)
    const [confirmedPasswordIsHidden, setConfirmedPasswordIsHidden] = React.useState(true)

    function showOrHidePassword(){
        setPasswordIsHidden(old => !old)   
    }

    function showOrHideConfirmedPassword(){
        setConfirmedPasswordIsHidden(old => !old)   
    }

    const handleSubmit = () => {
        setIsLoggedIn(true)
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
                        <FieldError 
                            divClass='field' 
                            name='first-name' 
                            label={t("signup.firstName")}
                            type="text"
                        />
                        <FieldError 
                            divClass='field' 
                            name='last-name' 
                            label={t("signup.lastName")}
                            type="text"
                        />
                    </div>
                    <FieldError 
                        divClass= 'field' 
                        name= 'date-of-birth' 
                        label= {t("signup.dob")}
                        type= "date"
                        min= '1965-01-01'
                        max='2008-01-01'
                    />
                    <div>
                        <label htmlFor="gender">{t("signup.gender")}</label>
                        <Field type="radio" name="gender" id="male" value="male"/>{t("signup.male")}
                        <Field type="radio" name="gender" id="female" value="female"/>{t("signup.female")}
                        <ErrorMessage name="gender" component="p" className="error" />
                    </div>
                    <FieldError 
                        divClass= 'field' 
                        name= 'email' 
                        label= {t("signup.email")}
                        type= "text"
                        placeholder= {t("signup.emailPlaceholder")}
                    />
                    <div className='field'>
                        <label htmlFor="password">{t("signup.password")}</label>
                        <Field type={passwordIsHidden ? 'password' : 'text'} name="password" id="password" placeholder={t("signup.passwordPlaceholder")}/>
                        <button className='password-icon' onClick={showOrHidePassword}>
                            {passwordIsHidden ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </button>
                        <ErrorMessage name="password" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="confirm-password">{t("signup.confirmPassword")}</label>
                        <Field type={confirmedPasswordIsHidden ? 'password' : 'text'} name="confirm-password" id="confirm-password" />
                        <button className='password-icon' onClick={showOrHideConfirmedPassword}>
                            {confirmedPasswordIsHidden ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                        </button>
                        <ErrorMessage name="confirm-password" component="p" className="error" />
                    </div>
                    <FieldError 
                        divClass= 'field' 
                        name= 'phone-number' 
                        label= {t("signup.phone")}
                        type= "text"
                        placeholder= {t("signup.phonePlaceholder")}
                    />
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
                    <FieldError 
                        name= 'agree' 
                        label= {t("signup.agree")}
                        type= "checkbox"
                    />
                    <button className="sign-button" type='submit'>{t("signup.submit")}</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}