import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import InfoArea from 'components/InfoArea/InfoArea.js'
import Chip from '@material-ui/core/Chip'
import Button from 'components/CustomButtons/Button.js'

import { title } from 'assets/jss/material-kit-react.js'

const useStyles = makeStyles(theme => ({
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    position: 'relative',
    color: '#4B0082',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.5rem'
    }
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0',
    color: '#000000',
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
    marginTop: '100px'
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
    width: 'auto',

    [theme.breakpoints.down('sm')]: {
      height: '100px'
    },
    [theme.breakpoints.up('md')]: {
      height: '120px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '130px'
    }
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
    color: '#000000',
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
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem'
    }
  }
}))

export default function ProductSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      {/* <GridContainer justify='center'>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <img
            alt='Australian Digital'
            className={classes.productionImage}
            src={require('assets/img/about-min.webp')}
          ></img>
        </GridItem>

        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Chip label='ABOUT US' className={classes.yellowChip} />
          <h2 className={classes.title}>
            About <br />
            Australian Digital
          </h2>
          <h5 className={classes.subtitle}>
            We are a boutique Salesforce consultancy based in Sydney Australia.
            Our consultants all have multiple Salesforce certifications and have
            an excellent grasp of business and deep expertise and enthusiasm for
            the Salesforce platform.
          </h5>
          <Button
            color='#4B0082'
            href='/about'
            size='lg'
            rel='noopener noreferrer'
            className={classes.purpleButton}
          >
            ABOUT US
          </Button>
        </GridItem>
      </GridContainer> */}
      <div className={classes.services}>
        <Chip label='SERVICES' className={classes.yellowChip} />
        <h2 className={classes.title}>WHAT CAN WE DO FOR YOU?</h2>
        <GridContainer className={classes.servicesGrid}>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Pardot'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic1.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Marketing Cloud'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic2.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Service Cloud'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic3.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Service Cloud Voice'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic4.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Sales Cloud'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic5.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Custom Development'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic6.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Integration Design and Build'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic7.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5} className={classes.serviceRaised}>
            <InfoArea
              title='Custom Application Design and Build'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/sfic8.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <Button
            color='#4B0082'
            size='lg'
            href='/service'
            rel='noopener noreferrer'
            className={classes.purpleButton}
          >
            VIEW SERVICES
          </Button>
        </GridContainer>
      </div>
      <div className={classes.whycustomer}>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <Chip label='OUR WORK' className={classes.yellowChip} />
            <h2 className={classes.title}>
              Why Customers <br /> Love Us?
            </h2>
            <h5 className={classes.subtitle}>
              We are passionate About Salesforce and what it can do to transform
              your business when setup correctly. Our customers love us because
              we listen and understand and truly care about delivering an
              optimum solution to fit your business needs.
            </h5>
            <div className={classes.valueContainer}>
              <div className={classes.valueItemContainer}>
                <img
                  alt='Australian Digital'
                  className={classes.valueIcon}
                  src={require('assets/img/ico1h.webp')}
                ></img>
                Deep Business Understanding
              </div>

              <div className={classes.valueItemContainer}>
                <img
                  alt='Australian Digital'
                  className={classes.valueIcon}
                  src={require('assets/img/ico2h.webp')}
                ></img>
                Passionate about Salesforce
              </div>
            </div>

            <Button
              color='#4B0082'
              href='/about'
              size='lg'
              rel='noopener noreferrer'
              className={classes.purpleButton}
            >
              ABOUT US
            </Button>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <img
              alt='Australian Digital'
              className={classes.productionImage}
              src={require('assets/img/value.webp')}
            ></img>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.contact}>
        <h2 className={classes.title}>CONTACT US</h2>
        <GridContainer justify='center'>
          <GridItem
            className={classes.contactAddressContainer}
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <h4 className={classes.contactAddress}>
              PO Box 889, Neutral Bay,
              <br /> NSW, 2089,
              <br /> Australia
            </h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <h4 className={classes.contactPhone}>
              Monday to Friday 8AM to 6PM
              <br />
              Saturday 9AM to 1PM <br /> (Certainly for phone) +61 404 852 274
            </h4>
            <h4 className={classes.contactPhone}>
              enquiry@australian-digital.com
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
