import React from 'react'
import './hero.styles.css'
//import {HILocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container '>
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                        < div className="orange-circle" />
                       <motion.h1
                       initial = {{y:"2rem",opacity:0}}
                       animate={{y:0,opacity:1}}
                       transition={{
                        duration :2,
                        type:"spring"
                       }}
                       >
                       
                            Discover <br /> Most Suitable <br />Property
                       </motion.h1>
                    </div>
                    <div className=" flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <input type="text" placeholder='search here' />
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span><CountUp start={8800} end={9000} duration={4} /> <span>+</span></span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColStart stat">
                            <span><CountUp start={1950} end={2000} duration={4} /> <span>+</span></span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColStart stat">
                            <span><CountUp end={28} /> <span>+</span></span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./../../../public/hero-image.png" alt="hero" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
