import React, { useState } from 'react'
import "./ManageGuards.scss";
// import Button from "../../Components/GlobalComponents/Buttons/Button";
import AddIcon from "../../../Assets/Icons/Add_Icon.png";
// import AddGuards from "../MangeGuards/AddGuards/AddGuards";
import Popup from "../../../Components/Popup/Popup";
// import EditIcon from "../../Assets/Icons/Edit_Icon.png";
// import DeleteGuardPopup from "./DeleteGuardPopup/DeleteGuardPopup";
import ReactTable from "../../../Components/ReactTable/ReactTable";
// import Searchbar from "../../Components/SearchBar/Searchbar";
// import EditGuardPopup from './EditGuardPopup/EditGuardPopup';

const ManageGuards = () => {
    const [addAgencyPopup, setAddAgencyPopup] = useState(false);
    // const [deletePopup, setDeletePopup] = useState(false);
    // const [searchfilter, setSearchfilter] = useState('');
    // const [data, setdata] = useState()
    const [editGuardPopup, setEditGuardPopup] = useState(false);
    const [employDetails, setEmployDetails] = useState({});
    // useEffect(() => {
    //     setEditGuardPopup(true)
    //     if (
    //         employeeDetails
    //         && Object.keys(employeeDetails).length !== 0
    //         && Object.getPrototypeOf(employeeDetails) === Object.prototype
    //     ) { setEditGuardPopup(true) }
    // }, [employeeDetails])

    const data = [
        {
            id: 1,
            Name: 'John Doe',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '321',
            Description: '',
            Status: 'NA',
        },
        {
            Name: 'Harrison',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '101',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Angela',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '984',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Lori',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '875',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Tasha',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '754',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Carey',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '238',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Harrison',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '434',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'John Doe',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '555',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Lori',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '965',
            Description: '',
            Status: 'NA',

        },
        {
            Name: 'Angela',
            Address: 'HSR Layout',
            MobileNumber: 987654321,
            Email: 'abc@gmail.com',
            GuardID: '675',
            Description: '',
            Status: 'NA',

        },
    ]
    const columns = [
        {
            Header: 'Name',
            accessor: 'Name',
            Cell: ({ row, cell: { value } }) => (
                <div className="edit_btn" onClick={() => {
                    setEditGuardPopup(true)
                }}>
                    {value}
                </div>
            )
        },
        {
            Header: 'Address',
            accessor: 'Address',
        },
        {
            Header: 'Mobile number',
            accessor: 'MobileNumber'
        },

        {
            Header: 'Email',
            accessor: 'Email'
        },
        {
            Header: 'Guard ID',
            accessor: 'GuardID'
        },
        {
            Header: 'Description',
            accessor: 'Description'
        },
        {
            Header: 'Status',
            accessor: 'Status'
        },
        {
            Header: 'Active/Inactive',
            accessor: 'Active',
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
        // {
        //     Header: 'Action',
        //     accessor: 'Action',
        //     id: "id",
        //     Cell: ({ row }) => (
        //         <button className="edit_btn" onClick={() => {
        //             setEmployDetails(row.original);
        //             setEditGuardPopup(true)
        //         }}>
        //             <img src={EditIcon} alt="" />
        //         </button>
        //     )
        // }

    ]

    // const handlepopup = (e) => {
    //     console.log('event', e);
    // }

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
            <div className="manage_guard">
                <div className="d-flex">
                    <div className="manage_guard_div container py-5">
                        <div className="main_heading">
                            <h1>Guards</h1>
                        </div>
                        <div className="sub_heading my-4">
                            {/* <h3>Agency Name - # 211211211211</h3> */}
                            <div className="date_search">
                                <div className="organization">
                                    <span>Organization</span>
                                    <select name="shifttype" id="shift">
                                        <option value=""></option>
                                        <option value="week">All</option>
                                        <option value="opel">Branch1</option>
                                        <option value="opel">Branch2</option>
                                    </select>
                                </div>
                                <div div className="add_agency">
                                    <img src={AddIcon} alt="AddIcon" onClick={() => {
                                        setAddAgencyPopup(true)
                                    }} />
                                    <span>Add</span>
                                </div>
                                <div className="search_bar">
                                    <span>Search</span>
                                    <input onChange={handleSearchElements} value={searchfilter} />
                                </div>
                            </div>
                        </div>
                        <div className="manage_agency_table">
                            <ReactTable columns={columns} data={FormData} />
                        </div>
                        {/* <div className="manage_btn" onClick={() => { setDeletePopup(true) }}>
                            <Button title='Delete' />
                        </div> */}
                        {/* <Popup trigger={addAgencyPopup} setTrigger={setAddAgencyPopup}>
                            <AddGuards />
                        </Popup>
                        <Popup trigger={editGuardPopup} setTrigger={setEditGuardPopup}  >
                            <EditGuardPopup employDetails={employDetails} />
                        </Popup> */}
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
