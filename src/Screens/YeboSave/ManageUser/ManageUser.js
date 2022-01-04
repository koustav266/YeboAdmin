import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "./ManageUser.scss";
import ReactTable from "../../../Components/ReactTable/ReactTable";
import SuperAdminProfile from "../../../Components/SuperAdminProfile/SuperAdminProfile";
import { fetchUsers } from '../../../redux/actions/userAction';
import { showLoader, hideLoader } from '../../../redux/actions/loaderAction';
import SearchBox from "../../../Components/SerachBox/SearchBox"

const ManageUser = () => {
    const users  = useSelector(state => state.allUsers.users);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(async() => {
        if(users && users.length === 0){
            dispatch(showLoader());
            await dispatch(fetchUsers());
            dispatch(hideLoader())
        }
    },[]);

    useEffect(()=>{
        setData(users)
    },[users])

    const columns = [
        {
            Header: ' Name',
            accessor: 'userFullName',
            Cell: ({ row, cell: { value } }) => (
                <div className="editemp_btn">
                    {value}
                </div>
            ),
        },{
            Header: 'Mobile No',
            accessor: 'mobileNo',
            Cell: ({ row, cell: { value } }) => (
                <div>
                    {value}
                </div>
            ),
        },{
            Header: 'Email',
            accessor: 'emailId',
            Cell: ({ row, cell: { value } }) => (
                <div>
                    {value}
                </div>
            ),
        },{
            Header: 'Addresh',
            accessor: 'address1',
            Cell: ({ row, cell: { value } }) => (
                <div>
                    {value}
                </div>
            ),
        },{
            Header: 'Distance(KM)',
            accessor: 'Distance',
            Cell: ({ row, cell: { value } }) => (
                <div>
                    {value}
                </div>
            ),
        },
    ]

    return (
        <>
            <div className="manageuser">
                <div className="d-flex">
                    <div className="manageuser_div container">
                        <div className="main_heading">
                            <h1>Manage Users</h1>
                            <SuperAdminProfile />
                        </div>
                        <div className="sub_heading my-4">
                            <div className="date_search">
                                <div className="search_bar">
                                    <span>Search</span>
                                    <SearchBox 
                                        data={users} 
                                        setData={setData} 
                                        elements={[
                                            "userFullName",
                                            "mobileNo",
                                            "emailId"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="manageuser_table">
                            <ReactTable columns={columns} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ManageUser
