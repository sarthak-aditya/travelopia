import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Form() {
    const [showNotif, setShowNotif] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "India",
        numberOfTravellers: "",
        budgetPerPerson: ""
    })

    const options = [
        'India', 'Africa', 'Europe'
    ];

    const submit = async () => {
        const res = await axios.post("/api/info/addInfo", {
            ...formData
        })
        if(res.data) {
            if(res.data.success)
                handleClickShowAlert()
        }
    }

    const handleClickShowAlert = () => {
        setShowNotif(true)
        
        setTimeout(() => {
            setShowNotif(false)
        }, 4000);
      }


    return (
        <div className="form-div-container">
            {showNotif && <div className={`notification fade-in-out`}>
                Information Recorded Successfully
            </div>}
            <div className='container'>
                <div className="form-box">
                    <form className="travel-info-form">
                        <h3>Travel Info</h3>
                        <label>Name</label>
                        <div className="form-group">
                            <i className="fas fa-user"></i>
                            <input required={true} value={formData.name} type="text" placeholder='Enter your name' onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <label>Email</label>
                        <div className="form-group">
                            <i className="fas fa-envelope-open" />
                            <input required={true} value={formData.email} type="email" placeholder='Enter your email' onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <label>Location</label>
                        <div className="form-group">
                            <i className="fas fa-map-marker"/>
                            <Dropdown options={options} onChange={(e) => setFormData({...formData, location: e.value})} value={formData.location} placeholder="Select an option" />
                        </div>
                        <label>Number Of Travellers</label>
                        <div className="form-group">
                            <i className="fas fa-users" />
                            <input required={true} value={formData.numberOfTravellers} type="number" placeholder='Enter number of Travellers' onChange={(e) => setFormData({...formData, numberOfTravellers: e.target.value})} />
                        </div>
                        <label>Budget</label>
                        <div className="form-group">
                            <i className="fas fa-dollar-sign" />
                            <input required={true} value={formData.budgetPerPerson} type="number" placeholder='Enter budget per person in USD' onChange={(e) => setFormData({...formData, budgetPerPerson: e.target.value})} />
                        </div>
                        <button disabled={showNotif || (formData.name.length === 0 || formData.email.length === 0 || formData.numberOfTravellers < 1 || formData.budgetPerPerson < 1)} className="submit-btn" onClick={(e) => {
                            e.preventDefault()
                            submit()
                        }} type="submit">Submit</button>
                    </form>
                </div>
                <Link className="nav-links" to="/info">Submissions</Link>
            </div>
        </div>
    )
}

export default Form