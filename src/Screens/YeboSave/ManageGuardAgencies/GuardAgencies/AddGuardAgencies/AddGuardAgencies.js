import React from 'react'
import "./AddGuardAgencies.scss";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
// import GoogleMap from '../../../Components/GoogleMaps/GoogleMap';

const AddGuardAgencies = () => {
    return (
        <>
            <div className="add_guard_agency container">
                <h1 className="heading">Add Guard Agency</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="agency_grid my-2">
                            <p>Organization Name<span className="text-danger">*</span></p>
                            <input type="text" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            <input type="text" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            <input type="text" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Phone Number<span className="text-danger">*</span></p>
                            <input type="text" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Email<span className="text-danger">*</span></p>
                            <input type="email" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Descipration</p>
                            <textarea
                                name="Note"
                                aria-describedby="helpId"
                                cols="30"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="agency_grid my-2">
                            <form>
                                <div className="form-group">
                                    <p style={{ width: ' 60%' }}>Upload document/ images</p>
                                    <input type="file" name="name" className="form-control-file" id="exampleFormControlFile1" multiple="multiple" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="agency_grid my-2">
                            <p>Latitude</p>
                            <input type="email" />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Longitude</p>
                            <input type="email" />
                        </div>
                        {/* <div className="agency_map">
                            <GoogleMap />
                        </div> */}
                    </div>
                </div>
                {/* <div className="banking_details">
                    <h3 className="sub_heading my-3">Banking Details</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="agency_grid my-2">
                                <p>Bank Name</p>
                                <input type="text" style={{ height: 40 }} />
                            </div>
                            <div className="agency_grid my-2">
                                <p>IFSC code</p>
                                <input type="text" style={{ height: 40 }} />
                            </div>
                        </div>
                        <div className="col-md-5 offset-1">
                            <div className="agency_grid my-2">
                                <span>Acc No.</span>
                                <input type="text" style={{ height: 40 }} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="addagency-btns">
                    <Button title='Save' />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}

export default AddGuardAgencies
