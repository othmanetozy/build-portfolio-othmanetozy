import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import Timeline from './Timeline'

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <div className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
          <FaBookReader />
          </div>
          <h3 className='h3'>Education</h3>
        </div>
        <ol className='timeline-list'>
          <Timeline 
          title="Moroccan school of engineering sciences"
          date="2019 - 2024"
          description="Systems and Computers Engineering Department."
          />
          <Timeline 
          title=" baccalauréat, spécialité science physique"
          date="2018 - 2019"
          description="science physique."
          />
        </ol>
        <br />
        <div className='title-wrapper'>
          <div className='icon-box'>
          <img src="/image/briefcase.png" alt="" width="24" />
          </div>
          <h3 className='h3'>Experience</h3>
        </div>
        <ol className='timeline-list'>
          <Timeline 
          title="R&D Engineer intern (internship)"
          date="March 2024 - August 2024"
          description={
            <>
              - Implementation of a Web Architecture based on WebSockets and Microservices with WebRTC.<br />
              - Back-end development with Java and Spring Boot.<br />
              - Front-end development in TypeScript with Angular.<br />
              - Automation of Builds and Deployments with Jenkins to Ensure Continuous Integration.
            </>
          }
        />
          <Timeline 
          title=" Software Engineer Intern (internship)"
          date="Jul 2023 - Sep 2023"
          description={
            <>
            - Improvement of the “Gigawhat” project for a new type.<br />
            - Development of the Back-end service with Java based on the Spring Boot framework.<br />
            - Development of Front-end components with Vue.js based on JavaScript.<br />
            </>
          }
          />
          <Timeline 
          title=" Web Developer(internship)"
          date="Jul 2022 - Jull 2022"
          description={
            <>
            </>
          }
          />
        </ol>
      </div>


      <div className='skill'>
          <h3 className='h3 skills-title'>My Skills</h3>
          <ul className='skills-list content'>
          </ul>
      </div>
    </section>
  )
}

export default Resume
