import { useFormik, Formik, Form, Field, ErrorMessage,  } from "formik";

import * as yup  from 'yup';

export default function YupValidationComponent(){

    return(

        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName : '',
                    Age : '',
                    Email : '',
                    City : '',

                }}
            validationSchema={
                yup.object({
                    UserName : yup.string().min(4, 'To Short').max(10, 'To Long').required('UserName is required'),
                    Age : yup.number().required('Age is required'),
                    Email : yup.string().email('Invalid Email').required('Email is required'),
                    City : yup.string()
                })}

            onSubmit={
                values=>{
                    alert(JSON.stringify(values));
                }}
            >
                <Form>
                    {
                        <div>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type = "text" name="UserName"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name = 'UserName'></ErrorMessage></dd>
                            <dt>Email</dt>
                            <dd><Field type = "text" name="Email"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name = 'Email'></ErrorMessage></dd>
                            <dt>Age</dt>
                            <dd><Field type ="text" name="Age"></Field></dd>
                            <dd className="text-danger"><ErrorMessage name = 'Age'></ErrorMessage></dd>
                            <dt>City</dt>
                            <dd><Field as = 'select' name="City">
                                  <option value="">Delhi</option>
                                  <option value="">Lucknow</option>
                                  <option value="">Kanpur</option>  
                                </Field></dd>
                        </dl>
                        <button>Register</button>
                    </div>
                    }
                </Form>
            </Formik>

        </div>
    )
}