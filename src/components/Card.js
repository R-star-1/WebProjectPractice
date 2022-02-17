import react from 'react';
import './Card.css';

const Card = (props) =>{
    return (
    <>  
        <div className='wrapper'>
            <div>
                    <img src={props.image} className='Image'/>
                  
                <div>
                        <h1> {props.heading} </h1>
                    <div className='this_is_button'>                  
                        <a href="">
                            <button>Watch Now</button>
                
                        </a>
                    </div>

                </div>
            </div>
          
        </div>
    </>
    );
}
export default Card;