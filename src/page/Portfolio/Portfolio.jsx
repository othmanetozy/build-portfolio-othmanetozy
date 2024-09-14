import React, { useEffect, useState } from 'react'

const Portfolio = () => {
    const [projects, setprojects] = useState([]);
    const [filterProjects , setfilterProjects] = useState([])
    const [selectCategory, setselectCategory] = useState('All') 

    useEffect(()=>{
        fetch('projects.json').then(res => res.json()).then(data=>{
            setprojects(data);
            setfilterProjects(data);
        })
    })


  return (
   <section>
    <header>
        <h2 className='h2 article-title'>Portfolio</h2>
    </header>
    <ul>
        <ul className='filter-list'>
            {['All','Web Development','ReactJs','AngularJs','Loading...'].map(category =>(
                <li key={category} className='filter-item'>
                    <button className={category ===selectCategory ? 'active' : ''}>{category}</button>
                </li>
            ))}
        </ul>
    </ul>


    <section className='projects'>
            <ul className='project-list'>
                {
                    filterProjects.map(project => (
                        <li key={project.id} className='project-item active'>
                            <a href="#">
                                <figure className='project-img'>
                                    <img src={project.image} alt="" />
                                </figure>
                            </a>
                        </li>
                    ))
                }
            </ul>
    </section>

   </section>
  )
}

export default Portfolio
