import React from 'react'
import { useParams } from 'react-router-dom'
import PageHelmet from '../component/common/Helmet'
import ScrollUp from '../component/common/ScrollUp'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Blog1 from '../elements/static-blogs/Blog1'
import Blog2 from '../elements/static-blogs/Blog2'
import Blog3 from '../elements/static-blogs/Blog3'
import Blog4 from '../elements/static-blogs/Blog4'
import Blog5 from '../elements/static-blogs/Blog5'

const BlogDetails = () => {
  const { id } = useParams()

  const MAPPING = {
    '01': Blog1,
    '02': Blog2,
    '03': Blog3,
    '04': Blog4,
    '05': Blog5,
  }

  const RenderComponent = MAPPING[id]
  return (
    <>
      <PageHelmet pageTitle="Blog Details" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <RenderComponent />
      {/* Start Back To Top */}
      <ScrollUp />
      {/* End Back To Top */}
      <Footer />
    </>
  )
}

export default BlogDetails
