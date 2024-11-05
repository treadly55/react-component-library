import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const bannerVariant = {
    success: { header: "Congratulations!", icon: faCircleCheck, message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", style:"success"},
    
    warning: {header: "Attention", icon:faTriangleExclamation, message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", style:"warning"},

    error: {header: "There is a problem with your application", icon: faCircleXmark, message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", style:"error"},

    neutral: {header: "Update Available", icon: faCircleInfo, message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", style:"neutral"}
}

export default function Banner({ type, children = null, size }) {
    const config = bannerVariant[type]

    return (        
        <div className={`banner ${config.style}`}>

            <div className="icon-wrapper" style={{color:'var(--highlight-color)'}}>
                <FontAwesomeIcon icon={config.icon} />
            </div>
            <div className="text-wrapper">
                <h4>{config.header}</h4>
                {size === 'large' && <p>{children || config.message}</p>}
            </div>
        </div>
    )
}
