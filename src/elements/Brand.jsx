import brand01 from '../assets/images/brand/brand-01.png'
import brand02 from '../assets/images/brand/brand-02.png'
import brand03 from '../assets/images/brand/brand-03.png'
import brand04 from '../assets/images/brand/brand-04.png'
import brand05 from '../assets/images/brand/brand-05.png'
import brand06 from '../assets/images/brand/brand-06.png'

const Brand = (props) => {
  const { branStyle } = props

  return (
    <>
      <ul className={`brand-list ${branStyle}`}>
        <li>
          <img src={brand01} alt="Logo Images" />
        </li>
        <li>
          <img src={brand02} alt="Logo Images" />
        </li>
        <li>
          <img src={brand03} alt="Logo Images" />
        </li>
        <li>
          <img src={brand04} alt="Logo Images" />
        </li>
        <li>
          <img src={brand05} alt="Logo Images" />
        </li>
        <li>
          <img src={brand06} alt="Logo Images" />
        </li>
      </ul>
    </>
  )
}

export default Brand
