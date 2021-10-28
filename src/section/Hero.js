import React, { useEffect, useRef, useState } from 'react'
import {TimelineLite ,TweenMax, Power3, gsap} from 'gsap'

import imgGirl from "../assets/img/girl.webp"
import imgBoy from "../assets/img/boy.webp"
import arrow from '../assets/img/arrow-right-white.svg'

const Hero = () => {
    const hero = useRef(null)
    const img = useRef(null) 
    const content = useRef(null)

    const tl = new TimelineLite({delay: 0.8})

    useEffect(() => {
        // console.log(hero.current)

        // Images Vars
        const girlImage = img.current.firstElementChild; // or children[0]
        const boyImage = img.current.lastElementChild;

        // Content Vars
        const headlineFirst = content.current.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.current.children[1];
        const contentButton = content.current.children[2];

        //Remove initial flash
        // TweenMax.to(hero.current, 0, {css: {visibility: 'visible'}})
        gsap.to(hero.current, 0, {css: {visibility: 'visible'}})

        //Images Animation
        tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'start')
        .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
        .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

        //Content Animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
            y: 44,
            ease:Power3.easeOut,
            delay: .8
        }, .15, 'start')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

    }, [tl])

    return (
        <div className="hero" ref={hero}>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" ref={content}>
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Relieving the burden</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">of disease caused</div>  
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">by behaviors.</div>
                                </div>
                            </h1>

                            <p>Better treats serious cardiometabolic diseases to transform
                    lives and reduce healthcare utilization through the use of
                    digital therapeutics.</p>
                            <div className="btn-row">
                                <button className="explore-button">Explore
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner" ref={img}>
                            <div className="hero-image girl">
                                <img src={imgGirl} alt="" />
                            </div>
                            <div className="hero-image boy">
                                <img src={imgBoy} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
