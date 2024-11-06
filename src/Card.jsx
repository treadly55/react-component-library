import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';


export default function Card({ mode = 'light', displayStyle }) {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    return (           
        <div
            className={`card ${mode} ${displayStyle(isHovered)}`} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="icon">
                <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
            <h3 className='card-header'>Easy Deployment</h3>
            <p className='card-text'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </div>
    )
}