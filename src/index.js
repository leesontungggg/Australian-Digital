import React, { useEffect, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import {
  Router,
  Route,
  Switch,
  useLocation,
  BrowserRouter
} from 'react-router-dom'
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef
} from '@react-spring/web'
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'

import 'assets/scss/material-kit-react.scss?v=1.9.0'

// pages for this product

const LandingPage = React.lazy(() => import('views/LandingPage/LandingPage.js'))
const AboutPage = React.lazy(() => import('views/AboutPage/AboutPage.js'))
const ServicePage = React.lazy(() => import('views/ServicePage/ServicePage.js'))
const PortfolioPage = React.lazy(() =>
  import('views/PortfolioPage/PortfolioPage.js')
)
const ContactPage = React.lazy(() => import('views/ContactPage/ContactPage.js'))

function App () {
  const location = useLocation()
  const transRef = useSpringRef()
  const routesTransition = useTransition(
    location,
    location => location.pathname,
    {
      ref: transRef,
      keys: null,
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
    }
  )

  useEffect(() => {
    transRef.start()
  }, [location])
  return (
    <>
      <Header
        color='transparent'
        brand='Material Kit React'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: 'black'
        }}
      />
      {routesTransition.map((props, item) => {
        console.log(item)
        return (
          <animated.div style={props}>
            <Switch location={item}>
              <Route path='/about' component={AboutPage} />
              <Route path='/service' component={ServicePage} />
              <Route path='/portfolio' component={PortfolioPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/' component={LandingPage} />
            </Switch>
          </animated.div>
        )
      })}
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={() => <div></div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
