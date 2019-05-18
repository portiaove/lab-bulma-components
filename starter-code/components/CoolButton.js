import React from 'react';
import data from '../data/button.props'

const CoolButton = (props) => {
  const {isSmall, isDanger, className, isSuccess, children} = props;

  const classNameFromData = Object.keys(props).reduce((acc, el) => {
    return data[el] ? `${acc} ${data[el]}` : acc;
  }, className)

  
  const classNameString = `
    button 
    ${className} 
    ${data.key ? 'data.value' : ''}`

  return(
     <h1> button </h1>
    // <button className={`button is-small ${className}`}>{text}</button>
  )
}

export default CoolButton