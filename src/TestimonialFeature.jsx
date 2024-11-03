import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import defaultPhoto from './assets/celebrity-fallback.png'
import defaultPhotoSml from './assets/celebrity-fallback-sml.png'

const testimonialFallback = {
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

export default function TestimonialFeature({ children, photo, photosmall, credentials }) {
  const [name, company] = credentials.split("|")
  const config = testimonialFallback.message
  
  const [screenSize, setScreenSize] = useState(window.innerWidth < 630 ? 'small' : 'large')

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth < 630 ? 'small' : 'large')
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  
  return (
      <div className='testimonial-feature'>
        <img 
        className="testimonial-feature-image" 
        src={ screenSize === 'large' ? (photo || defaultPhoto) : (photosmall || defaultPhotoSml)}
        alt="celebrity name"
        />
        <div className="testimonial-text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          {children || config}
          <p>
            {name}<br /><span className='company'>{company}</span>
          </p>
        </div>
      </div>
  )
}