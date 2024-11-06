import React from 'react'
import Tag from "./Tag"
import Banner from "./Banner"
import Card from "./Card"
import Testimonial from "./Testimonial"
import TestimonialFeature from "./TestimonialFeature"
import './App.css'

import customLogo from './assets/scrimba-logo.png'
import customPhoto from './assets/celebrity.png'
import customPhotoSml from './assets/celebrity-sml.png'


export default function App() {

  const displayStyle = (isHovered) => (isHovered ? 'hovered' : '');

  return (
    <>
      <div className="title-top">React Components</div>
      <div className="title-small">Tags</div>
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
        <Tag edges="square" type="general">General</Tag>
        <Tag edges="square" type="error">Error</Tag>
        <Tag edges="square" type="alert">Alert</Tag>
        <Tag edges="square" type="success">Success</Tag>
        <Tag edges="square" type="primary">Primary</Tag>
        <Tag edges="square" type="secondary">Secondary</Tag>
        <Tag edges="square" type="teritary">Teritary</Tag>
        <Tag edges="square" type="alternate">Alternative</Tag>
      </div>
      <div className="title-small">Banners</div>
      <div className='banner-row'>
        <Banner type="success" size="large">
          You can add a custom message to this banner or fallback to message that is set within the component
        </Banner>

        <Banner type="success" />
        <Banner type="success" size="large" />
        
        <Banner type="warning" />
        <Banner type="warning" size="large" />

        <Banner type="error" />
        <Banner type="error" size="large" />
        
        <Banner type="neutral" />
        <Banner type="neutral" size="large" />
      </div>

      <div className="title-small">Cards</div>
      <div className="card-row">
        <Card displayStyle={displayStyle} />
        <Card mode="dark" displayStyle={displayStyle} />
      </div>    
          
      <div className="title-small">Testimonials</div>
      <div className="testimonial-row">
        <Testimonial credentials="May Andersons | Workstation CEO">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
        </Testimonial>
        <Testimonial credentials="Pumpkin Bot | Chief Encouragement Officer" logo={customLogo}> 
          “My experience with this company has been second to none, I would highly recommend their cat food and cat treats. The focus on healthy and nutrition is a great touch.”
        </Testimonial>
        </div>

      <div className="title-small">Testimonial Feature</div>
        <div className="testimonial-row-feature">
          <TestimonialFeature credentials="May Andersons | Workstation CEO" />
          <TestimonialFeature photo={customPhoto} photosmall={customPhotoSml} credentials="Bob Belcher | Famous TV Chef">
          I tried their "Rosemary's Baby Burger," and wow it is perfection! The rosemary aioli pairs beautifully with the juicy patty, and the crispy shallots add just the right crunch.
          </TestimonialFeature>
        </div>

        <div className="title-bottom">
          <a href="https://twitter.com/austin_wild" title="Twitter Profile">Contact</a> | <a href="https://github.com/treadly55/react-component-library" title="GitHub Repository">GitHub</a>
        </div>
    </>
  )
}