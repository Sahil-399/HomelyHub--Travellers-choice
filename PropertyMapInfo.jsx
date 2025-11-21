import React from 'react'
import MapComponent from './MapComponent'
const PropertyMapInfo = () => {
  return (
    <>
    <div className='map-image-container col-md-6 col-sm-12 co-12'>
      <h2 className='map-header'>Where you'll be</h2>
      <MapComponent address={address}/>
    </div>
    <div className='extra-info-container col-md-6 col-sm-12 col-12'>
      <h2 className='extra-info-header'>Extra Information</h2>
      <p className='extra-info'>Check in time is 1pm, early or late checkouts is permitted.</p>
    </div>
    </>
  )
}

export default PropertyMapInfo