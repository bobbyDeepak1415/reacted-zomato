import React from 'react'
import "./diningOut.css"
import Collection from '../common/collection'
import { diningOut } from '../../data/diningOut';
import Filters from '../common/filters';
import ExploreSection from '../common/ExploreSection';


const collectionList=[

  {
    id:1,
    title:"10 Places For Onam Celebrations",
    cover:'https://b.zmtcdn.com/data/collections/a70d7021ee58db56864d1edd46d838c8_1692342843.png',
    places:'10 places'
  },
  {
    id:2,
    title:"23 Serene Rooftop Places",
    cover:'https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg',
    places:'24 places'
  },
  {
    id:3,
    title:"11 Newly Opened Restaurants",
    cover:'https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg',
    places:'7 places'
  },
  {
    id:4,
    title:"10 Trending Restaurants",
    cover:'https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg',
    places:'9 places'
  },
  {
    id:5,
    title:"13 Romantic Dining Places",
    cover:'https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg',
    places:'14 places'
  },
  {
    id:6,
    title:"Winners of Zomato Restaurant Awards 2023",
    cover:'https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg',
    places:'17 places'
  },
  {
    id:7,
    title:"22 Finest MicroBreweries",
    cover:'https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg',
    places:'20 places'
  },
  {
    id:8,
    title:"11 Must-Visit Legendary-places",
    cover:'https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120193.jpg',
    places:'11 places'
  },
];

const diningOutFilters=[
  {
    id:1,
    icon:<i className="fi fi-sr-settings-sliders absolute-center"></i>,
    title :'Filters'
  },
  {
    id:2,
    title :'Gold'
  },
  {
    id:3,
    title :'Rating: 4.0+',
    
  },
  {
    id:4,
    title :'Outdoor Seating',
    
  },
  {
    id:5,
    title :'Serves Alcohol',
  },
    {
      id:6,
      title :'Open Now',
      
    }
  
];

const diningList=diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>

<Filters filterList={diningOutFilters}/>
      </div>
      <ExploreSection collectionName='Trending Dining Restaurants In Bangalore' list={diningList}/>
    </div>
  )
}

export default DiningOut