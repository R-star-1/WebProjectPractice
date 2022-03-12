import React from 'react';
import Header from './Header';
import Content from './Content';
import Background from './Background';
import Cards from './Cards';
import Footer from './Footer';
import Inventing_Anna from './Images/images (1).jpg';
import vikings from './Images/vikings.webp';
import Cocomelon from './Images/Cocomelon.jpg'
import SweetMagnolias from './Images/SweetMagnolias.jpg';
const App = () =>{
    console.warn("this is running");
    return (
        <>
          
            <Header/>
            {/* <Background />
             <Content/>
            <div className='Card_Collections'>
                < Cards name="" imgpath= {Inventing_Anna}/> 
                < Cards name="SweetMagnolias" imgpath= {SweetMagnolias}/>
                < Cards name="vikings" imgpath= {vikings}/>
                < Cards name="Cocomelon" imgpath= {Cocomelon}/>
               
            </div>  */}
            <Footer /> 
        </>
    );
} 
export default App;