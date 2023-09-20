import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog4Image from './images/blog4_image.webp'
import blog41Image from './images/blog4_1_image.webp'

const Blog4 = () => {
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
                  VSCO gains former Figma COO Eric Wittman as its new CEO
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 20, 2023
                  </li>
                  <li>
                    <FiUser />
                    Sarah Perez
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
                    <img src={blog4Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    Popular photo editing app VSCO is seeing a change in
                    leadership with the appointment of Eric Wittman, formerly of
                    JLL Technologies and COO at Figma, as its new CEO, replacing
                    co-founder Joel Flory. With the appointment, Flory will now
                    become Executive Chairman of the Board and Founder, while
                    co-founder Greg Lutze will also remain a board member and
                    Chief Experience Officer.
                  </p>
                  <p>
                    Though the news may come as a surprise to those who have
                    tracked VSCO’s growth over the years in the shadow of larger
                    photo-sharing apps like Instagram and, now, the new crop of
                    AI-enabled image editing tools, the company says the
                    appointment is actually the culmination of a plan put into
                    motion five years ago.
                  </p>
                  <p>
                    Both co-founders intended to bring in a President who would
                    learn the business and assume the CEO role, the company
                    says.
                  </p>

                  <p className="mt--40">
                    Corti describes its service as an “AI co-pilot” for
                    healthcare, with its assistant covering a number of areas
                    where that might apply: triaging during a patient
                    interaction, documenting that whole interaction including
                    with the administrative coding that an institution might be
                    using, providing analysis of that interaction to give steers
                    on decisions, sometimes giving “second opinions” that might
                    be contrary to what the clinician thinks, and providing
                    notes both in real time and after a meeting to identify
                    areas of improvement and to train clinicians.
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src={blog41Image}
                        alt="BLog Images"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Both co-founders intended to bring in a President who
                        would learn the business and assume the CEO role, the
                        company says.
                      </p>
                      <p>
                        Wittman brings a range of experience to the position,
                        having previously served as Chief Revenue Officer and
                        Chief Growth Officer at JLL Technologies and, prior to
                        that, COO at design powerhouse Figma from Jan. 2017
                        through mid-2018. He also served as general manager at
                        Atlassian, CEO of a music tech company Songbird, and
                        held senior positions at Adobe.
                      </p>
                      <p>
                        The executive joined VSCO in 2021, working at the
                        company for over two years prior to becoming CEO of the
                        app whose community now comprises over 200 million
                        creators.
                      </p>
                      <p>
                        “I am honored to join VSCO and build on its legacy of
                        empowering creators. Together with the incredible team
                        at VSCO, we will continue to innovate, inspire, and
                        connect creators across the globe,” Wittman said, in a
                        statement.
                      </p>
                    </div>
                  </div>
                  <p className="mt--30">
                    The change in leadership signals VSCO’s desire to adapt to
                    the changing needs and expectations of today’s creators, the
                    company notes, and aligns with VSCO’s strategic direction
                    and its five-year vision.
                  </p>
                  <p>
                    The move follows recent product changes at VSCO, which
                    include last year’s launch of collaborative photo galleries
                    called Spaces, where photographers can upload images around
                    a theme and discuss their process, as well as the more
                    recent advances into becoming more of a social network for
                    photographers, which included tools for sharing text-based
                    posts and messages. The company has also been working to
                    address the needs of video creators with tools like Montage,
                    for layering images and stitching photos and videos
                    together, and new filters designed for video.
                  </p>
                  <p>
                    Both founders released statements in support of Wittman as
                    CEO.
                  </p>
                  <p>
                    “We believe there has never been a better time for this
                    transition. Eric’s leadership will undoubtedly drive VSCO to
                    new heights, fulfilling our mission to empower creators
                    worldwide,” said Flory.
                  </p>
                  <p>
                    “We remain deeply committed to VSCO’s community and its
                    continued success. With Eric at the helm, we are confident
                    in VSCO’s future and its positive impact on the creative
                    world,” added Lutze.
                  </p>
                  <p>
                    Wittman’s appointment is effective immediately as of Sept.
                    18, 2023.
                  </p>
                  <p className="mb--0">
                    Correction: The press release indicated the appointment was
                    effective Sept. 19, it was actually Sept. 18, the company
                    corrected after publication.
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

export default Blog4
