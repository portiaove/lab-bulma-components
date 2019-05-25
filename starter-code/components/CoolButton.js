import React from 'react';
import data from '../data/button.props.json'

const CoolButton = (props) => {
  const {isSmall, isDanger, className, isSuccess, children} = props;
  const classNameFromData = Object.keys(props).reduce((acc, el) => {
  return data[el] ? `${acc} ${data[el]}` : acc;
  }, className)

  
  // const classNameString = `
  //   button 
  //   ${className} 
  //   ${data.key ? 'data.value' : ''}`

  return (
    <div>
      <button className={`button is-small ${classNameFromData}`}>{props.children}</button>
    </div>
  )
}

export default CoolButton