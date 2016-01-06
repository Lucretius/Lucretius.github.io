import React from 'react'
import Radium from 'radium'

class Page extends React.Component {
  render() {
    var fillerText = (
      <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
    )

    return (
      <div style={styles.page}>
        <div style={styles.titleSection} className="row center-xs middle-xs">
          <div styles={styles.headline} className="col-xs-12">
            <h1>Robert Lippens</h1>
            <div style={{paddingBottom: 100}}>Full Stack Developer</div>
            <a key="about" style={styles.ghostButton} href="#">About</a>
            <a key="email" style={styles.ghostButton} href="mailto:rlippens39@gmail.com">Email</a>
          </div>
          <div className="col-xs-12 around-xs center-xs">

          </div>
        </div>
        <div style={[styles.section, styles.first]} className="row center-xs middle-xs">
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Front-End Development</h1>
            {fillerText}
          </div>
          <div className="col-xs-12 col-md-5">
            <div style={styles.image}></div>
          </div>
        </div>
        <div style={[styles.section, styles.second]} className="row center-xs middle-xs">
          <div className="col-xs-12 col-md-5">
            <div style={styles.image}></div>
          </div>
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Server-Side Code</h1>
            {fillerText}
          </div>
        </div>
        <div style={[styles.section, styles.third]} className="row center-xs middle-xs">
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Passion</h1>
            {fillerText}
          </div>
          <div className="col-xs-12 col-md-5">
            <div style={styles.image}></div>
          </div>
        </div>
        <div style={[styles.section, styles.footer]} className="row center-xs">
          Contact Me
        </div>
      </div>
    )
  }
}

var styles={
  page: {
    fontFamily: "'Lustria', sans-serif",
    color: 'white',
  },
  logos: {
    padding: 100,
  },
  headline: {
    marginBottom: 50,
  },
  titleSection: {
    fontSize: '2em',
    background: '#ffffff',
    color: '#E91E63',
    height: 400,
  },
  section: {
    backgroundColor: '#6A1B9A',
    fontSize: '20px',
    textAlign: 'justify',
    lineHeight: '1.5',
    padding: '0 20px',
  },
  reactLogo: {
    height: '45px',
    paddingBottom: '8px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  htmlLogo: {
    height: '60px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  footer: {
    backgroundColor: '#E91E63',
  },
  image: {
    backgroundColor: 'black',
    height: '100%',
    maxHeight: '600px',
    border: '1px solid black',
    borderRadius: '2%',
    margin: 50,
  },
  ghostButton: {
    border: '2px solid #E91E63',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#E91E63',
    borderRadius: '7%',
    textDecoration: 'none',
    padding: '5px 20px',
    margin: 40,
    transition: 'all ease 500ms',
    ':hover': {
      color: '#6A1B9A',
      border: '2px solid #6A1B9A'
    },
  }
}

module.exports = Radium(Page)
