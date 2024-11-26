import './index.css'

function Hero() {
  return (
    <section id='hero-section' className='hero-bg-con'>
       <div className='hero-content-section'>
        <h1 className='hero-hea'><span className='span'>I'm Supriya Angalwar</span> Frontend Devloper,  Designer Intrested in Bakend also</h1>
        <p className='hero-p'>Passionate Frontend Developer! Transforming Idias Into Seamless and Vissuallys stunning WEb solutions.</p>
      </div>
      <div className='hero-img-section'>
        <div className='hero-img-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='react' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532409/react_ubvkrf.svg'/>
          </div>
          <img className='hero-img' alt='frofile-img' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732531487/sweety_3_vzpc7u.jpg'/>
        </div>
        
        <div className='tech-logoes-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='javascript' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532427/icons8-javascript-48_yjhkih.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='html' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532415/icons8-css3-48_xi9hgh.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='css' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532434/icons8-html-5-48_rhjpxy.png'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

/*
 <div className='hero-content-section'>
        <h1 className='hero-hea'><span className='span'>I'm Supriya </span>     Frontend Devloper,  Designer Intrested in Bakend also</h1>
        <p className='hero-p'>Passionate Frontend Developer! Transforming Idias Into Seamless and Vissuallys stunning WEb solutions.</p>
      </div>
   

      <div className='hero-img-section'>
        <div className='hero-img-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='react' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532409/react_ubvkrf.svg'/>
          </div>
          <img className='hero-img' alt='frofile-img' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732531487/sweety_3_vzpc7u.jpg'/>
        </div>
        
        <div className='tech-logoes-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='javascript' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532427/icons8-javascript-48_yjhkih.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='html' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532415/icons8-css3-48_xi9hgh.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='css' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532434/icons8-html-5-48_rhjpxy.png'/>
          </div>
        </div>
      </div>
      */