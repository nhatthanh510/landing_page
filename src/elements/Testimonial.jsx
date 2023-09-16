import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import testimonial_1 from '../assets/images/client/testimonial-1.jpg'
import testimonial_2 from '../assets/images/client/testimonial-2.jpg'
import testimonial_3 from '../assets/images/client/testimonial-3.jpg'
import testimonial_4 from '../assets/images/client/testimonial-4.jpg'
import testimonial_5 from '../assets/images/client/testimonial-5.jpg'
import testimonial_6 from '../assets/images/client/testimonial-6.jpg'
import testimonial_7 from '../assets/images/client/testimonial-7.jpg'
import testimonial_8 from '../assets/images/client/testimonial-8.jpg'

const Testimonial = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Aklima The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Fatima Asrafy standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES,
                    INC.
                  </h6>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Jannat Tumpa The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections Bonorum et
                    Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    John Doe The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections Bonorum et Malorum
                    original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections Bonorum et
                    Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>
                    Lorem Ipsum used since the 1500s is reproduced below for
                    those interested. Sections Bonorum et Malorum original.
                  </p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div>
              </div>
            </TabPanel>

            <TabList className="testimonial-thumb-wrapper">
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_1} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_2} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_3} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_4} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_5} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_6} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_7} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={testimonial_8} alt="Testimonial Images" />
                  </div>
                </div>
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Testimonial
