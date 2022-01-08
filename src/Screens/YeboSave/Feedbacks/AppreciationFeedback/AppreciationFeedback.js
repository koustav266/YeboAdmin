import React, { useState } from 'react'
import "./AppreciationFeedback.scss";
import ReactTable from "../../../../Components/ReactTable/ReactTable";
import EditAppreciationFeedback from './EditAppreciationFeedback/EditAppreciationFeedback';
import Popup from '../../../../Components/Popup/Popup';
// import ClosedFeedbacks from "./ClosedFeedback/ClosedFeedbacks";
import { Rating } from 'react-simple-star-rating'
import SearchBox from "../../../../Components/SerachBox/SearchBox"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppreciationFeedback = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [rating, setRating] = useState(0) // initial rating value
    const [editAppreciationPopup, setEditAppreciationPopup] = useState(false);
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    const data = [
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'June 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Danny',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'Aug 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Arnold',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },
        {
            Date: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Vendor: 'DB Vendor',
            // Rating: '',
            Vehicle: 'OR 05 1235',
            Driver: 'Jonh Doe',
            Comments: 'Lorem Ipsum',
        },

    ]

    const columns = [
        {
            Header: 'Date',
            accessor: 'Date',
            Cell: ({ row, cell: { value } }) => (
                <div className="edit_btn" onClick={() => {
                    setEditAppreciationPopup(true);
                }}>
                    {value}
                </div>
            )
        },
        {
            Header: 'Employee',
            accessor: 'Employee'
        },

        {
            Header: 'Office Location',
            accessor: 'OfficeLocation'
        },
        {
            Header: 'Rating',
            accessor: 'Rating',
            Cell: ({ cell: { value } }) => (
                <Rating onClick={handleRating} ratingValue={rating} size={15} fillColor='#66276e'/* Rating Props */ />
            )
        },
        {
            Header: 'Vendor',
            accessor: 'Vendor'
        },
        {
            Header: 'Vehicle',
            accessor: 'Vehicle'
        },
        {
            Header: 'Driver',
            accessor: 'Driver'
        },
        {
            Header: 'Comments',
            accessor: 'Comments'
        },

    ]
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
            <div className="manage_agency_table">
                <div className="datePicker-searchbar">
                
                    <div className="date_picker">
                                    <span>Date</span>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                                    <span>To</span>
                        <DatePicker selected={toDate} onChange={(date) => setToDate(date)} dateFormat="dd/MM/yyyy" />
                    </div> 
                    <div className="search_bar">
                        <span>Search</span>
                            <SearchBox />
                    </div>
                </div>
                <ReactTable columns={columns} data={FormData} />
                <Popup trigger={editAppreciationPopup} setTrigger={setEditAppreciationPopup}>
                    <EditAppreciationFeedback />
                </Popup>
            </div>
            
        </>
    )
}

export default AppreciationFeedback
