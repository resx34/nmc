import React from 'react';
import './Staff.css';
import ava from './img/ava-1.png';
import ava2 from './img/ava-2.png';
import ava3 from './img/ava-3.png';
import ava4 from './img/ava-4.png';
import ava5 from './img/ava-5.png';
import ava6 from './img/ava-6.png';
import ava7 from './img/ava-7.png';
import ava8 from './img/ava-8.png';
import ava9 from './img/ava-9.png';
import avatar from './img/avatar.png';
import PageTitle from '../PageTitle/PageTitle'
import StaffCard from '../staffCard/StaffCard'


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
                      src = {ava6}
                      head = "Тучин Валерий Викторович "
                      desc = "Руководитель научного медицинского центра СГУ"
                      />  
              </div>
            </section>
            <section className="staff-one">
              <h2>Заместители руководителя</h2>
              <div className="flex-staff-list">
                <StaffCard 
                    href="https://www.sgu.ru/person/inozemceva-olga-aleksandrovna"
                    src = {ava7}
                    head = "Иноземцева Ольга Александровна "
                    desc = "Заместитель руководителя по инновациям"
                    />
                <StaffCard 
                    href="https://www.sgu.ru/person/slepnev-andrey-vyacheslavovich"
                    src = {ava9}
                    head = "Слепнев Андрей Вячеславович "
                    desc = "Заместитель руководителя по организационной работе"
                    />       
                <StaffCard 
                    href="https://www.sgu.ru/person/semyachkina-glushkovskaya-oksana-valerevna"
                    src = {avatar}
                    head = "Семячкина-Глушковская Оксана Валерьевна"
                    desc = "Заместитель руководителя по коммерциализации научных разработок"
                    />    
                <StaffCard 
                    href="https://www.sgu.ru/person/bucharskaya-alla-borisovna"
                    src = {avatar}
                    head = "Бучарская Алла Борисовна"
                    desc = "Заместитель руководителя по медицинским исследованиям"
                    />            
              </div>   
            </section>
            <section className="staff-one">
              <h2>Сотрудники</h2>
              <div className="flex-staff-list">
                <StaffCard 
                  href="https://p220.ru/labs/scientists/penzel-tomas/"
                  src = {ava}
                  head = "Томас Уолтер Фридель Пензель, доктор естественных наук, проф."
                  desc = "Научный руководитель проекта: Лаборатория «умного сна»."
                  />
                  <StaffCard 
                  href="https://www.sgu.ru/person/suhorukov-gleb-borisovich"
                  src = {ava2}
                  head = "Глеб Борисович Сухоруков, к.ф.-м.н., проф."
                  desc = "Научный руководитель проекта:  Лаборатория «Дистанционно управляемые системы для тераностики»"
                  />
                  <StaffCard 
                  href="https://www.sgu.ru/person/konovalova-marina-dmitrievna"
                  src = {ava3}
                  head = "Марина Дмитриевна Коновалова, к. псих. н., доц."
                  desc = "Руководитель центра:  Научно-методический центр психологической и педагогической поддержки семей, имеющих детей с особыми образовательными потребностями"
                  />
                  <StaffCard 
                  href="https://www.sgu.ru/person/goryacheva-irina-yurevna"
                  src = {ava4}
                  head = "Ирина Юрьевна Горячева, д.х.н., проф"
                  desc = "Сотрудник лаборатории: «Дистанционно управляемые системы для тераностики»"
                  />
                  <StaffCard 
                  href="https://www.sgu.ru/person/lomova-mariya-vladimirovna"
                  src = {ava5}
                  head = "Мария Владимировна Ломова, к.ф.-м.н., с.н.с"
                  desc = "Сотрудник лаборатории: «Дистанционно управляемые системы для тераностики»"
                  />     
                  <StaffCard 
                  href="https://www.sgu.ru/structure/fiz/news/2019-11-17/valeriy-viktorovich-tuchin-chlen-korrespondent-ran"
                  src = {ava6}
                  head = "Валерий Викторович Тучин, чл.-корр. РАН, проф "
                  desc = "Сотрудник лаборатории биомедицинской фотоакустики"
                  />    
                  <StaffCard 
                  href="https://www.sgu.ru/person/inozemceva-olga-aleksandrovna"
                  src = {ava7}
                  head = "Ольга Александровна Иноземцева, к.х.н., с.н.с "
                  desc = "Сотрудник лаборатории биомедицинской фотоакустики"
                  />    
                  <StaffCard 
                  href="https://www.sgu.ru/person/bratashov-daniil-nikolaevich"
                  src = {ava8}
                  head = "Даниил Николаевич Браташов к.ф.-м.н., с.н.с "
                  desc = "Сотрудник лаборатории биомедицинской фотоакустики"
                  />  
                  <StaffCard 
                  href="https://www.sgu.ru/person/slepnev-andrey-vyacheslavovich"
                  src = {ava9}
                  head = "Андрей Вячеславович Слепнев, к.ф.-м.н., доц "
                  desc = "Заведующий лабораторией «умного сна»"
                  />                                           
              </div> 
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Staff;