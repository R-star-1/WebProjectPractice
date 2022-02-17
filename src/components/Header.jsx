import react from 'react';

const Header = () =>{
    return (
        <>
            <header>
                {/* <div className="Collections"> */}
                    {/* <img src="./FavIcons.jpg" alt="favIcons"/> */}
                    {/* <img src= "https://picsum.photos/50/50" alt="This is logo"/> */}
                    <h1>  
                        This Is Cards Projects
                    </h1>
                {/* </div> */}
                <ul>
                    <a  href="./"><li> Home </li>  </a>
                    <a  href="./"><li> practice </li> </a>
                    <a  href="./"><li> Courses </li> </a>
                    <a  href="./"><li> Links </li> </a>
                </ul>
            </header>
        </>
    );
}

export default Header;