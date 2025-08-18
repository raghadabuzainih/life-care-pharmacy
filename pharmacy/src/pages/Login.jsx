import users from '../data/users.json'
import '../css/Login.css'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' 
import { useTranslation } from "react-i18next"

export const Login = ({isLoggin}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const {t} = useTranslation()

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email(t("login.validation.emailInvalid"))
            .test('exists', t("login.validation.emailNotExist"), (value)=> {
                return value && (users.find(user => user.email === value) != undefined)
            })
            .required(t("login.validation.emailRequired")),
        password: Yup.string()
            .test('matches', t("login.validation.passwordIncorrect"), function(value){
                const {email} = this.parent
                return value && (users.find(user => user.email === email && user.password === value) != undefined)
            })
            .required(t("login.validation.passwordRequired"))
    })

    function handleSubmit(){
        isLoggin(true)
        navigate(from, { replace: true })
    }

    return(
        <div className='login'>
            {/* if user try to access protected route(location.state?.from?.pathname != undefined) ..*/}
            {/* then redirect to login & display this message  */}
            {from !== '/' && <h2 className='alert-login'>{t("login.mustLogin")}</h2>}
            <h2>{t("login.title")}</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className='info'>
                        <label htmlFor="email">{t("login.email")}</label>
                        <Field type="text" name="email"/>
                        <ErrorMessage name="email" component="p" className='error'/>
                    </div>
                    <div className='info'>
                        <label htmlFor="password">{t("login.password")}</label>
                        <Field type="password" name="password"/>
                        <button className='password-icon'></button>
                        <ErrorMessage name='password' component="p" className='error'/>
                    </div>
                    <small>{t("login.noAccount")} <Link to="/signup">{t("login.register")}</Link></small>
                    <button className='log-button' type="submit">{t("login.submit")}</button>
                </Form>
            </Formik>
        </div>
    )
}