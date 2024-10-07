import React from 'react'
import Service from '../Service'
const servicesData = [
  {
    "title": "Web development",
    "icon": "/image/icon-dev.svg",
    "description": "High-quality development of sites at the professional level."
  },
  {
    "title": "Mobile Development",
    "icon": "/image/icon-app.svg",
    "description": "Professional development of applications for iOS and Android."
  },
  {
    "title": "Mentorship",
    "icon": "/image/mentorship.png",
    "description": "I love helping developers and learners improve their craft."
  },
  {
      "title": "Web Design",
      "icon": "/image/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
  }
]
const About = () => {
  return (
    <div className='about active'>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>
      <section className='about-text'>
        <p> 
          I'm a Computer Science enthusiast from Morocco, working in Software and web development.<br />
          I enjoy problem solving and working with people, and I'm always looking for new challenges and opportunities.<br />
          Feel free to explore my portfolio to discover my latest projects and learn more about my skills and experience in the field.
        </p>
      </section>


      <section className='service'>
        <h2 className='h3 service-title'>What i'm doing</h2>
        <ul className='service-list'>
          {
            servicesData.map((service, index)=>(
              <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default About
