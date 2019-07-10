import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap-scss'
import '../style/main.scss'
import logo from '../images/logo.png'
import 'animate.css/animate.min.css'

const Header = ({ siteTitle, setShowModal }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-default my-nav">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="" />
            <span className="d-none d-sm-inline-block">
              Тендерное сопровождение
            </span>
          </Link>
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
                <Link to="/" className="nav-link">
                  Цены
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Форма 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="calculator" className="nav-link">
                  Калькулятор услуг
                </Link>
              </li>
            </ul>

            <button
              onClick={setShowModal}
              className="btn btn-outline my-2 my-sm-0 send-form-outline"
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
