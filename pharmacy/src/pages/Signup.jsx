import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import '../css/Signup.css'
import {useNavigate} from "react-router-dom"

export const Signup = ({isLoggin}) => {
    const navigate = useNavigate()

    const initialValues = {
        'first-name': "",
        'last-name': "",
        'date-of-birth': "2025-08-14",
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
        'first-name': Yup.string().required("First name is required"),
        'last-name': Yup.string().required("Last name is required"),
        'date-of-birth': Yup.date().required("Date of birth is required"),
        gender: Yup.string().required("Gender is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
        'confirm-password': Yup.string()
            .oneOf([Yup.ref("password")], "Passwords doesn't match")
            .required("Confirm password is required"),
        'phone-number': Yup.string()
            .matches(/^[0-9]+$/, "Phone number must contain only digits")
            .length(11, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
        'personal-photo': Yup.mixed()
            .required("Photo is required")
            .test("fileFormat", "Only PNG, JPEG, JPG are allowed", (value) =>
            value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
            ),
        agree: Yup.boolean().oneOf([true], "You must accept the terms"),
    })

    const handleSubmit = () => {
        isLoggin(true)
        navigate('/')
    }

    return(
        <div className='signup'>
            <h2>Sign up Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ setFieldValue }) => (
                <Form>
                    <div className="full-name">
                        <div className='field'>
                            <label htmlFor="first-name">First Name:</label>
                            <Field type="text" id="first-name" name="first-name"/>
                            <ErrorMessage name="first-name" component="p" className="error"/>
                        </div>
                        <div className='field'>
                            <label htmlFor="last-name">Last Name:</label>
                            <Field type="text" id="last-name" name="last-name"/>
                            <ErrorMessage name="last-name" component="p" className="error" />
                        </div>
                    </div>
                    <div className='field'>
                        <label htmlFor="date-of-birth">Date Of Birth:</label>
                        <Field type="date" id="date-of-birth" name="date-of-birth"/>
                        <ErrorMessage name="date-of-birth" component="p" className="error" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <Field type="radio" name="gender" id="male" value="male"/>Male
                        <Field type="radio" name="gender" id="female" value="female"/>Female
                        <ErrorMessage name="gender" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email:</label>
                        <Field type="text" name="email" id="email" placeholder="example@gmail.com"/>
                        <ErrorMessage name="email" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="password">Password:</label>
                        <Field type="text" name="password" id="password" placeholder="must contain 6 characters at least"/>
                        <ErrorMessage name="password" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <Field type="text" name="confirm-password" id="confirm-password" />
                        <ErrorMessage name="confirm-password" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="phone-number">Phone Number:</label>
                        <Field type="text" name="phone-number" id="phone-number" placeholder="must contain 11 digits"/>
                        <ErrorMessage name="phone-number" component="p" className="error" />
                    </div>
                    <div className='field'>
                        <label htmlFor="language">Select Your Language:</label>
                        <Field as="select" name="language" id="language">
                            <option value="arabic">Arabic</option>
                            <option value="english">English</option>
                        </Field>
                        <ErrorMessage name="language" component="p" className="error" />
                    </div>
                    <div>
                        <label htmlFor="personal-photo">Select a photo:</label>
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
                        <label htmlFor="agree">I agree to the terms and conditions of use.</label>
                        <ErrorMessage name="agree" component="p" className="error" />
                    </div>
                    <button type='submit'>Sign Up</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}