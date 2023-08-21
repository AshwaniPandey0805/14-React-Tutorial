import { useState } from "react";

export default function EventBindingComponent(){

    const [UserName, setUserName] = useState('john');

    function HandleEventBinding(e){
        setUserName(e.target.value);
        //console.log(e.target.value);

    }

    return(
        <>
            <div className="container-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" value={UserName} onChange={HandleEventBinding} /></dd>
                </dl>
                <h3>Hello ! {UserName}</h3>
            </div>
        </>

    )
}