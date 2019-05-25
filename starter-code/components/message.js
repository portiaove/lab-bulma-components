import React from 'react'
import data from '../data/button.props.json'


const Message = (props) => {
  console.log(props)
  const classNameFromData = Object.keys(props).reduce((acc, el) => {
    return data[el] ? `${acc} ${data[el]}` : acc;
    }, classNameFromData)
 return (
  <article class="message">
  <div class="message-header">
    <p>{props.title}</p>
    <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
  {props.children}  </div>
</article>
 
 )
}

export default Message