import React from 'react'
import './Radio.css';
import { Heart } from './Heart';


const Radio = ({image, name, url}) => {
  return (
    <div className='radio'>
        
        <Heart />
        <img  className='radio_img'  src={image} alt='logo radio'/>
        <h2 className='radio_name' >{name}</h2>
        <audio className='radio_audio' src={url} controls/>
    </div>
  )
}

export {Radio}