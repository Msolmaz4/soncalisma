import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import Header from '../components/Header'

export const CoreLayout = ({ children }) => (  
  
  <div className="container " >
   
   {children}
    </div> 
)
CoreLayout.propTypes = {
  children: PropTypes.node,
}
  
export default CoreLayout
