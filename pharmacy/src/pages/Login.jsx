import users from '../data/users.json'
import '../css/Login.css'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' 

export const Login = ({isLoggin}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email")
                .test('exists', 'Email not exist', (value)=> {
                    return value && (users.find(user => user.email == value) != undefined)
                }).required('Email is required'),
        password: Yup.string().test('matches', 'Incorrect password', function(value){
                    const {email} = this.parent
                    return value && (users.find(user => user.email == email && user.password == value) != undefined)
                }).required('Password is required')
    })

    function handleSubmit(){
        isLoggin(true)
        navigate(from, { replace: true })
    }

    return(
        <div className='login'>
            {/* if user try to access protected route(location.state?.from?.pathname != undefined) ..*/}
            {/* then redirect to login & display this message  */}
            {from != '/' && <h2 className='alert-login'>You must login first</h2>}
            <h2>Log in Form</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className='info'>
                        <label htmlFor="email" id='email'>Email:</label>
                        <Field type="text" name="email"/>
                        <ErrorMessage name="email" component="p" className='error'/>
                    </div>
                    <div className='info'>
                        <label htmlFor="password" id='password'>Password:</label>
                        <Field type="text" name="password"/>
                        <ErrorMessage name='password' component="p" className='error'/>
                    </div>
                    <small>Don't have account? <Link to="/signup">Register</Link></small>
                    <button type="submit">Log in</button>
                </Form>
            </Formik>
        </div>
    )
}