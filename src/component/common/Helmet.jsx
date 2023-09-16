import React from 'react'
import { Helmet } from 'react-helmet'

const PageHelmet = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta
          name="description"
          content="React Template will create that various landing Template, Creative Agency, And Corporate Website ."
        />
      </Helmet>
    </React.Fragment>
  )
}

export default PageHelmet
