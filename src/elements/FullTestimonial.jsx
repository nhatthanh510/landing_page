import React from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import PortfolioMasonry from '../elements/portfolio/PortfolioMasonry'
import Testimonial from '../elements/Testimonial'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

const FullTestimonial = () => {
  return (
    <>
      <PageHelmet pageTitle="About" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={'Testimonial'} />

      {/* Start Testimonial Area */}
      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End Testimonial Area */}

      {/* Start portfolio Area  */}
      <div className="rn-portfolio-area bg_color--1 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30">
                <h2 className="title">Our Project</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper plr--30">
          <div className="row">
            <PortfolioMasonry
              item="9"
              column="col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover"
            />
          </div>
        </div>
      </div>
      {/* End portfolio Area  */}

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

export default FullTestimonial
