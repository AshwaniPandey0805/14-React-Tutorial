import { useState } from "react"

export default function FormComponent(){

    const [users] = useState([
        {UserID : 'Ashwani'},
        {UserID : '@Ashwani'},
        {UserID : '@Ashwanipandey'},
        {UserID : '@Ashwanipandey0805'},
    ]);
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setIsUerValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [isPwdValid, setIsPwdValid] = useState(false);
    const [KeyCps, SetKeyCps] = useState(false);
    const [cityMsg, setCityMsg] = useState('');
    const [userDetails, setUserDetails] = useState({User : '', Password : '', City : ''});

    function VerifyUserID(e){
        for(var user of users){
            if(user.UserID == e.target.value){
                setUserMsg('User ID is Taken - Try another one');
                setIsUerValid(false);
                break;
            }else{
                setUserMsg('User ID is Available');
                setIsUerValid(true);
            }
        }

    }
    

    function VerifyPasword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPwdMsg('Strong Password');
            setIsPwdValid(true);
        }else{
            if(e.target.value.lenght<4){
                setPwdMsg('Poor Password');
                setIsPwdValid(false);
            }else{
                setPwdMsg('Weak Password');
                setIsPwdValid(false);
            }
            
        }
    }

    function HandleUserChange(e){
        setUserDetails({
            User : e.target.value,
            Password : userDetails.Password,
            City : userDetails.City
        })
    }

    function HandlePasswordChange(e){
        setUserDetails({
            User : userDetails.User,
            Password : e.target.value,
            City : userDetails.City 
        })
    }

    function RegisterClick(e){
        alert(JSON.stringify(userDetails));
    }

    function VerifyCapsOn(e){
        console.log(e.keyCode);
        if(e.keyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=90){
            SetKeyCps(true);
        }else{
            SetKeyCps(false);
        }
    }

    function VerifyCity(e){
        if(e.target.value == 'NoCity'){
            setCityMsg('Select City');
        }
        else{
            setCityMsg('');
        }
    }

    function HideUserMsg(e){
        if(e.target.value == ''){
            setUserMsg('User ID required');
        }
        else{
            setUserMsg('');
        }
    }
    function HidePwdMsg(){
        setPwdMsg('');
        SetKeyCps(false);
    }

    return(
        <div className='container-fluid'>
            <h2>Register User</h2>
            <dl>
                <dt>User ID</dt>
                <dd><input type="text" onChange={HandleUserChange} onBlur={HideUserMsg} onKeyUp = {VerifyUserID} /></dd>
                <dd className={(isUserValid == true)?'text-success':'text-danger'} >{userMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={HandlePasswordChange} onBlur={HidePwdMsg} onKeyPress={VerifyCapsOn} onKeyUp={VerifyPasword} /></dd>
                <dd className={(isPwdValid == true)?'text-success':'text-danger'}>{pwdMsg}</dd>
                <dd className={(KeyCps == true)?'d-block': 'd-none'}>
                    <span className="text-warning">
                        <span className="bi bi-exclamation-triangle">Caps On</span>
                    </span>
                </dd>
                <dt>City</dt>
                <dd>
                    <select onChange={VerifyCity} >
                        <option value="NoCity">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lucknow">Lucknow</option>
                    </select>
                </dd>
                <dd className=" text-danger" >
                    {cityMsg}
                </dd>
                <button onClick={
                    RegisterClick
                }>Resgister</button>
            </dl>
        </div>
    )
}