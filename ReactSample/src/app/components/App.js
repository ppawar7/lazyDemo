

import React from 'react';
import { Route, HashRouter } from 'react-router-dom'

import { JobPostComponent } from './JobPost';
import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';
import { Home } from './Home';
import {ContactUsComponent} from './ContactUs'


const AppComponent = () => {
  return (
      <div>
    <HeaderComponent />
    <Route path="/home" component={Home} />
    <Route path="/jobs" component={JobPostComponent} />
    <Route path="/contact" component={ContactUsComponent} />
    <FooterComponent />
    </div>
  );
}

export { AppComponent }

