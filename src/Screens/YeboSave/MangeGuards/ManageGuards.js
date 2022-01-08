import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./ManageGuards.scss";
// import Button from "../../Components/GlobalComponents/Buttons/Button";
import AddIcon from "../../../Assets/Icons/Add_Icon.png";
import SearchBox from '../../../Components/SerachBox/SearchBox';
import AddGuards from "../MangeGuards/AddGuards/AddGuards";
import Popup from "../../../Components/Popup/Popup";
import SuperAdminProfile from '../../../Components/SuperAdminProfile/SuperAdminProfile';
// import EditIcon from "../../Assets/Icons/Edit_Icon.png";
// import DeleteGuardPopup from "./DeleteGuardPopup/DeleteGuardPopup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
// import Searchbar from "../../Components/SearchBar/Searchbar";
import { showLoader, hideLoader } from '../../../redux/actions/loaderAction';
import EditGuardPopup from './EditGuardPopup/EditGuardPopup';
import { fetchGuards } from '../../../redux/actions/guardsAction';
import { deleteGuardAction, activeGuardAction } from '../../../redux/actions/guardsAction';

const ManageGuards = () => {
    const dispatch = useDispatch();
    const guards  = useSelector(state => state.allGuards.guards);
    const [addAgencyPopup, setAddAgencyPopup] = useState(false);
    // const [deletePopup, setDeletePopup] = useState(false);
    const [editGuardPopup, setEditGuardPopup] = useState(false);
    const [editGuardData, setEditGiardData] = useState({})
    // const [employDetails, setEmployDetails] = useState({});
    const [guardData, setGuardData] = useState([]);

    useEffect(async ()=>{
        if(guards && guards.length === 0){
            dispatch(showLoader());
            await dispatch(fetchGuards());
            dispatch(hideLoader());
        }
    },[])

    useEffect(()=>{
        setGuardData(guards)
    },[guards])

    const deleteActiveGuard =  async (status, guardDetails) => {
        dispatch(showLoader())
        if(status === 1)
            await dispatch(activeGuardAction(guardDetails.idGuard))
        else
            await dispatch(deleteGuardAction(guardDetails.idGuard))
        dispatch(hideLoader())
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'guardFullName',
            Cell: ({ row, cell: { value } }) => (
                <div className="edit_btn" onClick={() => {
                    setEditGuardPopup(true);
                    setEditGiardData(row.original);
                }}>
                    {value}
                </div>
            )
        },
        {
            Header: 'Address',
            accessor: 'address1',
        },
        {
            Header: 'Mobile number',
            accessor: 'mobileNo'
        },

        {
            Header: 'Email',
            accessor: 'emailId'
        },
        {
            Header: 'Guard ID',
            accessor: 'idGuard'
        },
        // {
        //     Header: 'Description',
        //     accessor: 'Description'
        // },
        {
            Header: 'Status',
            accessor: 'activeStatus',
            Cell: ({row, cell: { value } }) => (
                <div className="slider_checkbox">
                    <label className="switch">
                        <input 
                            type='checkbox' checked={value === 18} 
                            onClick={() => deleteActiveGuard(value, row.original)}
                        />
                        <span className="slider" />
                        <p className="off">OFF</p>
                        <p className="on">ON</p>
                    </label>
                </div>
            )
        }
    ]
    return (
        <>
            <div className="manage_guard">
                <div className="d-flex">
                    <div className="manage_guard_div container py-5">
                        <div className="main_heading">
                            <h1>Guards</h1>
                            <SuperAdminProfile />
                        </div>
                        <div className="sub_heading my-4">
                            {/* <h3>Agency Name - # 211211211211</h3> */}
                            <div className="date_search">
                                <div div className="add_agency">
                                    <img src={AddIcon} alt="AddIcon" onClick={() => {
                                        setAddAgencyPopup(true)
                                    }} />
                                    <span>Add</span>
                                </div>
                                <div className="search_bar">
                                    <span>Search</span>
                                    <SearchBox 
                                        data={guards} 
                                        setData={setGuardData} 
                                        elements={[
                                            "guardFullName",
                                            "address1",
                                            "mobileNo",
                                            "emailId",
                                            "idGuard"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="manage_agency_table">
                            <ReactTable columns={columns} data={guardData} />
                        </div>
                        {/* <div className="manage_btn" onClick={() => { setDeletePopup(true) }}>
                            <Button title='Delete' />
                        </div> */}
                        <Popup trigger={addAgencyPopup} setTrigger={setAddAgencyPopup}>
                            <AddGuards setAddAgencyPopup={setAddAgencyPopup} />
                        </Popup>
                        <Popup trigger={editGuardPopup} setTrigger={setEditGuardPopup}  >
                            <EditGuardPopup setEditGuardPopup={setEditGuardPopup} editGuardData={editGuardData} />
                        </Popup>
                        {/* <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
                            <DeleteGuardPopup />
                        </Popup> */}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ManageGuards
