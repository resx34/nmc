import React from 'react';
import './Staff.css';
import tuchin from './img/tuchin.png';
import PageTitle from '../PageTitle/PageTitle'
import StaffCard from '../staffCard/StaffCard'
import StaffCenter from './StaffCenter';
import StaffDeputy from './StaffDeputy';
import StaffLabTera from './StaffLabTera';
import StaffLabPhoto from './StaffLabPhoto';
import StaffLabSleep from './StaffLabSleep';

class Staff extends React.Component {
  render() {
    return (
      <>
        <PageTitle title="Сотрудники"></PageTitle>
        <div className="page">
          <div className="container">
            <section className="staff-one">
              <h2>Руководство центра</h2>
              <div className="flex-staff-list">
                <StaffCard 
                  href="https://www.sgu.ru/structure/fiz/news/2019-11-17/valeriy-viktorovich-tuchin-chlen-korrespondent-ran"
                  src = {tuchin}
                  head = "Тучин Валерий Викторович "
                  desc = "Руководитель научного медицинского центра СГУ"
                />  
              </div>
            </section>
            <section className="staff-one">
              <h2>Заместители руководителя</h2>
              <StaffDeputy/>
            </section>
            <section className="staff-one">
              <h2>Сотрудники лаборатории "Дистанционно управляемые системы для тераностики"</h2>
              <StaffLabTera/>
            </section>
            <section className="staff-one">
              <h2>Сотрудники лаборатории "Биомедицинской фотоакустики"</h2>
              <StaffLabPhoto/>
            </section>
            <section className="staff-one">
              <h2>Сотрудники лаборатории "Умного сна"</h2>
              <StaffLabSleep/>
            </section>
            <section className="staff-one">
              <h2>
                Сотрудники научно-методического центра психологической и педагогической 
                поддержки семей, имеющих детей с особыми образовательными потребностями
              </h2>
              <StaffCenter/>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Staff;