import React, { useState } from 'react'
import "./TicketPopup.scss";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import { Rating } from 'react-simple-star-rating';
const TicketPopup = () => {
    const [rating, setRating] = useState() // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    return (
        <>
            <div className="Pending_ticket_section">
                <div className="ticket_details container">
                    <h1 className="heading">Pending Ticket</h1>
                    <h5>Ticket # 00011098</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ticket_grid my-3">
                                <p>Raised On</p>
                                <p>23-03-2021</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Reopens On</p>
                                <p>02-06-2021</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Category</p>
                                <p>Medium</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Issue</p>
                                <p>Medium</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Ratings</p>
                                <Rating onClick={handleRating} ratingValue={rating} size={15} fillColor='#66276e'/* Rating Props */ />
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Office</p>
                                <p>HSR Layout</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ticket_grid my-3">
                                <p>Trip ID</p>
                                <p>XC090989</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Vendor</p>
                                <p>ABC Agency</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Vehicle</p>
                                <p>SUV</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Driver</p>
                                <p>Male</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ticket_grid my-3">
                                <p>Shift Date</p>
                                <p>23-03-2021</p>
                                {/* <div className="date_picker">
                                <form action="/action_page.php">
                                    <input type="date" id="birthday" name="birthday" />
                                </form>
                            </div> */}
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Trip Type</p>
                                <p>Moderate</p>
                            </div>
                            <div className="ticket_grid my-3">
                                <p>Service Type</p>
                                <p>High</p>
                            </div>
                        </div>
                    </div>
                    <div className="addagency-btns">
                        <Button title='Cancel' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketPopup
