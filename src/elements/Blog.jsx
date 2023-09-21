import React from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import Pagination from '../elements/common/Pagination'
import BlogList from '../elements/blog/BlogList'
import ScrollUp from '../component/common/ScrollUp'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

const Blog = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Blog" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={'Blog List'} />
      {/* End Breadcrump Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <BlogList />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination />
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  )
}

export default Blog
