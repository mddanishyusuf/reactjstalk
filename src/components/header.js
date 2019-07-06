import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap'

import './style/header.scss'

const Header = ({ siteTitle }) => (
    <header
        style={{
            color: `#fff`,
        }}
    >
        <Navbar collapseOnSelect expand="lg" className="navbar-container">
            <Navbar.Brand>
                {' '}
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    <img src="/images/reactjstalk-logo.png" width="150" alt={siteTitle} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className="search-box">
                    {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                    <FormControl
                        placeholder="Search React Talks"
                        aria-label="Search React Talks"
                        aria-describedby="basic-addon1"
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
