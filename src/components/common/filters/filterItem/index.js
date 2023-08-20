import React from 'react'
import './filterItem.css'

const FilterItem = ({filter}) => {
  return (
    <div className='filter-item absolute-center'>
      {filter.icon&& filter.icon}
      <div className='filter-name'>
        {filter.title}
      </div>
    </div>
    )
}

export default FilterItem

