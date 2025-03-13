import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/gobal.css'

export default function Header() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNavigation = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto' // Enable scrolling
  }

  const [email, setEmail] = useState('')

  const handleJoinWaitlist = () => {
    console.log('User Email:', email)
    setShowModal(false)
    setEmail('')
    alert('You have successfully joined the waitlist!')
  }

  return (
    <>
      <header className="textColor">
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
                  onClick={(e) => handleNavigation(e, '/')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item h3">
                <a
                  className="nav-link textColor"
                  href="/about"
                  onClick={(e) => handleNavigation(e, '/about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item h3">
                <a
                  className="nav-link textColor"
                  href="#contact"
                  onClick={(e) => handleNavigation(e, '/contact')}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item h3 free-trial">
                <button
                  className="btn btn-color ms-2"
                  style={{
                    width: '10rem',
                    height: '3rem',
                    fontSize: '1rem',
                    border: 'solid 1px #879738',
                    borderRadius: '0.5rem',
                  }}
                  onClick={openModal}
                >
                  Join the Waitlist
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="textColor">Join the Waitlist</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <div className="modal-buttons">
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={handleJoinWaitlist}
              >
                Submit
              </button>
              <button className="btn btn-secondary my-3" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Styles */}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            width: 40%;
            position: relative;
          }
          
          .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 20px;
            cursor: pointer;
          }
          
          .email-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #879738; /* Greenish border */
  border-radius: 5px;
  background-color: #f8f9fa; /* Light gray background */
  color: #333; /* Dark text */
}

.email-input:focus {
  border-color: #4CAF50; /* Green focus effect */
  outline: none;
  background-color: #ffffff;
}

        `}
      </style>
    </>
  )
}
