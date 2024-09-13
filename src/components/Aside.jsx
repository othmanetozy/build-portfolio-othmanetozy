import React from 'react'
import { GiClawSlashes, GiMailbox, GiPhone } from 'react-icons/gi'
import { ImLocation } from "react-icons/im";


const Aside = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
            <img src="/image/photo.jpeg" alt="" width="80" />
        </figure>
        <div className='info-content'>
            <h1 className='name'>Othmane Tozy</h1>
            <p className='title'>Software Engineer</p>
        </div>
        <button className='info_more-btn'>
            <span>Show Contacts</span>
            <GiClawSlashes />
        </button>
      </div>

     <div className='sidebar-info_more'>
        <hr className='separator2'/>
        <ul className='contacts-list'>
            <li className='contact-item'>
                <div className='icon-box'>
                    <GiMailbox />
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>EMAIL</p>
                    <a href="mailto:othmanetozy.06@gmail.com" className='contact-link'>othmanetozy.06@gmail.com</a>
                </div>
            </li>
            <li className='contact-item'>
                <div className='icon-box'>
                    <GiPhone />
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>PHONE</p>
                    <a href="mailto:othmanetozy.06@gmail.com" className='contact-link'>+212 6 63 63 10 98</a>
                </div>
            </li>
            <li className='contact-item'>
                <div className='icon-box'>
                    <ImLocation />                    
                </div>
                <div className='contact-info'>
                    <p className='contact-title'>LOCATION</p>
                    <a href="mailto:othmanetozy.06@gmail.com" className='contact-link'>Casablanca, Maroc</a>
                </div>
            </li>
        </ul>
     </div>
    </aside>
  )
}

export default Aside
