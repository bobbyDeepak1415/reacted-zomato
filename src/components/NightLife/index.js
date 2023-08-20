import React from 'react'
import "./nightLife.css";
import { nightLife } from '../../data/nightLife';
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/ExploreSection';



const collectionList=[

  
  {
    id:1,
    title:"22 Finest MicroBreweries",
    cover:'https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg',
    places:'20 places'
  },
  {
    id:2,
    title:"19 Best Bars And Pubs",
    cover:'https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg',
    places:'20 places'
  }
];



const nightLifeFilters=[
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
    title :'Distance',
    icon:<i class="fi fi-sr-arrow-up-right-and-arrow-down-left-from-center"></i>
    
  },
  {
    id:4,
    title :'Rating: 4.0+',
    
  },
  {
    id:5,
    title :'Pubs & Bars',
  }
];

const nightLifeList=nightLife;
const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>

<Filters filterList={nightLifeFilters}/>

      </div>
      <ExploreSection collectionName='Night Life Restaurants In Bangalore' list={nightLifeList}/>
    </div>
  )
}

export default NightLife