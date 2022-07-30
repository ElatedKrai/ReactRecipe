import React from 'react'
import '../footer_block/stylefooter_block.css'

function Block(props)
{
   return (
      <div>
         <div className='title-block'>
            <h6>{props.title}</h6>
         </div>
         <div className='list-block'>
            <ul>
               <li> <a href={props.firstLink}>{props.firstName}</a></li>
               <li><a href={props.secondLink}>{props.secondName}</a></li>
               <li><a href={props.thirdLink}>{props.thirdName}</a></li>
               <li><a href={props.fourLink}>{props.fourName}</a></li>
               <li><a href={props.fivethLink}>{props.fivethName}</a></li>
               <li><a href={props.sixthLink}>{props.sixthName}</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Block;