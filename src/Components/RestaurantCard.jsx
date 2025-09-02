import React from 'react'

const RestaurantCard = ({resData}) => {
    const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    } = resData?.info
  return (
    <div className='res-card'>
      <img className='res-logo' src="" alt=""/>

      <div className='res-card-content'>
        <h3></h3>
      </div>
    </div>
  )
}

export default RestaurantCard
