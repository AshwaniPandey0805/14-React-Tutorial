import { useFormik } from "formik";

export default function FormikValidation(){

    function ValidationForm(userDetails){
        
        const error = {}
        if(userDetails.UserName == ''){
            error.UserName = 'User Name Required';
        }
        if(userDetails.Age == ''){
            error.Age = 'Age is required';
        }
        if(userDetails.Email == ''){
            error.Email = 'Email is required';
        }

        return error;

    }

    const formik = useFormik({
        initialValues : {
            UserName : '',
            Age : 0,
            Email : ''
        },
        validate : ValidationForm,
        onSubmit : values =>{
            alert(JSON.stringify(values));
        }
    })
    

    return(
        <div className="container-fluid w-50 p-4 align-content-center bg-light">
            <form className="form-control" onSubmit={formik.handleSubmit}>
                <h2 style={{textAlign : 'center'}}>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} className="form-control " /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange}  className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                </dl>
                <div>
                    <button className="btn btn-outline-danger w-25 p-1 ">Register</button>
                </div>
            </form>
        </div>
    )
}