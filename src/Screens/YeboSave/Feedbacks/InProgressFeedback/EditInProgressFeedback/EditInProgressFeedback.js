import React, { useState } from 'react'
import "./EditInProgressFeedback.scss";
import Button from "../../../../../Components/GlobalComponents/Buttons/Button";
import EditIcon from "../../../../../Assets/Icons/Edit_Icon.png";
import { Rating } from 'react-simple-star-rating';
import { editGuardAgencies } from '../../../../../Services/ApiServices/editGuardAgencies';

const EditInProgressFeedback = () => {
    const [editFeedback, setEditFeedback] = useState(false);
    const [rating, setRating] = useState() // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    return (
        <>
            <div className="Pending_ticket_section">
                <div className="ticket_details">
                    <div className='headingEdit'>
                        <h1 className="heading">Appreciation Ticket</h1>
                        {!editFeedback && <div className="edit_icon" onClick={() => {
                            setEditFeedback(true);
                        }} >
                            <img src={EditIcon} alt="EditIcon" />
                        </div>}
                    </div>
                    
                    <div className="ticket-grid">
                        <div className="grid-column">
                            <div className="ticket_item">
                                <p>Ticket No.</p>
                                <p>Ticket # 00011098</p>
                            </div>
                            <div className="ticket_item">
                                <p>Raised On</p>
                                <p>03-03-2021</p>
                            </div>
                            <div className="ticket_item">
                                <p>Agency</p>
                                <p>ABC. Agency</p>
                            </div>
                            <div className="ticket_item">
                                <p>Guard</p>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <div className="grid-column">
                            <div className="ticket_item">
                                <p>Issue</p>
                                <p>XC090989</p>
                            </div>
                            <div className="ticket_item">
                                <p>Raiting</p>
                                <p>ABC Agency</p>
                            </div>
                            <div className="ticket_item">
                                <p>Feedback</p>
                                <p>SUV fewf ewfewfjf fewhoifew fewihfew fewifewfew fewoihfew.fejpiew</p>
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="ticket_item my-3">
                                <p>Shift Date</p>
                                <p>23-03-2021</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Trip Type</p>
                                <p>Moderate</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Service Type</p>
                                <p>High</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="addagency-btns">
                        <Button title={"Save"} />
                        <Button title={'Cancel'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditInProgressFeedback;