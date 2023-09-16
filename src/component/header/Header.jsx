import { Link } from 'react-router-dom'
import { FiX, FiMenu } from 'react-icons/fi'
import logoSrc from '../../assets/images/logo/logo.png'
import logoLight from '../../assets/images/logo/logo-light.png'
import logoSymbolLight from '../../assets/images/logo/logo-symbol-light.png'
import logoSymbolDark from '../../assets/images/logo/logo-symbol-dark.png'
import logoDark from '../../assets/images/logo/logo-dark.png'

const Header = (props) => {
  const menuTrigger = () => {
    document.querySelector('.header-wrapper').classList.toggle('menu-open')
  }

  const cLoseMenuTrigger = () => {
    document.querySelector('.header-wrapper').classList.remove('menu-open')
  }

  const elements = document.querySelectorAll('.has-droupdown > a')
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector('.submenu').classList.toggle('active')
        this.classList.toggle('open')
      }
    }
  }
  const { color = 'default-color' } = props
  let logoUrl = <img src={logoSymbolLight} alt="Digital Agency" />

  return (
    <header
      className={`header-area formobile-menu header--transparent ${color}`}
    >
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <a href="/">{logoUrl}</a>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/our-customer">Customers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <a className="rn-btn" href="https://www.google.com/">
              <span>Call to Action</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={cLoseMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
