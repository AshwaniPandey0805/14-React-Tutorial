import { useEffect, useState } from "react";

export default function ReactHookDemo(){

    const [msg,setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent />);
    }
    
    function handleErrorClick(){
        setMsg(<ErrorComponent />)
    }
     

    return(
        <div className="container-fluid p-2">
            <button className="btn btn-primary w-2 p-2" onClick={handleSuccessClick}>Success</button>
            <button className="btn btn-danger w-2 p-2" onClick={handleErrorClick}>Invalid</button>
            <hr />
            <div>
                {msg}
            </div>
        </div>
    )
}




function SuccessComponent(){
    
    useEffect(()=>{
        alert('Success Component rendered');
        return(()=>{
            alert('Success Component un-mounted');
        })
    },[])

    return(
        <div>
            <h2>Login Success...</h2>
        </div>
    )
}


function ErrorComponent(){
    
    useEffect(()=>{
        alert('Error Component rendered');
        return(()=>{
            alert('Error Component un-mounted');
        })
    },[])

    return(
        <div>
            <h2>Invalid Credantial...</h2>
        </div>
    )
}