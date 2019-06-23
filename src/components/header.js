import React from 'react'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap-scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style/main.scss'

import logo from '../images/logo.png'

const Header = ({ siteTitle }) => {
  AOS.init()
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-default my-nav">
        <div className="container">
          <a className="navbar-brand">
            <img className="logo" src={logo} alt="" />
            <span className="d-none d-sm-inline-block">
              Тендерное сопровождение
            </span>
          </a>
          <button
            className="navbar-toggler second-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="animated-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Цены
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Форма 2
                </a>
              </li>
              <li className="nav-item">
                <a href="calc.html" className="nav-link" href="#">
                  Калькулятор услуг
                </a>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-outline my-2 my-sm-0 send-form-outline"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Заказать
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
