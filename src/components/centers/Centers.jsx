import React from 'react';
import './Centers.css';
import PageTitle from '../PageTitle/PageTitle';
import centersLogo from './img/centers.jpg';
import StaffCenter from '../staff/StaffCenter'



function News() {
  return (
    <>
      <PageTitle title="Научные центры"></PageTitle>
      <div className="page">
        <div className="container">
            <h2>
            Научно-методический центр психологической и
            педагогической поддержки семей, имеющих детей с особыми
            образовательными потребностями
            </h2>
            <div className="centers">
                <div className="centers-img">
                    <img src={centersLogo} alt="Фото Центра"/>
                </div>
                <div className="centers-title">
                <section className="staff-one">
                    <h2>
                        Сотрудники
                    </h2>
                    <StaffCenter/>
                </section>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default News;