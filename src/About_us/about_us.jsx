import React from 'react'
import { useNavigate } from 'react-router-dom'

const about_us = () => {
  const navigate = useNavigate()

  const handelNavigation = (e, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <div>
      <section className="py-5 mb-5 custom px-5">
        <div className="custom" style={{ width: '100%', height: '40%' }}>
          <div
            className="container-fluid"
            style={{
              minWidth: '70%',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2 className="display-4 ralewayFont textColor">About Us</h2>
            <p
              className="lead ralewayFont text-color"
              style={{ marginBottom: '0' }}
            >
              At Green Reporting, we are committed to empowering businesses and
              individuals to take actionable steps toward a sustainable future.
              As a trusted partner in the journey to environmental
              accountability, we specialize in carbon emissions measurement,
              reporting, and reduction strategies tailored to meet your unique
              goals.
            </p>
          </div>
          <div style={{ minWidth: '30%' }}>
            <img className="img-1" src="..\rb_356.png" alt="" />
          </div>
        </div>
      </section>

      <section
        className="text-center custom py-5 mb-5"
        style={{ width: '100%' }}
      >
        <div
          className="container-fluid"
          style={{
            width: '80%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="display-4 ralewayFont textColor">Our Mission</h2>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            Our mission is to simplify carbon accounting and drive meaningful
            change by providing accurate, transparent, and actionable insights.
            We believe that understanding your environmental impact is the first
            step toward a greener, more sustainable tomorrow.
          </p>
        </div>
      </section>

      <section className="text-left py-5 mb-5" style={{ width: '100%' }}>
        <div
          className="container-fluid"
          style={{
            width: '80%',
            justifyContent: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <h2 className="display-4 ralewayFont textColor head">What We Do</h2>{' '}
          <div
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            <ul className="ul">
              <li>
                <b>Carbon Footprint Calculations:</b> Utilizing cutting-edge
                tools and methodologies, we provide precise assessments of your
                carbon emissions across various operations.
              </li>
              <li>
                <b>Customized Reporting Solutions:</b> Our tailored reports
                align with global standards such as GHG Protocol, ISO 14064, and
                more, ensuring compliance and credibility.
              </li>
              <li>
                <b>Actionable Recommendations:</b> Beyond reporting, we empower
                you with strategies and solutions to reduce your carbon
                footprint effectively.
              </li>
              <li>
                <b>Seamless Integrations:</b> Our user-friendly platform
                integrates effortlessly with your existing systems, making
                sustainability tracking straightforward.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-left py-5 mb-5" style={{ width: '100%' }}>
        <div
          className="container-fluid"
          style={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 className="display-4 ralewayFont textColor head">
            Why Choose Us?
          </h2>{' '}
          <div
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            <ul className="ul">
              <li>
                <b>Transparency You Can Trust:</b> Our data-driven approach
                ensures accuracy and integrity in all reports.
              </li>
              <li>
                <b>Sustainability Expertise:</b> With a dedicated team of
                environmental professionals, we bring a wealth of knowledge and
                passion to your green journey.
              </li>
              <li>
                <b>Future-Focused Technology:</b> Leveraging advanced analytics,
                AI, and automation, we help you stay ahead in the race to
                net-zero emissions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="text-center custom py-5 mb-5"
        style={{ width: '100%' }}
      >
        <div
          className="container-fluid"
          style={{
            width: '80%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className="display-4 ralewayFont textColor">
            Join Us on the Green Path
          </h2>
          <div
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            Every step toward sustainability matters. Let Green Reporting guide
            you on your journey to reduce carbon emissions and create a cleaner,
            healthier planet for generations to come.
            <br />
            <a
              className="nav-link textColor"
              href="/contact"
              onClick={(e) => handelNavigation(e, '/contact')}
              style={{ display: 'inline' }}
            >
              Contact us today&nbsp;
            </a>
            to start your green transformation!
          </div>
        </div>
      </section>
    </div>
  )
}

export default about_us
