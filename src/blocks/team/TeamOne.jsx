import React from 'react'
import data from './data'
import team01 from '../../assets/images/team/team-01.jpg'
import team02 from '../../assets/images/team/team-02.jpg'
import team03 from '../../assets/images/team/team-03.jpg'
import team04 from '../../assets/images/team/team-04.jpg'
import team05 from '../../assets/images/team/team-05.jpg'
import team06 from '../../assets/images/team/team-06.jpg'
import team07 from '../../assets/images/team/team-07.jpg'
import team08 from '../../assets/images/team/team-08.jpg'

const MAPPING = {
  team01,
  team02,
  team03,
  team04,
  team05,
  team06,
  team07,
  team08,
}

const TeamOne = (props) => {
  const itemSlice = data.slice(0, props.item)
  return (
    <div className="row">
      {itemSlice.map((value, i) => (
        <div className={`${props.column}`} key={i}>
          <div className={`team ${props.teamStyle}`}>
            <div className="thumbnail">
              <img src={MAPPING[`team${value.images}`]} alt="Blog Images" />
            </div>
            <div className="content">
              <h4 className="title">{value.title}</h4>
              <p className="designation">{value.designation}</p>
            </div>
            <ul className="social-icon">
              {value.socialNetwork.map((social, index) => (
                <li key={index}>
                  <a href={`${social.url}`}>{social.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TeamOne
