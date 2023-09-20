import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog5Image from './images/blog5_image.webp'

const Blog5 = () => {
  return (
    <>
      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
        data-black-overlay="7"
        style={{
          backgroundImage: `url(${bg7})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  DOJ investigates Elon Musk perks at Tesla
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 20, 2023
                  </li>
                  <li>
                    <FiUser />
                    Rebecca Bellan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <div className="thumbnail">
                    <img src={blog5Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    The U.S. Department of Justice is investigating the personal
                    benefits that Tesla may have provided its CEO Elon Musk
                    since 2017 as part of a criminal probe that is also looking
                    into the use of company funds to build a proposed glass
                    house.
                  </p>
                  <p>
                    The U.S. Attorney’s Office for the Southern District of New
                    York has also requested information about transactions
                    between Tesla and other entities connected to Musk,
                    according to a report from the Wall Street Journal that
                    cites people familiar with the matter.
                  </p>
                  <p>
                    This revelation into the extent of federal scrutiny beyond
                    the glass house — a secret project that has been described
                    internally as house for Musk — indicates that prosecutors
                    are pursuing potential criminal charges.
                  </p>

                  <p className="mt--40">
                    The Securities and Exchange Commission is also investigating
                    the secret “Project 42” house, which was reportedly planned
                    near Tesla’s Austin-area factory.
                  </p>
                  <p>
                    The feds want to know whether Tesla properly disclosed the
                    perks Musk received. Tesla has in the past said it doesn’t
                    provide perks or personal benefits to top executives.
                  </p>
                  <p>
                    Musk has responded to claims about a glass house by saying
                    that none has been built, is under construction or is
                    planned. The billionaire’s recently launched biography by
                    Walter Isaacson does indeed have mention of a glass house,
                    but says Musk “put off building it.”
                  </p>
                  <p>
                    “It should be like something fell out of space, like a
                    structure from another galaxy landed in the lake,” said
                    Musk, as reported by Isaacson in a section of the book
                    titled ‘A house, not a home.’ The section detailed Musk’s
                    dream of building a family home in Austin and his decision
                    to build one on a horse farm that he had bought across the
                    Colorado River from Giga Texas.
                  </p>
                  <p>
                    The investigations into the glass house began internally,
                    after employees were concerned about how millions of dollars
                    of large-format glass panels Tesla ordered would be used.
                    Zack Kirkhorn, Tesla’s CFO who stepped down in August, was
                    among those who raised concerns.
                  </p>

                  <p className="mb--0">
                    Tesla is not the only company to be questioned by the SEC
                    and DOJ regarding executive perks. SEC regulations require
                    public companies to disclose those perks and other personal
                    benefits provided to top executives if the total value is
                    $10,000 or more. These can include reimbursement for
                    housing, private security or airplane use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}
    </>
  )
}

export default Blog5
