import React from 'react';

let Cards = (props) =>{
    return(
    <>
        <div className= "CardBody">
            <img src = {props.imgpath} /> 
            <div>
                <h1 style={{color: 'white'}}> {props.name} </h1>
                <button>Watch Now</button>
            </div>
        </div>
    </>
    );
   
}
export default Cards;