import React from 'react';
import './Staff.css';
import ava from './img/ava-1.jpg';
import ava2 from './img/ava-2.jpg';
import ava3 from './img/ava-3.jpg';



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
                <h3>Научный руководитель проекта: Лаборатория «умного сна»</h3>
                Томас Уолтер Фридель Пензель, доктор естественных наук, проф., мировой лидер в области изучения физиологии сна и 
                руководитель междисциплинарного центра сомнологии в клинике Шарите (Берлин, Германия).
              </figcaption>
            </figure>

          </div>
          <div class="item">
            <figure>
              <img src={ava2} alt="фото сотрудника"></img>
              <figcaption>
              <h3>Научный руководитель проекта:  Лаборатория «Дистанционно управляемые системы для тераностики»
              </h3>
                Глеб Борисович Сухоруков, профессор Лондонского университета королевы Марии, к.ф.-м.н., проф. (Лондон, Великобритания).
              </figcaption>
            </figure>
          </div>

          <div class="item">
            <figure>
              <img src={ava3} alt="фото сотрудника"></img>
              <figcaption>
              <h3>Руководитель центра:  Научно-методический центр психологической и педагогической поддержки 
                семей, имеющих детей с особыми образовательными потребностями
              </h3>
                Марина Дмитриевна Коновалова, к. псих. н., доц.
              </figcaption>
            </figure>
          </div>

          <div class="item">4</div>
          <div class="item">5</div>
          <div class="item">6</div>
        </div>
      </div>  
      </main>
    );
  }
}
  
  export default Staff;