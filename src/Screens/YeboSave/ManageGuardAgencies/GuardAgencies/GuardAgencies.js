import React, { useState } from 'react'
import "./GuardAgency.scss";
import AddIcon from "../../../Assets/Icons/Add_Icon.png";
import AddGuardAgencies from "./AddGuardAgencies/AddGuardAgencies";
import Popup from "../../../Components/Popup/Popup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
import EditGuardAgencies from "./EditGuardAgencies/EditGuardAgencies";
import OrganizationEmptyScreen from "../../../Components/OrganizationEmptyScreen/OrganizationEmptyScreen";
const GuardAgencies = () => {
    const [addAgencyPopup, setAddAgencyPopup] = useState(false);
    const [AgencyDetailsPopup, setAgencyDetailsPopup] = useState(false);
    // const [deletePopup, setDeletePopup] = useState(false);
    const [showNoData, setshowNoData] = useState(true);
    const handle_select = (e) => {
        const { value } = e.target
        console.log("selected valued", e.target.value);
        if (value !== '') {
            setshowNoData(false)
        } else {
            setshowNoData(true)

        }
    }
    const data = [
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654428,
            Email: 'abc@gmail.com',
            NoOfGuard: '101',
            Description: '',
            // Status: 'NA',
        },
        {
            Name: 'John Doe',
            Address: 'HSR Layout',
            MobileNumber: 987654431,
            Email: 'abc@gmail.com',
            NoOfGuard: '201',
            Description: '',
            // Status: 'NA',
        },
        {
            Name: 'Henry',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '301',
            Description: '',
            // Status: 'NA',

        },
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '202',
            Description: '',
            // Status: 'NA',

        },
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '204',
            Description: '',
            // Status: 'NA',

        },
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '304',
            Description: '',
            // Status: 'NA',

        },
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '505',
            Description: '',
            // Status: 'NA',

        },
        {
            Name: 'My Profile',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            NoOfGuard: '601',
            Description: '',
            // Status: 'NA',
        },
    ]

    const columns = [
        {
            Header: 'Name',
            accessor: 'Name',
            Cell: ({ row, cell: { value } }) => (
                <div className="editline_btn" onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
                    {value}
                </div>
            ),
        },
        {
            Header: 'Email',
            accessor: 'Email',
            Cell: ({ row, cell: { value } }) => (
                <div onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
                    {value}
                </div>
            ),
        },
        {
            Header: 'Phone number',
            accessor: 'MobileNumber',
            Cell: ({ row, cell: { value } }) => (
                <div onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
                    {value}
                </div>
            ),
        },
        {
            Header: 'Address',
            accessor: 'Address',
            Cell: ({ row, cell: { value } }) => (
                <div onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
                    {value}
                </div>
            ),
        },
        {
            Header: 'No.of Guard',
            accessor: 'NoOfGuard',
            Cell: ({ row, cell: { value } }) => (
                <div onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
                    {value}
                </div>
            ),
        },
        {
            Header: 'Description',
            accessor: 'Description',
            Cell: ({ row, cell: { value } }) => (
                <div onClick={() => {
                    setAgencyDetailsPopup(true);
                }}>
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
    // For Search
    const [FormData, setFormData] = useState(data)
    const [searchfilter, setsearchfilter] = useState('');
    const handleSearchElements = (event) => {
        // console.log("searched value", event.target.value);
        let filterData = [];
        setsearchfilter(event.target.value)
        data.forEach((item) => {
            for (const key in item) {
                if (item[key].toString().toLowerCase().startsWith(event.target.value.toLowerCase())) {
                    filterData.push(item);
                    break;
                }
            }
        })
        console.log(filterData)
        setFormData(filterData);
    }

    return (
        <>
            <div className="manage_agency">
                <div className="d-flex">
                    {/* <Sidebar /> */}
                    <div className="manage_agency_div container py-5">
                        <div className="main_heading">
                            <h1>Guard Agencies</h1>
                        </div>
                        <div className="sub_heading my-4">
                            {/* <h3>Employees</h3> */}
                            <div className="date_search">
                                <div className="organization">
                                    <span>Organization</span>
                                    <select onChange={handle_select} name="shifttype" id="shift">
                                        <option value=""></option>
                                        <option value="week">ABC Org.</option>
                                        <option value="opel">EDF Org.</option>
                                        <option value="opel">GHI Org.</option>
                                    </select>
                                </div>
                                <div div className="add_agency" onClick={() => {
                                    setAddAgencyPopup(true)
                                }} >
                                    <img src={AddIcon} alt="AddIcon" />
                                    <span>Add</span>
                                </div>
                                <div className="search_bar">
                                    <span>Search</span>
                                    <input onChange={handleSearchElements} value={searchfilter} />
                                </div>
                                {/* <Searchbar / >  */}
                                {/* <div className="date_picker">
                                    <span>Date</span>
                                    <form action="/action_page.php">
                                        <input type="date" id="birthday" name="birthday" />
                                    </form>
                                </div> */}
                            </div>
                        </div>
                        <div className="manage_agency_table">
                            {showNoData ? <OrganizationEmptyScreen /> :
                                <ReactTable columns={columns} data={FormData} />}
                        </div>
                        {/* <div className="manage_btn" onClick={() => { setDeletePopup(true) }}>
                            <Button title='Delete' />
                        </div> */}
                        <Popup trigger={addAgencyPopup} setTrigger={setAddAgencyPopup}>
                            <AddGuardAgencies />
                        </Popup>
                        <Popup trigger={AgencyDetailsPopup} setTrigger={setAgencyDetailsPopup}>
                            <EditGuardAgencies />
                        </Popup>
                        {/* <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
                            <DeleteUserPopup />
                        </Popup> */}
                    </div>
                </div>
            </div>
        </>
    )

}

export default GuardAgencies
