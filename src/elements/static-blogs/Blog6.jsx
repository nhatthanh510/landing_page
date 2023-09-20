import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog6Image from './images/blog6_image.webp'

const Blog6 = () => {
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
                  You can now FaceTime from your Apple TV 4K
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 19, 2023
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
                    <img src={blog6Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    Alongside today’s release of its flagship iPhone software,
                    iOS 17, Apple has also rolled out an update to the operating
                    system powering Apple TV with the launch of tvOS 17. The
                    most notable feature of the update is that Apple will now
                    allow users to FaceTime from their Apple TV for the first
                    time. Later this year, the device will also support other
                    web conferencing calls with new tvOS apps from Cisco’s Webex
                    and Zoom, the company also says.
                  </p>
                  <p>
                    Apple initially announced its plans for the FaceTime feature
                    at its Worldwide Developer Conference this June. The feature
                    takes advantage of the Continuity Camera on an iPhone or
                    iPad, which lets the mobile device double as a webcam,
                    wirelessly. Developers can integrate with the Continuity
                    Camera APIs on the Apple TV 4K in order to make their
                    communication or entertainment apps work on the big screen.
                  </p>
                  <p>
                    For example, Apple is using Continuity Camera with Apple
                    Music Sing on the Apple TV — its karaoke-like party feature
                    that lets you sing along with your favorite music.
                  </p>

                  <p className="mt--40">
                    While FaceTime is the standout feature in tvOS 17, the
                    update delivers a handful of other additions to the TV
                    software, including a redesigned control center, a lost TV
                    remote finding function, support for improved dialogue, and
                    more.
                  </p>
                  <p>
                    The new Control Center on the Home Screen will now display
                    the system status, including the time and activity profile,
                    and expands with other details, based on user activity,
                    Apple says. For example, the Control Center will help Apple
                    TV owners do things like access their AirPods settings, home
                    cameras, system controls, and user profiles with a touch of
                    the remote.
                  </p>
                  <p>
                    Users can also launch the Apple TV Remote inside the Control
                    Center on their iPhone to find a missing Siri Remote, second
                    generation or later. As they get closer to the remote, the
                    onscreen circle grows in size to help them find their lost
                    device.
                  </p>
                  <p>
                    Apple TV will also now support the ability to use curated
                    photos from your personal library or Shared Library as a
                    screensaver — a baseline feature other media players like
                    Roku and Fire TV have already offered.
                  </p>
                  <p>
                    Apple also says it’s made improvements to separate the
                    dialogue from the background noise and bring it to the
                    center channel so it’s easier to hear what’s being said over
                    the effects, action and music in a movie or show when the
                    Apple TV 4K is paired with a HomePod 2nd. generation.
                  </p>

                  <p className="mb--0">
                    While many of the tvOS upgrades are aimed at Apple TV 4K,
                    both Apple TV 4K and Apple TV HD users will gain expanded
                    Siri functionality, which will allow them to ask more
                    general questions and receive responses, rather than only
                    questions about things on TV.
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

export default Blog6
