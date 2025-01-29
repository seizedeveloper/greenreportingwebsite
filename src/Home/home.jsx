import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function home() {
  return (
    <>
      <section className="text-center py-5 mb-5" style={{ minWidth: '100vh' }}>
        <div className="container-fluid">
          <h2 className="display-4 ralewayFont textColor">
            Empowering Sustainability, One Report at a Time{' '}
          </h2>
          <p
            className="lead ralewayFont text-color"
            style={{ marginBottom: '0' }}
          >
            Green Reporting App is your gateway to a greener future.
          </p>
          <p className="lead ralewayFont text-color">
            {' '}
            Track, report, and analyze environmental impacts effortlessly.
          </p>
        </div>
      </section>

      {/* Second section */}
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
            <h2 className="display-4 ralewayFont textColor">
              Guiding Your Business towards a <br /> Greener Footprint
            </h2>
            <p
              className="lead ralewayFont text-color"
              style={{ marginBottom: '0' }}
            >
              Measure, Manage, and Minimize your carbon footprint
            </p>
            <div className="mt-5">
              <button className="btn-color m btn-size">Get Started Now</button>
              <button className="btn-outline btn-size">Learn More</button>
            </div>
          </div>
          <div style={{ minWidth: '30%' }}>
            <img src="..\_x30_3.png" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 mb-5 custom px-5">
        <div className="sustainability-container">
          <div className="illustration">
            <img
              src="../Group 3919.png"
              alt="Person presenting pie chart"
              className="img-fluid"
            />
          </div>
          <div className="extra-illustration">
            <img
              src="..\Group.png"
              alt="Additional pie chart"
              className="img-fluid"
            />
          </div>
          <div className="content lead ralewayFont text-color">
            <h2 className="display-4 ralewayFont textColor mb-5">
              Measure. Manage. Minimize
            </h2>
            <p className="lead ralewayFont text-color">
              Utilize our powerful software to measure and manage carbon
              emissions effectively.
              <br />
            </p>
            <p className="lead ralewayFont text-color">
              Empower your organization to make a positive impact on the
              environment.
              <br />
            </p>
            <p className="lead ralewayFont text-color">
              Identify areas for improvement and implement strategies to reduce
              emissions.
              <br />
            </p>
            <p className="lead ralewayFont text-color">
              Showcase your commitment to sustainability and responsible
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Measure Section */}
      <section className="py-5 mb-5 custom px-5">
        <div
          className="container-fluid"
          style={{
            minWidth: '60%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 className="display-4 ralewayFont textColor mb-5">Measure</h2>
          <p className="lead ralewayFont text-color">
            Gain a comprehensive understanding of your carbon footprint.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Accurately measure and quantify your organization's carbon emissions
            across various activities
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Robust data collection and analysis features provide a complete
            picture of your environmental impact.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Make informed decisions to reduce your carbon footprint and meet
            sustainability goals.
          </p>
        </div>
        <div style={{ minWidth: '10%' }}></div>
        <div style={{ minWidth: '30%', alignContent: 'right' }}>
          <img src="..\Group 3907.png" alt="" />
        </div>
      </section>

      {/* Manage Section  */}
      <section className="py-5 mb-5 custom px-5">
        <div style={{ minWidth: '30%', alignContent: 'center' }}>
          <img src="..\undraw_online-organizer_1kdy 1.png" alt="" />
        </div>
        <div style={{ minWidth: '10%' }}></div>
        <div
          className="container-fluid"
          style={{
            minWidth: '60%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 className="display-4 ralewayFont textColor mb-5">Manage</h2>
          <p className="lead ralewayFont text-color">
            Take control of your carbon data like never before.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Centralized platform for organizing and storing emission data.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Seamlessly integrate data from multiple sources
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Utilize data visualization and reporting tools for performance
            tracking.
          </p>
        </div>
      </section>

      <section className="py-5 mb-5 custom px-5">
        <div
          className="container-fluid"
          style={{
            minWidth: '60%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2 className="display-4 ralewayFont textColor mb-5">Minimize</h2>
          <p className="lead ralewayFont text-color">
            Drive meaningful emission reductions and demonstrate commitment to
            sustainability.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Go beyond measurement and management with actionable strategies to
            minimize your carbon footprint.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Leverage analytics and goal-setting features to identify emission
            hotspots and implement effective measures.
            <br />
          </p>
          <p className="lead ralewayFont text-color">
            Optimize resource management, adopt energy-efficient practices, and
            explore renewable energy solutions for substantial reductions.
          </p>
        </div>
        <div style={{ minWidth: '10%' }}></div>
        <div style={{ minWidth: '30%', alignContent: 'right' }}>
          <img src="..\Group 3914.png" alt="" />
        </div>
      </section>
    </>
  )
}
