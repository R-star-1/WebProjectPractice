import React,{useState} from 'react';

const Apps= () =>{
    const[status, SetStatus] = useState(false);
    return(
        <>
            <div style={{color: "white"}}>
               { status? <h1>Welcome to all </h1> : null }
            </div>
            <button onClick={()=>{SetStatus(true)}}> Show Data </button>
            <button onClick={()=>{SetStatus(false)}}> Hide Data </button>
        
        </>
   );
}
export default Apps;