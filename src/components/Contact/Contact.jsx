import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
        <header>
            <h2 className='h2 article-title'>Contact</h2>
        </header>
        <section className='mapbox'>
            <figure>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106375.6885640318!2d-7.589843363015264!3d33.57311042419626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1726437367426!5m2!1sfr!2sma" 
            width="600" height="450" allowfullscreen="" 
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </figure>
        </section>
        <section className='contact-form'>
                <h3 className='h3 form-title'>Contact Me</h3>
                <form action="#" className='form'>
                    <div className='input-wrapper'>
                        <input type="text" name='fullname' id='fullname' className='form-input' placeholder='Full Name'/>
                        <input type="email" name='Email adress' id='Email adress' className='form-input' placeholder='Email Adress'/>
                    </div>
                    <textarea name="Your message" id="Your message" className='form-input' placeholder='Your message'></textarea>
                    <button className='form-btn' type='submit'>
                        <span>Send Message</span>
                    </button>
                </form>
        </section>
    </section>
  )
}

export default Contact
