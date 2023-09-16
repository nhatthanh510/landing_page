import React from 'react'
import ScrollToTop from 'react-scroll-up'
import Breadcrumb from '../elements/common/Breadcrumb'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Brand from '../elements/Brand'
import Helmet from '../component/common/Helmet'

const OurClient = () => {
  return (
    <>
      <Helmet pageTitle="Our customer" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      <Breadcrumb title={'Customers'} />

      {/* Start Brand Area */}
      <div className="rn-brand-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3 mb--30">
                <h2 className="title">Our Clients</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--40">
              <Brand branstyle="branstyle--2" />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </>
  )
}

export default OurClient
