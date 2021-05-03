import React from 'react';
import './Staff.css';
import ava from './img/ava-1.jpg';
import ava2 from './img/ava-2.jpg';
import ava3 from './img/ava-3.jpg';
import ava4 from './img/ava4.jpg';
import ava5 from './img/ava-5.png';
import ava6 from './img/ava-6.jpg';
import ava7 from './img/ava-7.jpg';
import ava8 from './img/ava-8.jpg';
import ava9 from './img/ava-9.jpeg';




class Staff extends React.Component {
    render() {
    return (
      <main>

        <h1 className="main-name">
          <div className="main-name-text">
            Сотрудники
          </div>
        </h1>

      <div className="container">
        <div class="flex-staff-list">
          <div class="item">

            <figure>
              <img src={ava} alt="фото сотрудника"></img>
              <figcaption>
                <h3> Томас Уолтер Фридель Пензель, доктор естественных наук, проф. </h3>
                Научный руководитель проекта: Лаборатория «умного сна». 
              </figcaption>
            </figure>

          </div>
          <div class="item">
            <a href="https://www.sgu.ru/person/suhorukov-gleb-borisovich" target="blank">
            <figure>
              <img src={ava2} alt="фото сотрудника"></img>
              <figcaption>
                <h3> Глеб Борисович Сухоруков, к.ф.-м.н., проф.</h3>
                Научный руководитель проекта:  Лаборатория «Дистанционно управляемые системы для тераностики»
              </figcaption>
            </figure>
            </a>
          </div>

          <div class="item">
            <figure>
              <img src={ava3} alt="фото сотрудника"></img>
              <figcaption>
                <h3> Марина Дмитриевна Коновалова, к. псих. н., доц.</h3>
                Руководитель центра:  Научно-методический центр психологической и педагогической поддержки 
                семей, имеющих детей с особыми образовательными потребностями
              </figcaption>
            </figure>
          </div>

          <div class="item">            
            <a href="https://www.sgu.ru/person/goryacheva-irina-yurevna" target="blank">
              <figure>
                <img src={ava4} alt="фото сотрудника"></img>
                <figcaption>
                  <h3>И.Ю. Горячева, д.х.н., проф</h3>
                  Сотрудник лаборатории: «Дистанционно управляемые системы для тераностики»
                </figcaption>
              </figure>
              </a>
            </div>
          <div class="item">
            <a href="https://www.sgu.ru/person/lomova-mariya-vladimirovna" target="blank">
              <figure>
                <img src={ava5} alt="фото сотрудника"></img>
                <figcaption>
                  <h3> М.В. Ломова, к.ф.-м.н., с.н.с</h3>
                  Сотрудник лаборатории: «Дистанционно управляемые системы для тераностики»
                </figcaption>
              </figure>
            </a>
          </div>
          <div class="item">
            <a href="https://www.sgu.ru/structure/fiz/news/2019-11-17/valeriy-viktorovich-tuchin-chlen-korrespondent-ran" target="blank">
              <figure>
                <img src={ava6} alt="фото сотрудника"></img>
                <figcaption>
                  <h3> В.В. Тучин, чл.-корр. РАН, проф </h3>
                  Сотрудник лаборатории биомедицинской фотоакустики
                </figcaption>
              </figure>
            </a>
          </div>

          <div class="item">
            <a href="https://www.sgu.ru/person/inozemceva-olga-aleksandrovna" target="blank">
              <figure>
                <img src={ava7} alt="фото сотрудника"></img>
                <figcaption>
                  <h3> О.А. Иноземцева, к.х.н., с.н.с </h3>
                  Сотрудник лаборатории биомедицинской фотоакустики
                </figcaption>
              </figure>
            </a>
          </div>

          <div class="item">
            <a href="https://www.sgu.ru/person/bratashov-daniil-nikolaevich" target="blank">
              <figure>
                <img src={ava8} alt="фото сотрудника"></img>
                <figcaption>
                  <h3> Д.Н. Браташов к.ф.-м.н., с.н.с </h3>
                  Сотрудник лаборатории биомедицинской фотоакустики
                </figcaption>
              </figure>
            </a>
          </div>

          <div class="item">
            <a href="https://www.sgu.ru/person/slepnev-andrey-vyacheslavovich" target="blank">
              <figure>
                <img src={ava9} alt="фото сотрудника"></img>
                <figcaption>
                  <h3> Андрей Вячеславович Слепнев, к.ф.-м.н., доц </h3>
                  Заведующий лабораторией «умного сна»
                </figcaption>
              </figure>
            </a>
          </div>

        </div>
      </div>  
      </main>
    );
  }
}
  
  export default Staff;