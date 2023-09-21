import React from 'react'
import TeamOne from './team/TeamOne'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import ScrollUp from '../component/common/ScrollUp'

const Team = () => {
  return (
    <>
      <PageHelmet pageTitle="Team" />
      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={'Team'} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Team Area  */}
        <div className="rn-team-wrapper ptb--120 bg_color--1">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30">
                    <h2>Our Skilled Team</h2>
                    <p>
                      Discover the dynamic individuals who fuel our collective
                      drive. Our team is a fusion of diverse talents and
                      unwavering commitment. <br /> Together, we synergize to
                      create impactful experiences. Get to know the individuals
                      behind our success.
                    </p>
                  </div>
                </div>
              </div>
              <TeamOne
                column="col-lg-3"
                teamStyle="team-style--bottom"
                item="8"
              />
            </div>
          </div>
        </div>
        {/* End Team Area  */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  )
}

export default Team
