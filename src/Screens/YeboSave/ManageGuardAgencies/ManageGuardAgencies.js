import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./ManageGuardAgencies.scss";
import AddIcon from "../../../Assets/Icons/Add_Icon.png";
import AddAgencies from "./AddAgencies/AddAgencies";
import Popup from "../../../Components/Popup/Popup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
import AgencyDetails from "./AgencyDetails/AgencyDetails";
import SuperAdminProfile from '../../../Components/SuperAdminProfile/SuperAdminProfile';
// import { ExportToExcel } from '../../../Components/ExportToExcel/ExportToExcel';
// import ImportExcel from '../../../Components/ImportExcel/ImportExcel';
// import PopupService from "../../../Components/PopupService/PopupService";
// import downloadIcon from "../../../Assets/Icons/downloadBtn.png"
import SearchBox from '../../../Components/SerachBox/SearchBox';
import { fetchGuardAgencies } from '../../../redux/actions/guardAgenciesAction';
import { showLoader, hideLoader } from '../../../redux/actions/loaderAction';
// import DeleteUserPopup from "./DeleteUserPopup/DeleteUserPopup";
import { deleteGuardAgencyAction, activeGuardAgencyAction } from '../../../redux/actions/guardAgenciesAction';


const ManageGurdAgencies = () => {
    const guardAgencyData  = useSelector(state => state.guardAgencies.guardAgencies);
    const dispatch = useDispatch()
    const [addAgencyPopup, setAddAgencyPopup] = useState(false);
    const [agencyDetailsPopup, setAgencyDetailsPopup] = useState(false);
    const [agencyDetailsData, setAgencyDetailsData] = useState({});
    const [importExcelDetails, setImportExcelDetails] = useState(false);
    const [showNoData, setshowNoData] = useState(true);
    const [data, setData] = useState([]);

    useEffect(async ()=>{
        if(guardAgencyData && guardAgencyData.length === 0){
            dispatch(showLoader())
            await dispatch(fetchGuardAgencies());
            dispatch(hideLoader())
        }
    },[]);

    useEffect(()=>{
        setData(guardAgencyData)
    },[guardAgencyData])

    const deleteAdency = async (status, guardDetails) => {
        dispatch(showLoader())
        if(status === 1)
            await dispatch(activeGuardAgencyAction(guardDetails.idGuardAgency))
        else
            await dispatch(deleteGuardAgencyAction(guardDetails.idGuardAgency))
        dispatch(hideLoader())
    }


    const columns = [
        {
            Header: 'Name',
            accessor: 'contactName',
            Cell: ({ row, cell: { value } }) => (
                <div className="editline_btn" 
                    onClick={() => {
                        setAgencyDetailsPopup(true);
                        setAgencyDetailsData(row.original)
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Email',
            accessor: 'emailId',
            Cell: ({ row, cell: { value } }) => (
                <div 
                    onClick={() => {
                        setAgencyDetailsPopup(true);
                        setAgencyDetailsData(row.original);
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Phone number',
            accessor: 'mobileNo',
            Cell: ({ row, cell: { value } }) => (
                <div 
                    onClick={() => {
                        setAgencyDetailsPopup(true);
                        setAgencyDetailsData(row.original);
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Address',
            accessor: 'guardAgencyAddress',
            Cell: ({ row, cell: { value } }) => (
                <div 
                    onClick={() => {
                        setAgencyDetailsPopup(true);
                        setAgencyDetailsData(row.original);
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Description',
            accessor: 'description',
            Cell: ({ row, cell: { value } }) => (
                <div 
                    onClick={() => {
                        setAgencyDetailsPopup(true);
                        setAgencyDetailsData(row.original);
                    }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Status',
            accessor: 'activeStatus',
            Cell: ({ row, cell: { value } }) => (
                <div className="slider_checkbox" >
                    <label className="switch" >
                        <input 
                            type='checkbox'
                            checked={value === 18} 
                            onClick={() => deleteAdency(value, row.original)}
                        />
                        <span className="slider" />
                        <p className="off">OFF</p>
                        <p className="on">ON</p>
                    </label>
                </div>
            )
        },
    ]

   

    return (
        <>
            <div className="manage_agency">
                <div className="d-flex">
                    <div className="manage_agency_div container py-5">
                        
                        <div className="main_heading">
                            <h1>Manage Agencies</h1>
                            <SuperAdminProfile />
                        </div>
                        <div className="sub_heading my-4">
                            <div className="date_search">
                                <div div className="add_agency" onClick={() => {
                                    setAddAgencyPopup(true)
                                }} >
                                    <img src={AddIcon} alt="AddIcon" />
                                    <span>Add</span>
                                </div>
                                <div className="search_bar">
                                    <span>Search</span>
                                    <SearchBox 
                                        data={guardAgencyData} 
                                        setData={setData} 
                                        elements={[
                                           "guardAgencyName",
                                            "emailId",
                                            "mobileNo",
                                            "guardAgencyAddress",
                                            "description"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div className="importExportXcel">
                            <ExportToExcel
                                apiData={['FirstName', 'Last Name', 'Email']}
                                fileName={"fileName"}
                            />
                            <button
                                className="impoerXcelBtn"
                                onClick={() => setImportExcelDetails(true)}
                            >
                                <figure>
                                    <img src={downloadIcon} />
                                </figure>
                                import
                            </button>
                        </div> */}
                        <div className="manage_agency_table">
                          
                                <ReactTable columns={columns} data={data} />
                        </div>
                        {/* <div className="manage_btn" onClick={() => { setDeletePopup(true) }}>
                            <Button title='Delete' />
                        </div> */}
                        <Popup trigger={addAgencyPopup} setTrigger={setAddAgencyPopup}>
                            <AddAgencies setAddAgencyPopup={setAddAgencyPopup}/>
                        </Popup>
                        <Popup trigger={agencyDetailsPopup} setTrigger={setAgencyDetailsPopup}>
                            <AgencyDetails 
                                setAgencyDetailsPopup={setAgencyDetailsPopup} 
                                agencyDetailsData = {agencyDetailsData}/>
                        </Popup>
                        {/* <PopupService trigger={importExcelDetails} setTrigger={setImportExcelDetails}>
                            <ImportExcel setTrigger={setImportExcelDetails} />
                        </PopupService> */}
                        {/* <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
                            <DeleteUserPopup />
                        </Popup> */}
                    </div>
                </div>
            </div>
        </>
    )

}
export default ManageGurdAgencies
