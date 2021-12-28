import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./ManageGuardAgencies.scss";
import AddIcon from "../../../Assets/Icons/Add_Icon.png";
// import AddAgencies from "./AddAgencies/AddAgencies";
// import Popup from "../../../Components/Popup/Popup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
// import AgencyDetails from "./AgencyDetails/AgencyDetails";
// import OrganizationEmptyScreen from "../../../Components/OrganizationEmptyScreen/OrganizationEmptyScreen"
import SuperAdminProfile from '../../../Components/SuperAdminProfile/SuperAdminProfile';
// import { ExportToExcel } from '../../../Components/ExportToExcel/ExportToExcel';
// import ImportExcel from '../../../Components/ImportExcel/ImportExcel';
// import PopupService from "../../../Components/PopupService/PopupService";
// import downloadIcon from "../../../Assets/Icons/downloadBtn.png"

// import OrganizationDropDown from '../../../Components/OrganizationDropDown/OrganizationDropDown';
// import { fetchFleetAgencies } from "../../redux/actions/fleetAgencyAction"
// import DeleteUserPopup from "./DeleteUserPopup/DeleteUserPopup";


const ManageGurdAgencies = () => {
    // const fleetAgencyData  = useSelector(state => state.fleetAgencies.fleetAgencies);
    // const dispatch = useDispatch()
    // const [addAgencyPopup, setAddAgencyPopup] = useState(false);
    // const [AgencyDetailsPopup, setAgencyDetailsPopup] = useState(false);
    const [importExcelDetails, setImportExcelDetails] = useState(false);
    const [showNoData, setshowNoData] = useState(true);

    // useEffect(()=>{
    //     if(fleetAgencyData.length === 0)
    //         dispatch(fetchFleetAgencies());
    // },[])


    const handleSelectOrg = (event) => {
        const { value } = event.target
        console.log("selected valued", event.target.value);
        if (value !== '') {
            setshowNoData(false)
        } else {
            setshowNoData(true)

        }
    }

    const columns = [
        {
            Header: 'Name',
            accessor: 'contactName',
            Cell: ({ row, cell: { value } }) => (
                <div className="editline_btn" 
                    // onClick={() => {
                    // setAgencyDetailsPopup(true);
                    // }}
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
                    // onClick={() => {
                    //     // setAgencyDetailsPopup(true);
                    // }}
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
                    // onClick={() => {
                    // setAgencyDetailsPopup(true);
                    // }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Address',
            accessor: 'fleetAgencyAddress',
            Cell: ({ row, cell: { value } }) => (
                <div 
                    // onClick={() => {
                    // setAgencyDetailsPopup(true);
                    // }}
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
                    // onClick={() => {
                    //     setAgencyDetailsPopup(true);
                    // }}
                >
                    {value}
                </div>
            ),
        },
        {
            Header: 'Status',
            accessor: 'Status',
            Cell: ({ cell: { value } }) => (
                <div className="slider_checkbox">
                    <label className="switch">
                        <input type='checkbox' />
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
                        <SuperAdminProfile />
                        <div className="main_heading">
                            <h1>Fleet Agencies</h1>
                        </div>
                        <div className="sub_heading my-4">
                            <div className="date_search">
                                <div className="organization">
                                    <span>Organization</span>
                                    {/* <OrganizationDropDown handleSelect = {handleSelectOrg} /> */}
                                </div>
                                {/* <div div className="add_agency" onClick={() => {
                                    setAddAgencyPopup(true)
                                }} >
                                    <img src={AddIcon} alt="AddIcon" />
                                    <span>Add</span>
                                </div> */}
                                <div className="search_bar">
                                    <span>Search</span>
                                    {/* <input onChange={handleSearchElements} value={[{ou:"jkj"}]} /> */}
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
                        {/* <div className="manage_agency_table">
                            {showNoData ? <OrganizationEmptyScreen /> :
                                <ReactTable columns={columns} data={fleetAgencyData} />}
                        </div> */}
                        {/* <div className="manage_btn" onClick={() => { setDeletePopup(true) }}>
                            <Button title='Delete' />
                        </div> */}
                        {/* <Popup trigger={addAgencyPopup} setTrigger={setAddAgencyPopup}>
                            <AddAgencies />
                        </Popup>
                        <Popup trigger={AgencyDetailsPopup} setTrigger={setAgencyDetailsPopup}>
                            <AgencyDetails />
                        </Popup>
                        <PopupService trigger={importExcelDetails} setTrigger={setImportExcelDetails}>
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
