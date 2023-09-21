import { FaLinkedinIn } from 'react-icons/fa'

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/company/upgrow-software/',
  },
]

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    const email = 'rmh.business.kaarey@gmail.com'
    window.location.href = `mailto:${email}`
  }
  return (
    <>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>Ready To Do This</span>
                  <h2>
                    Let's get <br /> to work
                  </h2>
                  <a
                    className="rn-button-style--2"
                    href="/contact"
                    onClick={sendEmail}
                  >
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right" data-black-overlay="6">
                <div className="row">
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Link</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Let's Talk</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:rmh.business.kaarey@gmail.com">
                            rmh.business.kaarey@gmail.com
                          </a>
                        </li>
                      </ul>

                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          {SocialShare.map((val, i) => (
                            <li key={i}>
                              <a
                                href={`${val.link}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.Social}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widget  */}

                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>
                        Copyright © 2023 Upgrow Software Studio. All Rights
                        Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
