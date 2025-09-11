import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {MENU_API,CDN_URL} from './constants'

const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    const {id} = useParams(); 
    
    console.log(id)

    const fetchMenu = async()=>{
      const data = await fetch(MENU_API+id);
      const json = await data.json();
      console.log(json.data.cards);
      // const resdetails = json?.data?.cards.find((e)=>{
      //   return e?.card?.card?.info
      // })
      setResInfo(json.data.cards);
    }
    // console.log(resInfo)

    useEffect(()=>{
      fetchMenu()
    },[]);
    
if (resInfo === null) return <p>loading....</p>;

    const{
      name,cuisines,costForTwo,costForTwoMessage,cloudinaryImageId,avgRating
    }= resInfo[2]?.card?.card?.info;

    const {deliveryTime} = resInfo[2]?.card?.card?.info?.sla; 

  return (
    <div className='menu'>
      <header className='menu-header'>
        <div className="menu-header-left">
          <img src={CDN_URL+cloudinaryImageId} alt="restaurant info" />
        </div>

        <div className='menu-header-right'>
          <div className='menu-header-right'>
            <div className='top'>
              <h1>{name}</h1>
              <h3>{cuisines.join(', ')}</h3>
            </div>

            <div className="bottom">
              <h4 className='avg-rating'>
                <span className='icons' style={{position:'relative',top:'2px',marginRight:'3px'}}></span>
                <span>{avgRating}</span>
              </h4>
              <h4 className='time'>
                <span className='icons' style={{position:'relative',top:'2px',marginRight:'3px'}}></span>
                <span>{deliveryTime} MINS</span>
                
              </h4>
              <h3>{costForTwoMessage}</h3>
            </div>
          </div>
        </div>
      </header>
     
    </div>
  )
}

export default RestaurantMenu
