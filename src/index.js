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



ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/staff' component={Staff} />
        <Route path='/labs' component={Labs} />
        <Route path='/news' component={News} />
        <Route path='/contacts' component={Contacts} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
