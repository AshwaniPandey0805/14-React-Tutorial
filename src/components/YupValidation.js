import { useFormik } from "formik";
import * as yup from 'yup';

export default function YupValidation(){

    const formik = useFormik({
        initialValues : {
            UserName : '',
            Age : 0,
            Email : '',

        },
        validationSchema : yup.object({
            UserName : yup.string()
                          .required('User name is required')
                          .min(4, 'Name to short')
                          .max(10, 'Name is to long'),
            Email : yup.string()
                        .email('Invalid Email')
                        .required('Email is required'),
            Age :   yup.number()
                       .required('Age is required')
                        
        }),
        onSubmit : value=>{
            alert(JSON.stringify(value));
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('UserName')} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd ><input type="text" {...formik.getFieldProps('Age')} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Eamil</dt>
                    <dd ><input type="text" {...formik.getFieldProps('Email')}  /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}