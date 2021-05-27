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
import { Spring, useSpring, animated } from 'react-spring'

const useStyles = makeStyles(theme => ({
  section: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 0'
    },
    [theme.breakpoints.up('md')]: {
      padding: '40px 0'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '70px 0'
    },

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
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem'
    }
  },
  subtitle: {
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
      fontSize: '1.3rem'
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
    padding: '0px 16px'
    // borderRadius: '24px',
    // boxShadow:
    //   '0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)'
  },
  servicesGrid: {
    gridGap: '100px 0px',
    justifyContent: 'center',
    marginBottom: '32px'
  },
  salesforce_diagram_mobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  salesforce_diagram_desktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    }
  },
  servicesIcon: {
    width: 'auto',

    [theme.breakpoints.down('sm')]: {
      height: '70px'
    },
    [theme.breakpoints.up('md')]: {
      height: '80px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '100px'
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
    color: '#032d60',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem'
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
      fontSize: '1.3rem'
    }
  }
}))

const onChange = isVisible => {
  console.log(isVisible)
}

export default function ProductSection () {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.services}>
        <Chip label='SERVICES' className={classes.yellowChip} />
        <h2 className={classes.title}>What can we do for you?</h2>
        <GridContainer className={classes.servicesGrid}>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            className={classes.salesforce_diagram_mobile}
          >
            <img
              src={require('assets/img/salesforce_diagram.webp')}
              style={{ maxWidth: '100%' }}
              alt='Australian Digital'
            ></img>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce consultancy'
              description='We provide expertise on the Salesforce Platform whether you are looking to implement Sales Cloud, increase your Salesforce foot print with Service Cloud or add a customer or partner Community.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='System Integration'
              description='We are highly experienced at designing and building integrations between Salesforce and many other platforms. We are also highly accomplished at migrating data into new and existing Salesforce orgs.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic2.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Data Archiving Strategy and Design'
              description='We design and build Salesforce archiving solutions to prevent excess data conversations and costs and maximize the health and performance of your org.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic3-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Custom Developments'
              description='Although we strive for clicks not code where-ever possible we are also have highly experienced developers to build custom components, processes and Salesforce integrations.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic4-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            className={classes.salesforce_diagram_desktop}
          >
            <img
              src={require('assets/img/salesforce_diagram.webp')}
              style={{ maxWidth: '100%' }}
              alt='Australian Digital'
            ></img>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Admin Support'
              description='We provide a highly efficient admin support service which allows you to focus on doing what you do best. Running your business and growing your highly engaged customer base.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic5-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Salesforce Improvements'
              description='We are able to design and build improvements to your existing Salesforce org. Please talk to us about what we can improve for you.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic6-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='System Health Checks'
              description='We are able to evaluate the health of your Salesforce org and consult with the team to remediate issues and propose improvements.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic7-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.serviceRaised}>
            <InfoArea
              title='Application Architecture'
              description='We are able design CRM and business solutions that streamline your business processes and provide the very best customer and user experience.'
              src={
                <img
                  alt='Australian Digital'
                  className={classes.servicesIcon}
                  src={require('assets/img/ic8-min.webp')}
                ></img>
              }
              iconColor='info'
              vertical
            />
          </GridItem>
        </GridContainer>
        <Button
          color='#4B0082'
          size='lg'
          href='/service'
          rel='noopener noreferrer'
          className={classes.purpleButton}
        >
          VIEW FULL SERVICES
        </Button>
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
    </div>
  )
}
