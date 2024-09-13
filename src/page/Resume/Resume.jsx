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
      </div>
    </section>
  )
}

export default Resume
