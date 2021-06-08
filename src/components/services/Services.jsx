import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Vivarium from './Vivarium';
import Ckp from './Ckp';
import './Services.css';

class Services extends React.Component {
  render() {
    return (
      <>
        <PageTitle title="Услуги"></PageTitle>
        <div className="page">
          <div className="container">
            <h2>Научный медицинский центр СГУ предоставляет следующие услуги:</h2>
            <Vivarium/>
            <Ckp/>
          </div>
        </div>
      </>
    );
  }
}
export default Services;
