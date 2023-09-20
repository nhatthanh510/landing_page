import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog1Image from './images/blog1_image.webp'

const Blog1 = () => {
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
                  Aptos Labs adds Coinbase Pay to its Petra crypto wallet
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 20, 2023
                  </li>
                  <li>
                    <FiUser />
                    Jacquelyn Melinek
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
                    <img src={blog1Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    Petra, a crypto wallet built by Aptos Labs, is integrating
                    Coinbase Pay onto its desktop and mobile applications in
                    hopes of alleviating web3’s growing pains, the companies
                    exclusively told TechCrunch.
                  </p>
                  <p>
                    To date, Petra has integrated into over 160 decentralized
                    applications, including Pyth, LayerZero and PancakeSwap.
                    This partnership aims to help alleviate the headaches that
                    many web3 users have when it comes to onramps and offramps
                    (among other things).
                  </p>
                  <p>
                    "Easy onboarding in web3 is critical,” Mo Shaikh, co-founder
                    and CEO of Aptos Labs, said. Fiat on and offramps are
                    essential for onboarding millions of users into web3, Shaikh
                    said. “It may seem obvious, but in order to grow the web3
                    ecosystem, everyday activities like financial transactions
                    have to be easier. "Consumer adoption does not happen
                    without it. Full stop."
                  </p>

                  <p className="mt--40">
                    As non-finance use cases like gaming, e-commerce and loyalty
                    programs reach enterprise categories, payments and crypto
                    wallets will continue to be an important part of the web3
                    experience for onboarding users.
                  </p>
                  <p>
                    Crypto wallets are currently more centered around the
                    average crypto user and not focused on new users looking to
                    explore the space. Over time, though, making user
                    experiences more accessible will open the doors wider to
                    mainstream users, but whether or not those users will enter
                    through those doors depends on a handful of other factors.
                  </p>
                  <p>
                    Partnerships and integrations like this one, especially
                    those that aim to improve the user experience, are a step in
                    the right direction, however, because as it stands, many
                    crypto products and services are still technical and
                    laborious.
                  </p>
                  <p>
                    Aptos also recently partnered with Microsoft to work on AI
                    and web3 integration, as well as Sushi, a decentralized
                    exchange and automated market maker, to help provide users
                    access to non-Ethereum based chains.
                  </p>
                  <p>
                    Will Robinson, VP of engineering at Coinbase, feels the
                    integration also points towards a multichain future.
                  </p>
                  <p className="mb--0">
                    By leveraging big name partners like Coinbase Pay, Petra can
                    potentially add greater appeal, bring more users into the
                    space and improve user experience and interoperability
                    across chains and ecosystems, Shaikh said.
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

export default Blog1
