import React from 'react'
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/ExploreSection';
import { restaurants } from '../../data/restaurants';


const deliveryFilters=[
  {
    id:1,
    icon:<i className="fi fi-sr-settings-sliders absolute-center"></i>,
    
    title :'Filters'
  },
  {
    id:2,
    title :'Rating: 4.0+'
  },
  {
    id:3,
    title :'Cuisines',
    
    icon:<i className="fi fi-sr-angle-small-down absolute-center"></i>
  }
];

const restaurantList= restaurants;

const Delivery = () => {
  return (

    <div>
    <div className='max-width'>
      
     <Filters filterList={deliveryFilters}/> 
    </div>
    <DeliveryCollections/>
    <TopBrands/>
    <ExploreSection collectionName='Delivery Restaurants In Bangalore' list={restaurantList}/>
    </div>
  )
}

export default Delivery