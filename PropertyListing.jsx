import React from 'react'
import PropertyImg from './PropertyImg'
import "../../css/PropertyListing.css"
import PropertyAmenities from './PropertyAmenities'
import PaymentForm from './PaymentForm'
import PropertyMapInfo from './PropertyMapInfo'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPropertyDetails } from '../../store/PropertyDetails/propertyDetails-action'
import LoadingSpinner from '../LoadingSpinner'
import { useEffect } from 'react'
const PropertyListing = () => {
    const dispatch=useDispatch();
    const {id}=useParams();
    const {propertyDetails, loading}=useSelector((state)=>state.properties);
    useEffect(() => {
  if (id) {
    dispatch(getPropertyDetails(id));
  }
}, [dispatch, id]);

    if(loading || !propertyDetails){
        return (<div className='row justify-content-around mt-5'><LoadingSpinner/>
        </div>);
    }
    const {propertyName, address, images, description, amenities, price, maximumGuest, currentBookings}=propertyDetails;
    return (
    <>
    <div className='property-container'>
        <p className='property-header'>Villa in goa</p>
        <h6 className='property-location'>
            <span className='material-symbols-outlined'>House </span>
            <span className='location'>
                {`${address.area}, ${address.state}, ${address.state}`}
            </span>
        </h6>
        <PropertyImg images={images}/>
        <div className='middle-container row'>
            <div className='des-and-amenities col-md-8 col-sm-12 col-12'>
                <h2 className='property-description-header'>Description</h2>
                <p className='property-description'>{description} <br/><br/> 
                max number of guests:{maximumGuest} <br/>
                </p>
                <hr/>
                <PropertyAmenities amenities={amenities}/>
            </div>
            <div className='payment-payment col-md-4 col-sm-12 col-12'>
                <PaymentForm
                propertyId={id}
                propertyName={propertyName}
                address={address}
                maximumGuest={maximumGuest}
                currentBookings={currentBookings}
                />
            </div>
        </div>
        <hr/>
        <div className='property-map'>
            <div className='map-image-exinfo-container row'>
                <PropertyMapInfo address={address}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default PropertyListing