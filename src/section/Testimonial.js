import React, { useEffect, useRef, useState } from 'react'
import { TweenLite, Power3 } from 'gsap'

import leftArrow from '../assets/img/arrow-left.svg'
import rightArrow from '../assets/img/arrow-right.svg'
import slideOne from '../assets/img/image3.jpg'
import slideTwo from '../assets/img/image.jpg'
import slideThree from '../assets/img/image2.jpg'

const data = [
    {
        name: "Julia Cameron",
        title: "Creative Director, VISA",
        image: slideOne,
        quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
    },
    {
      name: "Mark Jacobs",
      title: "Tech Lead, Google",
      image: slideTwo,
      quote:
        "The rebranding has really helped our business. Definitely worth the investment."
    },
    {
      name: "Lisa Bearings",
      title: "Brand Coordinator, Facebook",
      image: slideThree,
      quote:
        "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
    }
]

const Testimonial = () => {
    return (
        <div className="testimoials-section">
            <div className="testimonial-container">
                <div className="arrows left">
                    <span>
                        <img src={leftArrow} alt="" />
                    </span>
                </div>
                <div className="inner">
                    <div className="t-image">
                        <ul>
                            <li>
                                <img src={data[0].image} alt="" />
                            </li>
                            <li>
                                <img src={data[1].image} alt="" />
                            </li>
                            <li>
                                <img src={data[2].image} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul>
                            <li>
                                <div className="content-inner">
                                <p className="quote">{data[0].quote}</p>
                                <h3 className="name">{data[0].name}</h3>
                                <h4 className="title">{data[0].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                <p className="quote">{data[1].quote}</p>
                                <h3 className="name">{data[1].name}</h3>
                                <h4 className="title">{data[1].title}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                <p className="quote">{data[2].quote}</p>
                                <h3 className="name">{data[2].name}</h3>
                                <h4 className="title">{data[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arrows right">
                    <span>
                        <img src={rightArrow} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
