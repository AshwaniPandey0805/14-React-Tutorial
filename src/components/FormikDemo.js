import { Formik, useFormik } from "formik";

export default function FormikDemo(){

   const formik = useFormik({
        initialValues : {
            UserID : '',
            Password : '',
            City : ''
        },
        onSubmit : values=>{
            alert(JSON.stringify(values));
        }
    })


    return(
        <div className="container-fluid align-content-center w-50 p-4 bg-light">
            <form className="form-control " onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User</dt>
                    <dd><input type="text" name="UserID" onChange={formik.handleChange} className="form-control"  value={formik.values.UserID} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} className="form-control" value={formik.values.Password}   /></dd>
                    <dt>City</dt>
                    <dd>
                        <select className="form-select" name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option value="Select">Select Option</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lucknow">Lucknow</option>
                        </select>
                    </dd>
                    
                </dl>
                <button >Regsiter</button>
                    <br /><br />
                    <hr />
                    <h4>User Details</h4>
                    <dl>
                        <dt>User Name</dt>
                        <dd>{formik.values.UserID}</dd>
                        
                    </dl>



                
            </form>

        </div>
    )
}