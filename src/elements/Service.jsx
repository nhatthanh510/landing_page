import React from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import { FiCast, FiLayers, FiMonitor, FiChevronUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

const ServiceList = [
  {
    icon: <FiLayers />,
    title: 'Website Development',
    description:
      'We help you develop your website to reach potential clients in the near future!',
  },
  {
    icon: <FiMonitor />,
    title: 'Application Development',
    description:
      'Let people feel the ease when reaching out to your product via application.',
  },
  {
    icon: <FiCast />,
    title: 'UI/UX Design',
    description:
      'Let people experience their world while using unique and stunning UI/UX designs!',
  },
]
const Service = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Service" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={'Service'} />
      {/* End Breadcrump Area */}

      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Our Services</h2>
                <p>
                  Discover our tailored services designed just for you. <br />
                  Let's make your vision a reality.
                </p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {ServiceList.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <Link to="#">
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Service Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  )
}

export default Service
