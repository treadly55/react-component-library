import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import defaultPhoto from './assets/celebrity-fallback.png';

const testimonialFallback = {
    message: { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}
}


export default function TestimonialFeature({ children, photo, credentials }) {

    const [name, company] = credentials.split("|")
    const config =  testimonialFallback.message

    return (           
        <div className="testimonial-wrapper">
            <div className='testimonial-feature'>
                <div>
                    <img className="testimonial-feature-image" src={photo || defaultPhoto} alt="celebrity name"/>
                </div>
                <div className="testimonial-text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    {children || config.message}
                    <p> 
                    {name}<br /><span className='company'>{company}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}