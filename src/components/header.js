import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap-scss'
import '../style/main.scss'
import logo from '../images/logo.png'
import 'animate.css/animate.min.css'

const Header = ({ siteTitle, setShowModal, path }) => {
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <header>
      <Navbar variant="default" fixed="top" expand="md" className="my-nav">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="" />
            <span className="d-none d-sm-inline-block">
              Тендерное сопровождение
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="my-togle"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div class={openMenu ? 'animated-icon2 open' : 'animated-icon2'}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="mobileMenu">
            <Nav className="mr-auto">
              <Nav.Link href="/">Цены</Nav.Link>
              <Nav.Link href="/">Форма 2</Nav.Link>
              <Nav.Link active={path === '/calc/'} href="/calc">
                Калькулятор услуг
              </Nav.Link>
            </Nav>
            <button
              onClick={setShowModal}
              className="btn btn-outline my-2 my-sm-0 send-form-outline"
            >
              Заказать
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
