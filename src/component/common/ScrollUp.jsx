import ScrollToTop from 'react-scroll-to-top'
import { FiChevronUp } from 'react-icons/fi'

const ScrollUp = () => {
  return (
    <ScrollToTop
      style={{
        borderRadius: '50%',
        width: '50px',
        height: '50px',
      }}
      component={
        <div className="backto-top">
          <FiChevronUp />
        </div>
      }
    />
  )
}

export default ScrollUp
