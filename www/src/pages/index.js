import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../images/logo.svg';
import flask from '../images/flask.svg';
import infinite from '../images/infinite.svg';
import desktop from '../images/desktop.svg';

import Layout from '../components/layout'

const Intro = styled.section`
  background: linear-gradient(to bottom, #ffffff, #f7f7f7);
  padding: 6rem 3rem;
  text-align: center;

  a {
    background: #3caf49;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-size: 18px;
    border: 1px solid;
    transition: 0.2s all;
    
    &:hover {
      background: none;
      color: #3caf49;
    }
  }
`;

const Features = styled.section`
  display: flex;
  padding: 6rem 0 6rem;
  margin: 0 auto;
  max-width: 1140px;
  text-align: center;
`;

const IconBox = styled.div`
  width: 33.33333%;

  p {
    margin-bottom: 2rem;
  }
`;

const Icon = styled.img`
  max-height: 48px;
`;

const IconBoxLink = styled(Link)`
  color: #3caf49;
  border: 1px solid;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  width: 128px;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  transition: 0.2s all;

  &:hover {
    background: #3caf49;
    color: #fff;
  }
`;

const IndexPage = () => (
  <Layout>
    <Intro>
      <img
        src={logo}
        alt="Mozart.js"
        style={{
          maxHeight: 128,
          marginBottom: '2rem'
        }}
      />
      <h1
        style={{
          fontWeight: 800,
          fontSize: '48px',
          marginBottom: '0.5rem',
          marginTop: 0,
        }}>
          Introducing Mozart
        </h1>
      <p style={{
        color: '#777',
        fontSize: '24px',
        marginTop: 0,
        marginBottom: '2rem',
      }}>An open source page builder powered by React.js.</p>
      <Link to="/page-2/">Get Started</Link>
    </Intro>
    <Features>
      <IconBox>
        <Icon src={desktop} />
        <h3>Desktop Application</h3>
        <p>Mozart for Mac, Windows, or Linux</p>
        <IconBoxLink to="/page-2/">Download</IconBoxLink>
      </IconBox>
      <IconBox>
        <Icon src={flask} />
        <h3>Javascript API</h3>
        <p>Building custom Mozart components</p>
        <IconBoxLink to="/page-2/">Documentation</IconBoxLink>
      </IconBox>
      <IconBox>
        <Icon src={infinite} />
        <h3>Component Library</h3>
        <p>Choose from a variety of components</p>
        <IconBoxLink to="/page-2/">Browse</IconBoxLink>
      </IconBox>
    </Features>
  </Layout>
)

export default IndexPage
