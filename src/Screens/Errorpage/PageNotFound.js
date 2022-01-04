import React from 'react';
import pageNotFoundGif from "../../Assets/Images/pageNotFound.gif";
import "./PageNotFound.scss"

const PageNotFound = () => {
    return(
        <div className='errorPage'>
            <div className='errorContainer'>
                <figure className="errorGif">
                    <img src={pageNotFoundGif} />
                </figure>
                <h1 className='errorHeading'>ERROR!</h1>
                <p className='errorMessage'>Sorry the page not found.</p>
            </div>
        </div>
    )
}

export default PageNotFound;