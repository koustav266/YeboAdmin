import React, {useEffect, useState} from "react";
import ReactTable from "../../../../Components/ReactTable/ReactTable";
import SearchBox from "../../../../Components/SerachBox/SearchBox";
import DatePicker from "react-datepicker"
import EditInProgressFeedback from "./EditInProgressFeedback/EditInProgressFeedback"; 
import Popup from "../../../../Components/Popup/Popup";



const InProgressFeedback = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [editInProgressFeedbackPopup, setEditInProgressFeedbackPopup] = useState(false);

    const data = [
        {
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000124',
            ReportedOn: 'june 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abc@routematic.com',
            Status: 'closed',
        },
        {
            Ticket: '000125',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abd@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000125',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
        {
            Ticket: '000123',
            ReportedOn: 'May 22, 2021 - 15:34',
            Employee: 'Johndoe88@routematic.com',
            OfficeLocation: 'RM CTC Office',
            Category: 'Issue with Routematic',
            // Rating: '',
            AssignedTo: 'abx@routematic.com',
            Status: 'Open',
        },
    
    
    ]
    
    const columns = [
        {
            Header: 'Ticket',
            accessor: 'Ticket',
            Cell: ({ row, cell: { value } }) => (
                <div className="edit_btn" 
                    onClick={() => {
                        setEditInProgressFeedbackPopup(true);
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
        // {
        //     Header: 'Rating',
        //     accessor: 'Rating',
        //     Cell: ({ cell: { value } }) => (
        //         <Rating onClick={handleRating} ratingValue={rating} size={15} fillColor='#66276e'/* Rating Props */ />
        //     )
        // },
        {
            Header: 'Assigned To',
            accessor: 'AssignedTo'
        },
        {
            Header: 'Status',
            accessor: 'Status'
        },
    
    ]

    return(
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
            <ReactTable columns={columns} data={data} />
            {/* <Popup trigger={editInProgressFeedbackPopup} setTrigger={setEditInProgressFeedbackPopup}>
                <EditInProgressFeedback />
            </Popup> */}
        </div> 
    )
}

export default InProgressFeedback;