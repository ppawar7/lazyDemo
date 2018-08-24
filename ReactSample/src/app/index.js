
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, HashRouter,IndexRoute } from 'react-router-dom'



import { AppComponent } from './components/App';
import { Login } from './components/Login';


import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'
import 'mdbreact/dist/css/mdb.css'
import '../assets/styles.css'

import { store, history } from './store/index'


const App = () => (
    <Provider store={store}>
        <HashRouter>
            <ConnectedRouter history={history}>
                <div>
                    <div className="mainContent">
                      <AppComponent  />
                    </div>
                </div>
            </ConnectedRouter>
        </HashRouter>
    </Provider>
);

render(<App />, document.getElementById("root"));
