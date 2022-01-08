import React, { useMemo, useState } from 'react'
import "./ClosedFeedback.scss";
import ReactTable from "../../../../Components/ReactTable/ReactTable";
import SearchBox from '../../../../Components/SerachBox/SearchBox';
// import StarRating from 'react-star-rating';
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Popup from '../../../../Components/Popup/Popup';
import EditInClosedFeedbacks from './EditInClosedFeedbacks/EditInClosedFeedbacks';


const ClosedFeedbacks = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [editInClosedFeedbacksPopup, setEditInClosedFeedbacksPopup] = useState(false)
    const [filterInput, setFilterInput] = useState("");
    const [filter, setFilter] = useState("");
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("employee", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
    };
    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    const data = [
        {
            Id: 1,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'don88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 2,
            Ticket: '100123',
            ReportedOn: 'june 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 3,
            Ticket: '200123',
            ReportedOn: 'Aug 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 4,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 5,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 6,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 7,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 8,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 9,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 10,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },
        {
            Id: 11,
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'samules88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            Vendor: '',
            Vehicle: '',
            Driver: '',
            ClosedBy: 'abx@routematic.com',
            Reopens: '',
        },

    ]

    const columns = useMemo(
        () => [
            {
                Header: 'Ticket',
                accessor: 'Ticket',
                Cell: ({ row, cell: { value } }) => (
                    <div className="edit_btn" 
                        onClick={() => {
                            setEditInClosedFeedbacksPopup(true);
                        }}>
                        {value}
                    </div>
                )
            },
            {
                Header: 'Reported On',
                accessor: 'ReportedOn'
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
                Header: 'Category',
                accessor: 'Category'
            },
            {
                Header: 'Rating',
                accessor: 'Rating',
                id: "id",
                Cell: ({ cell: { value } }) => (
                    <Rating onClick={handleRating} ratingValue={rating} size={15} fillColor='#66276e'/* Rating Props */ />
                )

            },
            // {
            //     Header: 'Vendor',
            //     accessor: 'Vendor'
            // },
            // {
            //     Header: 'Vehicle',
            //     accessor: 'Vehicle'
            // },
            // {
            //     Header: 'Driver',
            //     accessor: 'Driver'
            // },
            {
                Header: 'Closed By',
                accessor: 'ClosedBy'
            },
            // {
            //     Header: 'Reopens',
            //     accessor: 'Reopens'
            // },

        ]
    )
    const [FormData, setFormData] = useState(data)
  

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
                    <Popup trigger={editInClosedFeedbacksPopup} setTrigger={setEditInClosedFeedbacksPopup}>
                        <EditInClosedFeedbacks />
                    </Popup>
            </div>
           
        </>
    )
}

export default ClosedFeedbacks
