import React from 'react'

export default function Card(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.item

  return (
    <div className='cardContainer'>
        <div className="imageContainer">
            <img className='locationImage' src={imageUrl} alt="" />
        </div>
        <div className="detailsContainer">
            <div className="locationContainer">
                <i className="fa-sharp fa-solid fa-location-dot locationIcon"></i>
                <p className='locationTxt'>{location}</p>
                <p className="mapsLinkTxt"><a href={googleMapsUrl} className="mapsLink">View on google maps</a></p>
            </div>
            <h1 className="locationTitle">{title}</h1>
            <p className="datesTxt">{startDate} -    {endDate}</p>
            <p className="descriptionTxt">{description}</p>
        </div>
    </div>
  )
}
