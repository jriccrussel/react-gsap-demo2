import React, { useEffect, useRef, useState } from 'react'
import { TweenLite, Power3, gsap } from 'gsap'

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
    const imgList = useRef(null)
    const contentList = useRef(null)

    const imgWidth = 340

    const [active, setActive] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
    })

    useEffect(() => {
        // console.log(contentList.current.children[2])
        // TweenLite.to(contentList.current.children[0], {
        //     opacity: 1,
        // })
        gsap.to(contentList.current.children[0], {
            opacity: 1,
        })
    }, [])

    // ANIMATIONS
    const slideLeft = (index, duration , multiplied = 1) => {
        // TweenLite.to(imgList.current.children[0], 1 , {
        //     x: -imgWidth,
        //     ease: Power3.easeout
        // })
        gsap.to(imgList.current.children[index], duration , {
            x: -imgWidth * multiplied,
            ease: Power3.easeout
        })
    }

    const slideRight = (index, duration, multiplied = 1) => {
        gsap.to(imgList.current.children[index], duration, {
          x: imgWidth * multiplied,
          ease: Power3.easeOut
        })
    }

    const scale = (index, duration) => {
        gsap.from(imgList.current.children[index], duration, {
          scale: 1.2,
          ease: Power3.easeOut
        })
    }
    
    //Content transition    
    const fadeOut = (index, duration) => {
        gsap.to(contentList.current.children[index], duration, {
            opacity: 0
        })
    }

    const fadeIn = (index, duration) => {
        gsap.to(contentList.current.children[index], duration, {
            opacity: 1,
            delay: 1
        })
    }

    const nextSlide = () => {
        // console.log("next slide")
        // if(imgList.current.children[0].classList.contains("active")){
        //     setActive({ isActive1: false, isActive2: true })

        // } else if(imgList.current.children[1].classList.contains("active")){
        //     setActive({ isActive2: false, isActive3: true })

        // } else if(imgList.current.children[2].classList.contains("active")){
        //     setActive({ isActive1: true, isActive3: false })
        // }

        if(imgList.current.children[0].classList.contains("active")){
            setActive({ isActive1: false, isActive2: true })

            // TweenLite
            // TweenLite.to(imgList.current.children[0], 1 , {
            //     x: -imgWidth,
            //     ease: Power3.easeout
            // })

            // TweenLite.to(imgList.current.children[1], 1 , {
            //     x: -imgWidth,
            //     ease: Power3.easeout
            // })

            // TweenLite.from(imgList.current.children[1], 1 , {
            //     scale: 1.2,
            //     ease: Power3.easeout
            // })

            // gsap
            // gsap.to(imgList.current.children[0], 1 , {
            //     x: -imgWidth,
            //     ease: Power3.easeout
            // })

            // gsap.to(imgList.current.children[1], 1 , {
            //     x: -imgWidth,
            //     ease: Power3.easeout
            // })

            // gsap.from(imgList.current.children[1], 1 , {
            //     scale: 1.2,
            //     ease: Power3.easeout
            // })

            // gsap.from(contentList.current.children[0], 1 , {
            //     opacity: 0,
            // })

            // gsap.from(contentList.current.children[1], 1 , {
            //    opacity: 1,
            //    delay: 1,
            // })
            slideLeft(0, 1)
            slideLeft(1, 1)
            scale(1, 1)
            slideLeft(2, 1)
            slideLeft(2, 0)
            fadeOut(0, 1)
            fadeIn(1, 1)
            
        } else if(imgList.current.children[1].classList.contains("active")){
            setActive({ isActive2: false, isActive3: true })
            //Image transition
            slideRight(0, 1)
            slideLeft(1, 1, 2)
            slideLeft(2, 1, 2)
            scale(2, 1)
            //content transition
            fadeOut(1, 1)
            fadeIn(2, 1)

        } else if(imgList.current.children[2].classList.contains("active")){
            setActive({ isActive1: true, isActive3: false })
            //Image transition
            slideLeft(2, 1, 3)
            slideLeft(0, 1, 0)
            slideLeft(1, 0, 0)
            scale(0, 1)
            //content transition
            fadeOut(2, 1)
            fadeIn(0, 1)
        }
    }

    const prevSlide = () => {
        if(imgList.current.children[0].classList.contains("active")){
            setActive({ isActive1: false, isActive3: true })
            //Image transition
            slideLeft(2, 0, 3)
            slideLeft(2, 1, 2)
            scale(2, 1)
            slideRight(0, 1)
            slideRight(1, 1)
            //content transtion
            fadeOut(0, 1)
            fadeIn(2, 1)

        } else if(imgList.current.children[1].classList.contains("active")){
            setActive({ isActive2: false, isActive1: true })
            //Image transition
            slideLeft(0, 0)
            slideRight(0, 1, 0)
            slideRight(1, 1, 0)
            slideRight(2, 1, 2)
            scale(0, 1)
            //content transtion
            fadeOut(1, 1)
            fadeIn(0, 1)

        } else if(imgList.current.children[2].classList.contains("active")){
            setActive({ isActive2: true, isActive3: false })
            slideLeft(2, 1)
            slideLeft(1, 0, 2)
            slideLeft(1, 1)
            scale(1, 1)
            //content transtion
            fadeOut(2, 1)
            fadeIn(1, 1)
        }
    }

    return (

        <div className="testimoials-section">
            <div className="testimonial-container">
                <div className="arrows left" onClick={prevSlide}>
                    <span>
                        <img src={leftArrow} alt="" />
                    </span>
                </div>
                <div className="inner">
                    <div className="t-image">
                        <ul ref={imgList}>
                            <li className={active.isActive1 ? "active" : ""}>
                                <img src={data[0].image} alt="" />
                            </li>
                            <li className={active.isActive2 ? "active" : ""}>
                                <img src={data[1].image} alt="" />
                            </li>
                            <li className={active.isActive3 ? "active" : ""}>
                                <img src={data[2].image} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul ref={contentList}>
                            <li className={active.isActive1 ? "active" : ""}>
                                <div className="content-inner">
                                <p className="quote">{data[0].quote}</p>
                                <h3 className="name">{data[0].name}</h3>
                                <h4 className="title">{data[0].title}</h4>
                                </div>
                            </li>
                            <li className={active.isActive2 ? "active" : ""}> 
                                <div className="content-inner">
                                <p className="quote">{data[1].quote}</p>
                                <h3 className="name">{data[1].name}</h3>
                                <h4 className="title">{data[1].title}</h4>
                                </div>
                            </li>
                            <li className={active.isActive3 ? "active" : ""}>
                                <div className="content-inner">
                                <p className="quote">{data[2].quote}</p>
                                <h3 className="name">{data[2].name}</h3>
                                <h4 className="title">{data[2].title}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arrows right" onClick={nextSlide}>
                    <span>
                        <img src={rightArrow} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
