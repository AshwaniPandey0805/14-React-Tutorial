import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function UserLogin(){

    const [cookie, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, seUserDetails] = useState({UserName : '', Password : ''});

    function handleUserName(e){
        seUserDetails({
            UserName : e.target.value,
            Password : userDetails.Password
        })
    }

    
    function handlePassword(e){
        seUserDetails({
            UserName : userDetails.UserName,
            Password : e.target.value
        })
    }

    function handleLogin(){
        setCookie('username', userDetails.UserName);
        alert('Login Success..');
    }

    function handleSignOut(){
        removeCookie('username');
        alert('Log Out..')
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserName} /></dd>
                <dt>Password</dt>
                <dd><input type="text" onChange={handlePassword} /></dd>

            </dl>
            <button onClick={handleLogin}>Login</button>
            <button className="m-2" onClick={handleSignOut}>Sign Out</button>
            <div>
                hello ! {cookie.username}
            </div>
        </div>
    )
}