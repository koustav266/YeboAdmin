import React from 'react'
import OrganizationImg from "../../Assets/Images/Organization_Img.png";
import "./style.scss";
const OrganizationEmptyScreen = () => {
    return (
        <>
            <div className='organizationempty_wrapper'>
                <img className='loader_img' src={OrganizationImg} />
                <p>Select the ‘Organization’ from the dropdown above</p>
            </div>
        </>
    )
}

export default OrganizationEmptyScreen
