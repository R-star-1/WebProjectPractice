//this is the Header of the Website

import React from 'react';
import NetFlix  from './NetFlix.';
let Header = () =>{
    return(
        <header >
           <NetFlix />
           <ul className='unorderList'>
               <a href="" > <li> Home </li></a>
               <a href="#content"> <li> About us</li></a>
               <a href=""> <li> Features </li></a>
               <a href=""> <li> Contact us </li></a>
               <a href=""> <li> GetClick </li></a>
           </ul>
        </header>
    );

}
export default Header;