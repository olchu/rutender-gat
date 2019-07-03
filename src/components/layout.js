import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ setShowModal, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tel
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          setShowModal={setShowModal}
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{children}</main>
        <footer>
          <div className="container">
            <div className="row  footer-content">
              <div className="col-sm-12 col-md-6">
                <ul className="nav ">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Цены <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Форма 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./calc.html">
                      Калькулятор услуг
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="footer-contact">
                  <div>Тел.: {data.site.siteMetadata.tel}</div>
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
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
