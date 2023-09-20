/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import BlogContent from '../elements/blog/BlogContent'
import { Link } from 'react-router-dom'
import blog01 from '../elements/static-blogs/images/blog1_image.webp'
import blog02 from '../elements/static-blogs/images/blog2_image.webp'
import blog03 from '../elements/static-blogs/images/blog3_image.webp'
import blog04 from '../elements/static-blogs/images/blog4_image.webp'
import blog05 from '../elements/static-blogs/images/blog5_image.webp'
import blog06 from '../elements/static-blogs/images/blog6_image.webp'

const MAPPING = {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
}

const BlogHomePage = () => {
  return (
    <React.Fragment>
      {/* Start Blog Area */}
      {BlogContent.map((value, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <div className="blog blog-style--1 mb--0 mt--40">
            <div className="thumbnail">
              <Link to={`/blog/${value.images}`}>
                <img
                  className="w-100"
                  src={MAPPING[`blog${value.images}`]}
                  alt="Blog Images"
                />
              </Link>
            </div>
            <div className="content">
              <p className="blogtype">{value.category}</p>
              <h4 className="title">
                <Link to={`/blog/${value.images}`}>{value.title}</Link>
              </h4>
              <div className="blog-btn">
                <Link
                  className="rn-btn text-white"
                  to={`/blog/${value.images}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default BlogHomePage
