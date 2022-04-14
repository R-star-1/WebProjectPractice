import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { ActionCreator } from 'redux';
import { actionCreators } from './state/index';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Shop = () => {

    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <div className='Add_To_Card'>
                {/* <button > + </button>
              "Add To Cart" 
              
            <button  > - </button> */}
                <h1> Add To Cart  </h1>
            </div >
            <IconButton >
                <DeleteIcon onClick={() => { withdrawMoney(100) }} />
            </IconButton >  
            <IconButton >     
                <AddShoppingCartIcon onClick={() => { depositMoney(100) }} />
            </IconButton >

        </>

    );
}
export default Shop;