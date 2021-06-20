import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import NavPills from 'components/NavPills/NavPills.js'
import InfoArea from 'components/InfoArea/InfoArea.js'


import { title } from 'assets/jss/material-kit-react.js'



export default function PortfolioSection() {

  const experienceRender = () => {
    return (<GridContainer className={classes.servicesGrid}>
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Education'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/education.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Healthcare'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/healthcare.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Engineering'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/engineering.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Retail'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/retail.svg')}
            ></img>
          }
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Banking'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/banking.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
         <InfoArea
          title='Government'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/government.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
         <InfoArea
          title='Councils'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/councils.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Finance'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/finance.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Manufacturing'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/manufacturing.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Oil and Gas'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/oilandgas.svg')}
            ></img>
          }
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
        <InfoArea
          title='Telco'
          iconColor='info'
          vertical
          src={
            <img
              alt='Australian Digital'
              className={classes.servicesIcon}
              src={require('assets/img/products/telco.svg')}
            ></img>
          }
        />
      </GridItem>
    </GridContainer>
    )
  }

  const productRender = () => {
    return (<GridContainer className={classes.servicesGrid}>
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
      <GridItem
        xs={12}
        sm={12}
        md={4}
        className={classes.serviceRaised}
      >
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
    )
  }


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
              tabButton: 'INDUSTRY EXPERIENCE',
              tabContent: experienceRender()
            },
            {
              tabButton: 'PRODUCTS',
              tabContent: productRender()
            }
          ]}
        />
      </div>
    </div>
  )
}

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
    borderRadius: '24px',
    boxShadow:
      '0 -3px 24px 2px rgb(0 0 0 / 5%), 0 6px 30px 5px rgb(0 0 0 / 0%), 0 8px 10px -5px rgb(0 0 0 / 0%)'
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
  servicesGrid: {
    gridGap: '100px 0px',
    justifyContent: 'center',
    marginBottom: '32px'
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