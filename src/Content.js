import React from 'react';
let Content = () => {
    return (
        <>
            <div className='wrapper' id="content">
                {/* <div className="InsideWrapper"> */}
                <div className='content'>
                    <h1 className='content'>This is the writing section of the webpage</h1>
                    <p>Netflix is a video streaming subscription service that allows you to search their catalogue of TV shows and movies to watch what you want, when you want to watch it, in the comfort of your own home.

                        Want to watch TV at your own convenience?
                        Would you like to be able to record and watch shows at a time that suits you?
                        Do you want access to overseas shows as soon as they are released?
                        View Available Models
                    </p>
                </div>
                <div className='Image'>

                    <img src="SideImage.jpg" width="350px" height="300px" alt="logo is Loading..." />

                </div>

            </div>
            <br></br>
        </>
    );
}
export default Content;