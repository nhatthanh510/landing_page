import React, { useState } from 'react'
import PageHelmet from '../component/common/Helmet'
import ModalVideo from 'react-modal-video'
import ScrollUp from '../component/common/ScrollUp'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

import service01 from '../assets/images/service/service-01.png'
import service02 from '../assets/images/service/service-02.png'
import bg5 from '../assets/images/bg/bg-image-5.jpg'

const ServiceDetails = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  return (
    <>
      <PageHelmet pageTitle="Service Details" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
        data-black-overlay="5"
        style={{
          backgroundImage: `url(${bg5})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">WEBSITE DEVELOPMENT</h2>
                <p>Fresh From The Press Discription</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src={service01}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>
                          but the majority have suffered alteration in some
                          form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going
                          to use a passage of Lorem Ipsum. You need to be sure
                          there isn't anything embarrassing
                        </p>
                        <p>
                          hidden in the middle of text. All the Lorem Ipsum
                          generators tend toitrrepeat predefined chunks.
                          Necessary, making this the first true generator on the
                          Internet.
                        </p>
                        <h4 className="title">Proceess of metel</h4>
                        <ul className="liststyle">
                          <li>Yet this above sewed flirted opened ouch</li>
                          <li>Goldfinch realistic sporadic ingenuous</li>
                          <li>
                            Abominable this abidin far successfully then like
                            piquan
                          </li>
                          <li>Risus commodo viverra</li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>
                          but the majority have suffered alteration in some
                          form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going
                          to use a passage of Lorem Ipsum. You need to be sure
                          there isn't anything embarrassing
                        </p>
                        <p>
                          hidden in the middle of text. All the Lorem Ipsum
                          generators tend toitrrepeat predefined chunks.
                          Necessary, making this the first true generator on the
                          Internet.
                        </p>
                        <h4 className="title">Our Working Process</h4>
                        <ul className="liststyle">
                          <li>Yet this above sewed flirted opened ouch</li>
                          <li>Goldfinch realistic sporadic ingenuous</li>
                          <li>
                            Abominable this abidin far successfully then like
                            piquan
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src={service02}
                          alt="Service Images"
                        />
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
                        <button className="video-popup" onClick={openModal}>
                          <span className="play-icon"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}

      <Footer />
    </>
  )
}

export default ServiceDetails
