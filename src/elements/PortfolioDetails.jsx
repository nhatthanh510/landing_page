import React from 'react'
import PageHelmet from '../component/common/Helmet'
import ModalVideo from 'react-modal-video'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa'
import ScrollUp from '../component/common/ScrollUp'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

import portfolio01 from '../assets/images/portfolio/portfolio-big-01.jpg'
import portfolio02 from '../assets/images/portfolio/portfolio-big-02.jpg'
import portfolio03 from '../assets/images/portfolio/portfolio-big-03.jpg'
import related01 from '../assets/images/portfolio/related-image-01.jpg'
import related02 from '../assets/images/portfolio/related-image-02.jpg'
import bg4 from '../assets/images/bg/bg-image-4.jpg'

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

const PortfolioDetails = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
        data-black-overlay="7"
        style={{
          backgroundImage: `url(${bg4})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Getting tickets to the big show
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Trydo</h2>
                  <p className="subtitle">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commod viverra maecenas accumsan lacus vel facilisis. ut
                    labore et dolore magna aliqua.{' '}
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Branch</span>
                      <h4>Ability</h4>
                    </div>

                    <div className="port-view">
                      <span>Project Types</span>
                      <h4>Website</h4>
                    </div>

                    <div className="port-view">
                      <span>Program</span>
                      <h4>View Project</h4>
                    </div>
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img src={portfolio03} alt="Portfolio Images" />
                    <ModalVideo
                      youtube={{
                        autoplay: 1,
                        mute: 1,
                      }}
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="kJQP7kiw5Fk"
                      onClose={() => setIsOpen(false)}
                    />
                    <button
                      className="video-popup position-top-center"
                      onClick={openModal}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div>

                  <div className="thumb mb--30">
                    <img src={portfolio02} alt="Portfolio Images" />
                  </div>

                  <div className="thumb">
                    <img src={portfolio01} alt="Portfolio Images" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Related Work */}
      <div className="portfolio-related-work pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="theme-color font--18 fontWeight600">
                  Related Work
                </span>
                <h2>Our More Projects</h2>
              </div>
            </div>
          </div>
          <div className="row mt--10">
            {/* Start Single Portfolio */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="related-work text-center mt--30">
                <div className="thumb">
                  <a href="/portfolio-details">
                    <img src={related01} alt="Portfolio-images" />
                  </a>
                </div>
                <div className="inner">
                  <h4>
                    <a href="/portfolio-details">Digital Analysis</a>
                  </h4>
                  <span className="category">Technique</span>
                </div>
              </div>
            </div>
            {/* End Single Portfolio */}
            {/* Start Single Portfolio */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="related-work text-center mt--30">
                <div className="thumb">
                  <a href="/portfolio-details">
                    <img src={related02} alt="Portfolio-images" />
                  </a>
                </div>
                <div className="inner">
                  <h4>
                    <a href="/portfolio-details">Plan Management</a>
                  </h4>
                  <span className="category">PLANNING</span>
                </div>
              </div>
            </div>
            {/* End Single Portfolio */}
          </div>
        </div>
      </div>
      {/* End Related Work */}

      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}

      <Footer />
    </>
  )
}

export default PortfolioDetails
