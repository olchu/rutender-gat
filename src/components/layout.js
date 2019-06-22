import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div class="container">
            <div class="row  footer-content">
              <div class="col-sm-12 col-md-6">
                <ul class="nav ">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      Цены <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Форма 2
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./calc.html">
                      Калькулятор услуг
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="footer-contact">
                  <div>Тел.: {data.site.siteMetadata.tel}</div>
                  <div>e-mail.: your@mail.ru</div>
                </div>
              </div>
            </div>
          </div>
          <section id="copyright">
            <div class="container">
              <div class="row justify-content-center copyright">
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
