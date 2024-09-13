import React from 'react'

const Aside = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
            <img src="/image/photo.jpeg" alt="" width="80" />
        </figure>
        <div className='info-content'>
            <h1 className='name'>Othmane Tozy</h1>
        </div>
      </div>
    </aside>
  )
}

export default Aside
