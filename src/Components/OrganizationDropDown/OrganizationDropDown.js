import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrganizations } from '../../redux/actions/OrganizationAction';


const OrganizationDropDown = ({
    handleSelect = () => {}
}) => {
    const organisationData  = useSelector(state => state.allOrganization.organizations);
    const dispatch = useDispatch();
    useEffect(() => {
        if(organisationData.length === 0){
            dispatch(fetchOrganizations())
        }
    },[]);

    return(
        <div className="organization">
            <select 
                onChange={(event) => handleSelect(event)} 
                name="shifttype" 
                id="shift"
            >
                <option value=""></option>
                {organisationData.map(({orgCode, organisationName, idOrganisation})=>{
                    let org = orgCode + "-" + organisationName;
                    if(org.length > 26) 
                        org = org.substring(1, 26) + "...";
                    return <option key={idOrganisation} value={idOrganisation}>{org}</option>
                })}
            </select>
        </div>
    )
}

export default OrganizationDropDown;