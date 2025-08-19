import { Field, ErrorMessage } from "formik"

export const FieldError = ({
    divClass, name, label, type, min, max, placeholder
}) => {
            return(
                <div className={divClass}>
                    <label htmlFor={name}>{label}</label>
                    <Field type={type} 
                        id={name} 
                        name={name} 
                        min={min} 
                        max={max}
                        placeholder={placeholder}
                    />
                    <ErrorMessage name={name} 
                        component="p" 
                        className="error"
                    />
                </div>
            )
     }