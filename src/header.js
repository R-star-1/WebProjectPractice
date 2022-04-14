import React from "react";

import { useSelector} from 'react-redux';
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header =() =>{
   const amount = useSelector(state=>
       state.amount)
    return(
            <div className="Header">
                <h1> This is React redux </h1>
                <button> Your Balance :{amount} </button>
            </div>
         
    );
   
}
export default Header;
