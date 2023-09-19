import { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const CounterOne = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false)
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true)
    }
  }
  const data = [
    {
      countNum: 20,
      countTitle: 'Project Complete.',
    },
    {
      countNum: 12,
      countTitle: 'Happy Client',
    },
    {
      countNum: 2,
      countTitle: 'Years Experience',
    },
    {
      countNum: 5,
      countTitle: 'Win Award',
    },
  ]

  return (
    <div className="row">
      {data.map((value, index) => (
        <div
          className="counterup_style--1 col-lg-3 col-md-3 col-sm-6 col-12"
          key={index}
        >
          <h5 className="counter">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={didViewCountUp ? value.countNum : 0} />
            </VisibilitySensor>
          </h5>
          <p className="description">{value.countTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default CounterOne
