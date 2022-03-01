import React from 'react'

const FooterButtons = ({onClick, children}) =>
  <button className='FilterButton' onClick={onClick} >{children}</button>

export default FooterButtons