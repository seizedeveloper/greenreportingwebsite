import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/gobal.css'

export default function header() {
  const navigate = useNavigate()

  const handelNavigation = (e, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <>
      <header className="textColor ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img
              src="./logo.png"
              alt=""
              className="logo"
              style={{ width: '4rem' }}
            />
            <h1 className="h1" style={{ margin: '0' }}>
              Green Reporting
            </h1>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item h3">
                <a
                  className="nav-link textColor"
                  href="/home"
                  onClick={(e) => handelNavigation(e, '/')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item h3">
                <a
                  className="nav-link textColor"
                  href="/about"
                  onClick={(e) => handelNavigation(e, '/about')}
                >
                  About
                </a>
              </li>

              <li className="nav-item h3">
                <a
                  className="nav-link textColor"
                  href="#contact"
                  onClick={(e) => handelNavigation(e, '/contact')}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item h3">
                <a className="nav-link textColor" href="#login">
                  Log In
                </a>
              </li>
              <li className="nav-item h3 free-trial">
                <a
                  className="btn btn-color ms-2 "
                  style={{
                    width: '10rem',
                    height: '3rem',
                    fontSize: '1.5rem',
                    border: 'solid 1px #879738',
                    borderRadius: '0.5rem',
                  }}
                  href="https://greenreportingwebapp-ecfd2a120043.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Trial
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
