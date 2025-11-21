import React from 'react'
import {Link} from "react-router-dom"
import { DatePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import "../../css/Payment.css"
const PaymentForm = () => {
    const {RangePicker}=DatePicker;
  return (
    <>
    <div className='form-container'>
        <form className='payment-form'>
            <div className='price-and-rating'>
                <span> per night </span>
            </div>
            <div className='payment-field'>
                <div className='date'>
                    <Space direction="vertical" size={12}>
                        <RangePicker format="DD-MM-YYYY" picker='date'/>
                    </Space>
                </div>
            </div>  
        </form>
    </div>
    <div className='guest'>
        <label className='payment-label'>Name of Guests:</label>
        <br/>
        <input type="number" className='no-of-guests' placeholder='Number of Guests'/>
    </div>
    <div className='name-phoneno'>
        <label className='payment-label'>Full Name:</label>
        <br/>
        <input type="text" className='full-name' placeholder='Enter Full Name'/>
        <br/>
        <label className='payment-label'>Phone Number:</label>
        <input type="text" className='phone-number' placeholder='Enter Phone Number'/>
    </div>
    <div className='book-place'>
        <button>
            <Link to={"/login"} style={{textDecoration:"none", color:"white"}}>Login to Book</Link>
        </button>
    </div>
    </>
  )

}

export default PaymentForm