import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog2Image from './images/blog2_image.webp'

const Blog2 = () => {
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
                  Even Airbnb properties are getting a checkmark
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 20, 2023
                  </li>
                  <li>
                    <FiUser />
                    Ivan Mehta
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
                    <img src={blog2Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    Airbnb is trying to crack down on fake listings by verifying
                    all listings in its top five markets — US, Canada,
                    Australia, UK, and France. The company is trying to crack
                    down on fake listings through this program by asking hosts
                    to submit information such as photos with GPS data.
                  </p>
                  <p>
                    The company said it will begin the verification process in
                    the first batch of countries later this year, and expand the
                    program to 30 other countries by next fall.
                  </p>
                  <p>
                    Brian Chesky, the company’s CEO, said that verified symbols
                    will start appearing next to the listing starting in
                    February.
                  </p>

                  <p className="mt--40">
                    Airbnb is trying to solve the issue of listing properties
                    that don’t exist, have false information, or are owned by
                    someone else than the mentioned host. Scamesters often use
                    photos of real properties or listings to trick users into
                    paying.
                  </p>
                  <p>
                    In 2019, post the death of five people at a Halloween party
                    hosted at an Airbnb rental, the company began cracking down
                    on parties. It also started to verify information on all its
                    listings. Now, the company is ramping up its verification
                    program by asking hosts for more details.
                  </p>
                  <p>
                    Airbnb said it is using its anti-fraud tech along with a
                    combination of “AI and human review” for listing
                    verification. Hosts listing a new property will need to
                    upload images of the property with GPS data through the
                    Airbnb app. For existing listings, the company will look at
                    booking history data and reviews along with details provided
                    by the host. In all cases, hosts should list properties at
                    an accurate location and they should have access to that.
                  </p>
                  <p>
                    While Airbnb didn’t provide a timeline, it said that the
                    company will provide “sufficient time” for hosts of existing
                    properties. However, if Airbnb doesn’t get details from
                    hosts, it can take actions including limiting their
                    accounts. The travel company didn’t specify if it plans to
                    remove unverified properties in the future.
                  </p>
                  <p>
                    In a scenario where a place is real, but belongs to someone
                    other than the host Airbnb says it looks for Host
                    reputation, template messaging, duplicate photos, and other
                    discrepancies.
                  </p>
                  <p>
                    Airbnb emphasized that fake content has “no place” on its
                    platform. However, it will be curious to see how the company
                    handles a property where the host has assigned a caretaker
                    to manage the listing.
                  </p>
                  <p>
                    The company said this year, it has blocked 157,000 fake
                    listening from joining the platform and removed fraud 59,000
                    listings.
                  </p>
                  <p>
                    Earlier this month, new short-term rental rules for New York
                    City went into effect, which forces hosts to register with
                    the city. Additionally, for short-term rentals of less than
                    30 days, hosts should be physically present in the rental.
                    Estimates from the travel website Skift indicate that in the
                    last few months, listings on Airbnb have dropped by 77% in
                    NYC.
                  </p>
                  <p className="mb--0">
                    Airbnb didn’t specify if it plans to use registration data
                    for verification of listings.
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

export default Blog2
