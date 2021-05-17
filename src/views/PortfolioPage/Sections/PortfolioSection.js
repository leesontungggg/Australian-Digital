import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import NavPills from 'components/NavPills/NavPills.js'

import { title } from 'assets/jss/material-kit-react.js'

const useStyles = makeStyles(theme => ({
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '3rem',
    marginTop: '16px',
    minHeight: '32px',
    textDecoration: 'none',
    position: 'relative',
    color: '#4B0082',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem'
    }
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0',
    color: '#032d60',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.313rem'
    }
  },
  description: {
    color: '#999'
  },
  yellowChip: {
    color: '#FFBC42',
    backgroundColor: '#FCA80F21',
    fontWeight: 900
  },
  productionImage: {
    width: '100%',
    height: 'auto'
  },
  purpleButton: {
    background: '#4B0082',
    borderRadius: '50px',
    padding: '12px 30px'
  },
  services: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '50px'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '75px'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '100px'
    }
  },
  serviceRaised: {
    margin: '0px 16px',
    borderRadius: '24px',
    boxShadow:
      '0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)'
  },
  servicesGrid: {
    gridGap: '40px 20px',
    justifyContent: 'center'
  },
  servicesIcon: {
    width: '60px',
    height: '60px'
  },
  whycustomer: {
    marginTop: '100px'
  },
  valueContainer: {
    marginTop: 20,
    marginBottom: 20,
    color: '#4B0082'
  },
  valueIcon: {
    marginRight: 16
  },
  valueItemContainer: {
    padding: '4px 0px'
  },
  contact: {
    marginTop: '100px'
  },
  contactAddressContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  contactAddress: {
    textAlign: 'start',
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0',
    color: '#032d60',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem'
    }
  },
  contactPhone: {
    textAlign: 'end',
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0',
    color: '#032d60',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem'
    }
  },
  imgPortfolio: {
    width: '100%',
    height: 'auto'
  }
}))

export default function PortfolioSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.services}>
        <h2 className={classes.title}>Our Portfolio</h2>
        <NavPills
          color='primary'
          alignCenter
          tabs={[
            {
              tabButton: 'SALESFORCE',
              tabContent: (
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p1-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p2-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p3-min.jpg')}
                    ></img>
                  </GridItem>
                </GridContainer>
              )
            },
            {
              tabButton: 'PARTNER',
              tabContent: (
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p1-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p2-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p3-min.jpg')}
                    ></img>
                  </GridItem>
                </GridContainer>
              )
            },
            {
              tabButton: 'MARKETING AUTOMATION',
              tabContent: (
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p1-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p2-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p3-min.jpg')}
                    ></img>
                  </GridItem>
                </GridContainer>
              )
            },
            {
              tabButton: 'INDUSTRY EXPERIENCE',
              tabContent: (
                <GridContainer justify='center'>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p1-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p2-min.jpg')}
                    ></img>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <img
                      alt='Australian Digital'
                      className={classes.imgPortfolio}
                      src={require('assets/img/p3-min.jpg')}
                    ></img>
                  </GridItem>
                </GridContainer>
              )
            }
          ]}
        />
      </div>
    </div>
  )
}
