import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const EMAIL_SERVICE_ID =
  process.env.REACT_APP_EMAIL_SERVICE_ID || 'service_c7itugm'
const EMAIL_TEMPLATE_ID =
  process.env.REACT_APP_EMAIL_TEMPLATE_ID || 'template_i3vhn7s'
const EMAIL_PUBLIC_API_KEY =
  process.env.REACT_APP_EMAIL_PUBLIC_API_KEY || 'Dl-yIa7PBTZ6JVVJb'

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  )
}

const Error = () => {
  return (
    <p className="error-message">
      Something went wrong. Please contact admin to support.
    </p>
  )
}

const ContactForm = () => {
  const [result, showResult] = useState(false)
  const [error, showError] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        e.target,
        EMAIL_PUBLIC_API_KEY
      )
      e.target.reset()
      showResult(true)
      showError(false)
    } catch (error) {
      showError(true)
      showResult(false)
    }
  }

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input type="text" name="fullName" placeholder="Your Name" required />
      </div>

      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="phone" placeholder="Phone Number" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="subject" placeholder="Subject" required />
      </div>

      <div className="rn-form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>

      <div className="rn-form-group">
        <button
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Submit Now
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
      <div className="rn-form-group">{error ? <Error /> : null}</div>
    </form>
  )
}

export default ContactForm
