import React from 'react'

const FilterButtons = () => {

  return (
    <div className='FilterButtonWrapper'>
      <button className='FilterButton'>Show Active</button>
      <button className='FilterButton'>Show Completed</button>
      <button className='FilterButton'>Clear Completed</button>
    </div>
  )
}

export default FilterButtons