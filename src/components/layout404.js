import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Layout404 = ({ children }) => (
  <>
    <main>{children}</main>
    <footer>
      <div className="container">
        <div className="row  footer-content">
          <div className="col-sm-12 col-md-6">
            <ul className="nav ">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Цены <span className="sr-only">(current)</span>
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
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="footer-contact">
              <div>Тел.:</div>
              <div>e-mail.: your@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
      <section id="copyright">
        <div className="container">
          <div className="row justify-content-center copyright">
            © {new Date().getFullYear()} Copyright
          </div>
        </div>
      </section>
    </footer>
  </>
)

Layout404.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout404
