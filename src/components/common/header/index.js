import React from 'react'
import "./header.css";


const Header = () => {
  return (
    <div className='max-width header'>
      <img
src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'

className='header-logo'
alt='Zomato-logo'/>

<div className='header-right'>
  <div className='header-location-search-component'>
    <div className='location-wrapper'>
      <div className='location-icon-name'>
      <i className="fi fi-sr-marker absoute-center location-icon"></i>
 <div>Devgiri</div>

    </div>
    <i className="fi fi-sr-caret-down absolute-center"></i>
    </div>
    <div className='location-search-seperator'></div>
    <div className='header-searchBar'>
    <i className="fi fi-sr-search absolute-center search-icon"/>
    
    
    <input placeholder='Search for a restaurant, cuisine or a dish'
    className='searchBar-input'/>
    </div>
  </div>
  <div className='profile-wrapper'>
     <img 
     src='https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
     alt='Profile'
     className='header-profile-icon'
    />
    
    
    <span className='header-username'>Jimmy</span>
    <i className="fi fi-sr-angle-small-down absolute-center profile-list-icon"></i>
  </div>
</div>
</div>
      
      )
    }
    
    
    export default Header










