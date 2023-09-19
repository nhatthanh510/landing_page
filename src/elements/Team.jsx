import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import team01 from '../assets/images/team/team-01.jpg'
import team02 from '../assets/images/team/team-02.jpg'
import team03 from '../assets/images/team/team-03.jpg'
import team04 from '../assets/images/team/team-04.jpg'
import team05 from '../assets/images/team/team-05.jpg'
import team06 from '../assets/images/team/team-06.jpg'
import team07 from '../assets/images/team/team-07.jpg'
import team08 from '../assets/images/team/team-08.jpg'

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

let TeamContent = [
  {
    images: '01',
    title: 'Jone Due',
    designation: 'Sr. Web Developer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '02',
    title: 'Fatima Asrafi',
    designation: 'Front-end Engineer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
    ],
  },
  {
    images: '03',
    title: 'John Dou',
    designation: 'Sr. Graphic Designer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '04',
    title: 'Jone Due',
    designation: 'Sr. Web Developer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '05',
    title: 'Fatima Asrafi',
    designation: 'Front-end Engineer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
    ],
  },
  {
    images: '06',
    title: 'Fatima Amar',
    designation: 'Sr. Graphic Designer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '07',
    title: 'Fatima Amar',
    designation: 'Sr. Graphic Designer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
  {
    images: '08',
    title: 'John Dou',
    designation: 'Sr. Graphic Designer',
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: '#',
      },
      {
        icon: <FaLinkedinIn />,
        url: '#',
      },
      {
        icon: <FaTwitter />,
        url: '#',
      },
    ],
  },
]

const Team = (props) => {
  const { column } = props
  return (
    <React.Fragment>
      {TeamContent.map((value, i) => (
        <div className={`${column}`} key={i}>
          <div className="team">
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
    </React.Fragment>
  )
}
export default Team
