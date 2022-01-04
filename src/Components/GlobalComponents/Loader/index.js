import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import LoaderImg from "../../../Assets/Images/Loader_Icon.gif";
import './style.scss';

const Loader = () => {
    const isLoading = useSelector(state => state.loader.loader);
    return (
        <div className='loderHOC'>
            {isLoading &&
                <div className='loader_wrapper'>
                    <img className='loader_img' src={LoaderImg} />
                </div>}
        </div>
    )
}
export default Loader
