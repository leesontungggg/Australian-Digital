import React, { useState } from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

import { title } from 'assets/jss/material-kit-react.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from 'components/CustomButtons/Button.js'
import TextField from '@material-ui/core/TextField'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
})

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
      fontSize: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.5rem'
    }
  },
  formTitle: {
    ...title,
    marginTop: '16px',
    minHeight: '32px',
    textDecoration: 'none',
    position: 'relative',
    color: '#FFBC42',
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
  yellowSubmitButton: {
    background: '#FFBC42',
    borderRadius: '50px',
    padding: '12px 30px',
    marginTop: '32px',
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
  },
  imgPortfolio: {
    width: '100%',
    height: 'auto'
  },
  dFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formControl: {
    minWidth: 120,
    textAlign: 'start',
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-input': {
      color: 'white'
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .MuiInputLabel-outlined': {
      color: 'white'
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'white'
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'white'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textFieldSpacing: {
    textAlign: 'start',
    marginTop: theme.spacing(2),
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-input': {
      color: 'white'
    },
    '&:hover .MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: 'white'
    },
    '& .MuiInputLabel-outlined': {
      color: 'white'
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'white'
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'white'
    }
  },
  textFieldWhite: {
    color: 'white'
  },
  formContainer: {
    margin: theme.spacing(2),
    backgroundColor: '#40348E',
    borderRadius: '5%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      padding: '40px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '60px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '80px'
    }
  }
}))

export default function ContactSection () {
  const [isSuccess, setIsSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com'
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      values.oid = '00D5g000004Q7r1'
      values.submit = 'Submit'
      values['00N5g000006oAit'] = 'Australian Digital'
      values.lead_source = 'Web'

      fetch(
        'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
        {
          method: 'POST',
          mode: 'no-cors',
          body: new URLSearchParams(values)
        }
      ).then(function (response) {
        console.log(response)
        setIsSuccess(true)
      })
    }
  })

  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.services}>
        <GridContainer justify='center'>
          <GridItem
            className={classes.dFlexCenter}
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            <h2 className={classes.title}>CONTACT US</h2>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <img
              alt='Australian Digital'
              className={classes.productionImage}
              src={require('assets/img/teamwork.svg')}
            ></img>
          </GridItem>
        </GridContainer>
        <form onSubmit={formik.handleSubmit}>
          <GridContainer className={classes.formContainer} justify='center'>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <h3 className={classes.formTitle}>Contact Form</h3>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='first_name'
                name='first_name'
                label='First Name'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='last_name'
                name='last_name'
                label='Last Name'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='title'
                name='title'
                label='Title'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='email'
                name='email'
                label='Email'
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoComplete='off'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='company'
                name='company'
                label='Company'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='city'
                name='city'
                label='City'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem> */}
            {/* <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='state'
                name='state'
                label='State/Province'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem> */}
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                variant='outlined'
                id='description'
                name='description'
                label='Description'
                onChange={formik.handleChange}
                autoComplete='off'
              />
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                select
                variant='outlined'
                id='00N5g000006oAit'
                name='00N5g000006oAit'
                label='Business'
                onChange={formik.handleChange}
                autoComplete='off'
                value={'Australian Digital'}
              >
                <MenuItem value={'Australian Digital'}>
                  Australian Digital
                </MenuItem>
                <MenuItem value={'Global Aspects'}>Global Aspects</MenuItem>
              </TextField>
            </GridItem> */}

            {/* <GridItem xs={12} sm={6} md={6} lg={6}>
              <TextField
                className={classes.textFieldSpacing}
                fullWidth
                select
                variant='outlined'
                id='lead_source'
                name='lead_source'
                label='Lead Source'
                onChange={formik.handleChange}
                autoComplete='off'
              >
                <MenuItem value={'Advertisement'}>Advertisement</MenuItem>
                <MenuItem value={'Employee Referral'}>
                  Employee Referral
                </MenuItem>
                <MenuItem value={'External Referral'}>
                  External Referral
                </MenuItem>
                <MenuItem value={'Partner'}>Partner</MenuItem>
                <MenuItem value={'Public Relations'}>Public Relations</MenuItem>
                <MenuItem value={'Seminar - Internal'}>
                  Seminar - Internal
                </MenuItem>
                <MenuItem value={'Seminar - Partner'}>
                  Seminar - Partner
                </MenuItem>
                <MenuItem value={'Trade Show'}>Trade Show</MenuItem>
                <MenuItem value={'Web'}>Web</MenuItem>
                <MenuItem value={'Word of mouth'}>Word of mouth</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
                <MenuItem value={'Australian Digital Website'}>
                  Australian Digital Website
                </MenuItem>
                <MenuItem value={'Global Aspects Website'}>
                  Global Aspects Website
                </MenuItem>
              </TextField>
            </GridItem> */}
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Button
                className={classes.yellowSubmitButton}
                variant='contained'
                type='submit'
              >
                Submit
              </Button>
            </GridItem>

            {isSuccess ? (
              <GridItem
                style={{ textAlign: 'center' }}
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <h4>Successfully Submitted!</h4>
              </GridItem>
            ) : null}
          </GridContainer>
        </form>
      </div>

      <div className={classes.contact}>
        <h2 className={classes.title}>CONTACT US</h2>
        <GridContainer justify='center'>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <h4 className={classes.contactAddress}>
              PO Box 889, Neutral Bay,
              <br /> NSW, 2089,
              <br /> Australia
            </h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={6}>
            <h4 className={classes.contactPhone}>
              +61 404 852 274 <br />
              enquiry@australian-digital.com
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
