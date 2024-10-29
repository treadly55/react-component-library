import React from 'react'
import defaultLogo from './assets/work-logo.png';


export default function Testimonial({ children, logo, credentials }) {
    
    const [name, company] = credentials.split('|')

    return (           
        <div className='testimonial'>
            <img src={logo || defaultLogo} alt="Logo" />
            <p>{children}</p>
            <p className='testimonial-credentials'> 
                {name} 
                <span className='testimonial-dash'>/</span> 
                <span className='company'> {company} </span> 
            </p>
            <div className='pattern'></div>
        </div>
    )
}
