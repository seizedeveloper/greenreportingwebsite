import React from 'react'

const contact_us = () => {
  return (
    <div>
      <section className="py-5 mb-5 custom px-5">
        <div
          className="custom "
          style={{
            minWidth: '70%',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="container-fluid text-center">
            <h2 className="display-4 ralewayFont textColor">Contact Us</h2>
          </div>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            At Green Reporting, we’re here to support you on your journey to
            sustainability. Whether you have a question, need guidance, or want
            to learn more about how we can help, we’d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-5 mb-5 custom px-5">
        <div
          className="custom "
          style={{
            minWidth: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="container-fluid text-center">
            <h2 className="display-4 ralewayFont textColor">
              Reach Us via Email
            </h2>
          </div>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            <span>&#9993;</span>
            <b>support@green-reporting.com</b>
            <br />
            Our team is ready to assist you. We aim to respond to all inquiries
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-5 mb-5 custom px-5">
        <div
          className="custom"
          style={{
            minWidth: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="container-fluid text-center">
            <h2 className="display-4 ralewayFont textColor">Contact Form</h2>
          </div>
          <form
            style={{
              minWidth: '70%',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="form-label ralewayFont text-color"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="form-label ralewayFont text-color"
              >
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="description"
                className="form-label ralewayFont text-color"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="4"
                placeholder="Tell us about your query"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary ralewayFont"
              style={{ alignSelf: 'center', width: '150px' }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="py-5 mb-5 custom px-5">
        <div
          className="custom "
          style={{
            minWidth: '70%',
            justifyContent: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="container-fluid text-center">
            <h2 className="display-4 ralewayFont textColor">
              We’re Here to Help
            </h2>
          </div>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            Your sustainability goals are important to us. Let’s work together
            to make a difference—one step at a time.
          </p>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            <b>Start the conversation today!</b>
          </p>
        </div>
      </section>
    </div>
  )
}

export default contact_us
