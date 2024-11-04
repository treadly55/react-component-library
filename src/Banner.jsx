import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const bannerVariant = {
    success: { header: "Congratulations!", icon: faCircleCheck, message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.", style:"frog"},

    fail: {header: "Fail", icon: "🥶", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
}




export default function Banner({ type, children = null, size }) {

    const config = bannerVariant[type]

    return (        
            <div className="banner" style={{ backgroundColor: `var(--${config.style}-bg)`, color: `var(--${config.style}-text)`}}>
            <div className="icon-wrapper" style={{color: `var(--${config.style}-highlight)`}}><FontAwesomeIcon icon={config.icon} /></div>
            <div className="text-wrapper">
                <h4>{config.header}</h4>
                {size === 'large' && <p>{children || config.message}</p>}
            </div>
        </div>
    )
}
