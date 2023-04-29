import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid my-2">
          <a className="navbar-brand fw-bolder mx-5" href="/">Sawan.dev</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}
