import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/logo.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import drupal from '../images/drupal.svg';
import wordpress from '../images/wordpress.svg';
import spectrum from '../images/spectrum.svg';

const Header = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  align-items: center;
  padding: 1rem 0;
`;

const Navbar = styled.nav`
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 600;
  font-size: 18px;
  position: relative;

  &.active {
    color: #777;
  }
`;

export default ({ siteTitle }) => (
  <Header>
    <img
      src={logo}
      style={{
        height: 36,
        marginBottom: 0,
        marginRight: '0.75rem',
      }}
    />
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          // color: 'white',
          color: '#222222',
          textDecoration: 'none',
          fontSize: '24px',
          lineHeight: '36px',
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <Navbar>
      <NavLink to="/page-2/" activeClassName="active">
        Documentation
      </NavLink>
      <NavLink to="/features" activeClassName={'active'}>
        Features
      </NavLink>
      <NavLink to="/blog" activeClassName={'active'}>
        Blog
      </NavLink>
    </Navbar>

    <div style={{ marginLeft: 'auto', alignItems: 'center', display: 'flex' }}>
      <img src={github} style={{ height: '24px', marginLeft: '0.75rem' }} />
      <img src={twitter} style={{ height: '24px', marginLeft: '0.75rem' }} />
      <img src={drupal} style={{ height: '24px', marginLeft: '0.75rem' }} />
      <img src={wordpress} style={{ height: '24px', marginLeft: '0.75rem' }} />
      <img src={spectrum} style={{ height: '18px', marginLeft: '0.75rem' }} />
    </div>
  </Header>
);
