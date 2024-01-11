import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
export default function Hero() {
  return (
    <div className='hero'>
   <div className='hero-left'>
   <h2>New Arrivals Only</h2>
   <div className='hand-hand-icon'>
     <p>new</p>
     <img src={hand_icon} alt='' />
   </div>
   <div>
     <p>Collections</p>
     <p>For Everyone</p>
   </div>
   <div className='hero-latest-bth'>
    <button>Latest collection </button>
   </div>
   </div>
   <div className='hero-right'>
        <img src={hero_image} alt=''/>
   </div>
    </div>
  )
}

