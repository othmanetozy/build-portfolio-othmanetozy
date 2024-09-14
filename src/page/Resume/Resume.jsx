import React from 'react';
import { FaBookReader, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaGitlab, FaJenkins, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiBootstrap, SiRedux, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiSpringboot, SiPython, SiPostgresql, SiMysql, SiApachekafka, SiRabbitmq, SiFigma, SiPostman } from 'react-icons/si';
import Timeline from './Timeline';
import { DiJqueryLogo } from 'react-icons/di';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={30} color="#feb824" /> },
  { name: 'CSS', icon: <FaCss3Alt size={30} color="#feb824" /> },
  { name: 'JavaScript', icon: <FaJs size={30} color="#feb824" /> },
  { name: 'TypeScript', icon: <SiTypescript size={30} color="#feb824" /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={30} color="#feb824" /> },
  { name: 'React.js', icon: <FaReact size={30} color="#feb824" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={30} color="#feb824" /> },
  { name: 'Redux', icon: <SiRedux size={30} color="#feb824" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} color="#feb824" /> },
  { name: 'jQuery', icon: <DiJqueryLogo size={30} color="#feb824" /> },
  { name: 'Angular', icon: <FaAngular size={30} color="#feb824" /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} color="#feb824" /> },
  { name: 'Express.js', icon: <SiExpress size={30} color="#feb824" /> },
  { name: 'MongoDB', icon: <SiMongodb size={30} color="#feb824" /> },
  { name: 'Java', icon: <FaJava size={30} color="#feb824" /> },
  { name: 'Python', icon: <SiPython size={30} color="#feb824" /> },
  { name: 'Git', icon: <FaGitAlt size={30} color="#feb824" /> },
  { name: 'GitHub', icon: <FaGithub size={30} color="#feb824" /> },
  { name: 'GitLab', icon: <FaGitlab size={30} color="#feb824" /> },
  { name: 'Jenkins', icon: <FaJenkins size={30} color="#feb824" /> },
  { name: 'Firebase', icon: <SiFirebase size={30} color="#feb824" /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={30} color="#feb824" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={30} color="#feb824" /> },
  { name: 'Kafka', icon: <SiApachekafka size={30} color="#feb824" /> },
  { name: 'MySQL', icon: <SiMysql size={30} color="#feb824" /> },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={30} color="#feb824" /> },
  { name: 'Figma', icon: <SiFigma size={30} color="#feb824" /> },
  { name: 'Postman', icon: <SiPostman size={30} color="#feb824" /> },
];

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <Timeline 
            title="Moroccan school of engineering sciences"
            date="2019 - 2024"
            description="Systems and Computers Engineering Department."
          />
          <Timeline 
            title="Baccalauréat, spécialité science physique"
            date="2018 - 2019"
            description="Science physique."
          />
        </ol>
        <br />
        <div className="title-wrapper">
          <div className="icon-box">
            <img src="/image/briefcase.png" alt="" width="24" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
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
            title="Software Engineer Intern (internship)"
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
            title="Web Developer (internship)"
            date="Jul 2022 - Jul 2022"
            description={""}
          />
        </ol>
      </div>
      <br />

      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content">
          {skills.map((skill, index) => (
            <li className="skills-item" key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {skill.icon}
              <h5 className="h5">{skill.name}</h5>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
