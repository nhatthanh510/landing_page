import React from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import { FiCode, FiLayers, FiMonitor } from 'react-icons/fi'
import { AiOutlineSafety, AiOutlineSolution } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ScrollUp from '../component/common/ScrollUp'
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
    icon: <FiCode />,
    title: 'UI/UX Design',
    description:
      'Let people experience their world while using unique and stunning UI/UX designs!',
  },
  {
    icon: <AiOutlineSolution />,
    title: 'Custom Solutions',
    description:
      'We strive to meet the unique needs of our customers by offering customized solutions.',
  },
  {
    icon: <AiOutlineSafety />,
    title: 'Quality Assurance',
    description:
      'Quality assurance is one of the key services we specialize in, dedicated to ensuring the highest standards in software development and testing.',
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
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center"
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
      <ScrollUp />
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  )
}

export default Service
