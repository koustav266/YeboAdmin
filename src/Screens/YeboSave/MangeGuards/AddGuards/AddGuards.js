import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
// import DateIcon from "../../../../Assets/Icons/Date_icon.png";
import "./AddGuards.scss";
const AddGuards = () => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="add_guard_section container">
                <h1 className="heading">Add Guards</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="guard_grid my-3">
                            <p>Guard Name</p>
                            <input type="text" style={{ height: 35 }} />
                        </div>
                        <div className="guard_grid my-3" >
                            <p>Mobile no.</p>
                            <input type="text" style={{ height: 35 }} />
                        </div>
                        <div className="guard_grid my-3">
                            <p>Address</p>
                            <textarea
                                name="Note"
                                aria-describedby="helpId"
                                cols="30"
                                rows="2">
                            </textarea>
                        </div>

                        {/* <div className="guard_grid my-4">
                            <p>Guard ID</p>
                            <input type="text" />
                        </div> */}
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="guard_grid my-3">
                            <span>Remarks</span>
                            <textarea
                                name="Note"
                                aria-describedby="helpId"
                                cols="30"
                                rows="2">
                            </textarea>
                        </div>
                        <div className="guard_grid my-3">
                            <span>Email</span>
                            <input type="email" style={{ height: 35 }} />
                        </div>
                    </div>
                </div>

                <div className="verification_details">
                    <h3 className="sub_heading my-4">Verification Details </h3>
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="guard_grid my-3">
                                <p>Police verification date</p>
                                <form action="/action_page.php" className="date__picker">
                                    <input type="date" id="birthday" name="birthday" style={{ height: 35 }} />
                                </form>
                            </div>
                            <div className="guard_grid my-3">
                                <p>Background verification date</p>
                                <form action="/action_page.php" className="date__picker">
                                    <input type="date" id="birthday" name="birthday" style={{ height: 35 }} />
                                </form>
                            </div> */}
                            <div className="col-md-6">
                            </div>
                            <div className="guard_grid my-3">
                                <form>
                                    <div className="form-group my-3">
                                        <p>PVC document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            {/* <div className="guard_grid my-3">
                                <p>Police verification Exp date</p>
                                <form action="/action_page.php" className="date__picker">
                                    <input type="date" id="birthday" name="birthday" style={{ height: 35 }} />
                                </form>
                            </div>
                            <div className="guard_grid my-3">
                                <p>Background verification
                                    Exp date</p>
                                <form action="/action_page.php" className="date__picker">
                                    <input type="date" id="birthday" name="birthday" style={{ height: 35 }} />
                                </form>
                            </div> */}
                            <div className="guard_grid my-3">
                                <form>
                                    <div className="form-group">
                                        <p>BCV document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}

export default AddGuards
