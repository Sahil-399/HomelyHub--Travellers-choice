import React from 'react'
import modal from './Modal'
import { useState } from 'react'
import Modal from './Modal'
const PropertyImg = ({images}) => {
    const [isMOdalOpen, setIsModalOpen] = useState(false);
    const handleShowAllPhotos = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    
  return (
    <>
     <div className='property-img-container'>
        <div className='img-item'>
            <img src={images[0].url} className='images' 
            style={{borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px"}}
            alt="property-1" />
        </div>
        <div>
            <img className='images' src={images[1].url} alt="property" />
        </div>
        <div>
            <img className='images' src={images[2].url} alt="property"/>
        </div>
        <div>
            <img className='images' src={images[3].url} alt="property"/>
        </div>
        <div>
            <img className='images' src={images[5].url}
            style={{borderTopRightRadius:"10px"}}/>
            <button className='similar-photos' onClick={handleShowAllPhotos}>
                <span className='material-symbols-outlined'>photo_library</span>
            </button>
        </div>
    </div>

    <div className='similar-photos-container'></div>
    {isMOdalOpen && <Modal images={images} onClose={handleCloseModal}/>}

    </>
  )
}

export default PropertyImg