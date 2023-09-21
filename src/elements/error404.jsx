import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/header/Header'
import ScrollUp from '../component/common/ScrollUp'
import Footer from '../component/footer/FooterTwo'

const Error404 = () => {
  return (
    <>
      <Header
        headerPosition="header--transparent"
        color="color-white"
        logo="logo-light"
      />
      {/* Start Page Error  */}
      <div className="error-page-inner bg_color--4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title theme-gradient">404!</h1>
                <h3 className="sub-title">Page not found</h3>
                <span>The page you were looking for could not be found.</span>
                <div className="error-button">
                  <Link className="rn-button-style--2 btn-solid" to="/">
                    Back To Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Error  */}

      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}

      <Footer />
    </>
  )
}

export default Error404
