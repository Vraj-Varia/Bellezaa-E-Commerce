import React from 'react'
import './Home.css'
import bgVideo from '../assets/video.mp4'
import im1 from '../assets/background.png'
import im2 from '../assets/screenshot1.png'
import im3 from '../assets/screenshot2.png'
import im4 from '../assets/screenshot3.png'
import im5 from '../assets/screenshot4.png'
import im6 from '../assets/screenshot5.png'


const Home = () => {
  return (
    <div className='Home'>

        {/* <video autoplay loop muted playsInline className='background-clip'>
          <source src={bgVideo} type='video/mp4'></source>
        </video> */}

        <img src={im2} alt="" />
        <img src={im1} alt="" />
        <img src={im3} alt="" />
        <img src={im4} alt="" />
        <img src={im5} alt="" />
        <img src={im6} alt="" />
        

        {/* <div className="text">
            <h1>Make your Skin Glow</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, explicabo?</p>
        </div>
        <div className="button">
            <button>DOCUMENTATION</button>
            <button>LEARN MORE</button>
        </div> */}
    </div>
  )
}

export default Home