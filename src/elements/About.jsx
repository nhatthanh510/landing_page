import React from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import CounterOne from '../elements/counters/CounterOne'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import about3 from '../assets/images/about/about-3.jpg'
import ceo from '../assets/images/about/about-ceo.jpg'

const About = () => {
  const title = 'About'
  const description = `Welcome to Upgrow Software Studio, where innovation meets dedication. As one of Indonesia's foremost agencies, we are passionate about shaping the digital landscape. Our core expertise lies in developing cutting-edge software, crafting visually stunning websites, and enhancing user experiences through exceptional UI/UX design. Join hands with Upgrow today, and together, we'll make your digital aspirations a reality.`

  const description2 = `"Unlock the power of technology for your business. We create code that doesn't just automate tasks but simplifies experiences, making your journey to professionalism smoother and more efficient."`
  return (
    <>
      <PageHelmet pageTitle="About" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={'About'} />
      {/* End Breadcrump Area */}

      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src={about3} alt="About Images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-about-wrapper mt--60">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img className="w-100" src={ceo} alt="About Images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h3 className="title">CEO</h3>
                    <h4 className="title">Raihan Hilmy Syahalam</h4>
                    <p className="description">{description2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      {/* <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Find Your Work Now</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that.
              </p>
              <a className="rn-btn btn-white" href="/about">
                Get Started
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              <img src={findingUs01} alt="Finding Images" />
            </div>
          </div>
        </div>
      </div> */}
      {/* End Finding Us Area  */}

      {/* Start Team Area  */}

      {/* End Team Area  */}

      {/* Start Brand Area */}
      {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div> */}
      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </>
  )
}

export default About
