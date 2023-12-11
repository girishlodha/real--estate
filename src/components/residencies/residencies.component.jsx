import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './residencies.styles.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common.component'
const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    {  
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                
                                <div className='r-card flexColStart'>
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText r-price">
                                        <span>$</span>
                                        <span style={{ color: "orange" }}>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <SliderButton/>
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButton=()=>{
    const swiper = useSwiper();
    return(
        <div className=" flexCenter r-buttons">
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
