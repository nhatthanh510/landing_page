/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiCode, FiLayers, FiMonitor } from 'react-icons/fi'
import { AiOutlineSafety, AiOutlineSolution } from 'react-icons/ai'

const ServiceList = [
  {
    icon: <FiLayers />,
    title: 'Website Development',
    description:
      'We help you develop your website to reach potential clients in the near future!',
  },
  {
    icon: <FiMonitor />,
    title: 'Application Development',
    description:
      'Let people feel the ease when reaching out to your product via application.',
  },
  {
    icon: <FiCode />,
    title: 'UI/UX Design',
    description:
      'Let people experience their world while using unique and stunning UI/UX designs!',
  },
  {
    icon: <AiOutlineSolution />,
    title: 'Custom Solutions',
    description:
      'We strive to meet the unique needs of our customers by offering customized solutions.',
    height: '355px',
  },
  {
    icon: <AiOutlineSafety />,
    title: 'Quality Assurance',
    description:
      'Quality assurance is one of the key services we specialize in, dedicated to ensuring the highest standards in software development and testing.',
  },
]

const ServiceThree = (props) => {
  const { column } = props
  const ServiceContent = ServiceList.slice(0, props.item)
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className={`${column}`} key={i}>
            <a href="#">
              <div
                className={`service service__style--2 text-center ${
                  val.height ? 'custom-height' : ''
                }`}
              >
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ServiceThree
