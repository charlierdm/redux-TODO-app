import React from 'react'
import FilterButtons from '../container/FilterButtons'
import {actionTypes} from '../actions'

const Footer = () => (
  <div>
    <FilterButtons filter={actionTypes.SHOW_ALL}>
      Show All
    </FilterButtons>
    <FilterButtons filter={actionTypes.SHOW_ACTIVE}>
      Show Active
    </FilterButtons>
    <FilterButtons filter={actionTypes.SHOW_COMPLETED}>
      Show Completed
    </FilterButtons>
  </div>
)

export default Footer