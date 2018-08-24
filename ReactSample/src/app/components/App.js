

import React from 'react';
import { Route, HashRouter } from 'react-router-dom'

import { JobPostContainer } from '../containers/JobPostContainer';
import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';
import { Home } from './Home';
import {ContactUsComponent} from './ContactUs'


const AppComponent = () => {
  return (
      <div>
    <HeaderComponent />
    <Route exact path="/" component={Home} />
    <Route path="/jobs" component={JobPostContainer} />
    <Route path="/contact" component={ContactUsComponent} />
    <FooterComponent />
    </div>
  );
}

export { AppComponent }

