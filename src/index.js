import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/main/Main';
import Contacts from './components/contacts/Contacts';
import News from './components/news/News';
import Staff from './components/staff/Staff';
import Labs from './components/labs/Labs';
import Centers from './components/centers/Centers';
import Services from './components/services/Services'
import ScrollToTop from './components/scrollToTop/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <App>
    <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/staff' component={Staff} />
        <Route path='/services' component={Services} />
        <Route path='/labs' component={Labs} />
        <Route path='/centers' component={Centers} />
        <Route path='/news' component={News} />
        <Route path='/contacts' component={Contacts} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
