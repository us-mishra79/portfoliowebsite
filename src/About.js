import React from 'react';
import web from '../src/img/leon-Oalh2MojUuk-unsplash.jpg'

import Common from './Common';

const About = () =>{
return(
  <>
<Common
    name=" welcome to about page"
    imgsrc = {web}
    visit= "/contact"
    btname = "Contact Now"
/>
</>
)
}

export default About;
