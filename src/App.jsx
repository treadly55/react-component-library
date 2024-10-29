import React from 'react'
import Tag from "./Tag"
import Banner from "./Banner"
import Card from "./Card"
import Testimonial from "./Testimonial"
import TestimonialFeature from "./TestimonialFeature"
import './App.css'

import customLogo from './assets/scrimba-logo.png';
import customPhoto from './assets/celebrity.png';


export default function App() {

  const displayStyle = (isHovered) => (isHovered ? 'hovered' : '');

  return (
    <>
      <div className="title">React Components</div>
      <div className='badge-row'>
      <Tag edges="round" type="general">General</Tag>
      <Tag edges="round" type="error">Error</Tag>
      <Tag edges="round" type="alert">Alert</Tag>
      <Tag edges="round" type="success">Success</Tag>
      <Tag edges="round" type="primary">Primary</Tag>
      <Tag edges="round" type="secondary">Secondary</Tag>
      <Tag edges="round" type="teritary">Teritary</Tag>
      <Tag edges="round" type="alternate">Alternate</Tag>
      </div>
      <div className='badge-row'>
      <Tag edges="square" type="general">Demo</Tag>
      <Tag edges="square" type="error">Demo</Tag>
      <Tag edges="square" type="alert">Demo</Tag>
      <Tag edges="square" type="success">Demo</Tag>
      <Tag edges="square" type="primary">Demo</Tag>
      <Tag edges="square" type="secondary">Demo</Tag>
      <Tag edges="square" type="teritary">Demo</Tag>
      <Tag edges="square" type="alternate">Demo</Tag>
      </div>

      <div className='banner-row'>
      <Banner type="success" size="large">
        This is the message for the success banner that will stretch across the blah
      </Banner>
      <Banner type="success" size="large">
      </Banner>
      <Banner type="success" />
      </div>

      <div className="card-row">
        <Card displayStyle={displayStyle} />
        <Card mode="dark" displayStyle={displayStyle} />
      </div>        
      
      <div className="testimonial-row">

        {/* <Testimonial credentials="May Andersons | Workstation CEO">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
        </Testimonial>

        <Testimonial credentials="Pumpkin Bot | Chief Encouragement Officer" logo={customLogo}> 
          “My experience with this company has been second to none, I would highly recommend their cat food and cat treats. The focus on healthy and nutrition is a great touch.”
        </Testimonial> */}
      

        <TestimonialFeature photo={customPhoto} credentials="Bob Belcher | Famous TV Chef">
        I tried their "Rosemary's Baby Burger," and wow—it's perfection! The rosemary aioli pairs beautifully with the juicy patty, and the crispy shallots add just the right crunch.
        </TestimonialFeature>

        <TestimonialFeature credentials="May Andersons | Workstation CEO">
        </TestimonialFeature>
      </div>

    </>
  )
}