import React, { useEffect,useState } from 'react'
import RestaurantCard from './RestaurantCard';
const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        const cards = json?.data?.cards;
        // console.log(cards)
        const restaurantCard = cards.find((c)=>{
          return c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        })

        // console.log(restaurantCard)

        setListOfRestaurant(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    console.log(listOfRestaurant)
    

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='body'>

      <div className='res-container'>
       <RestaurantCard resData = {listOfRestaurant}/>
      </div>
      
    </div>
  )
}

export default Body
