import React from 'react';
import { Link } from 'react-router-dom';
import './SectionOne.css';

function SectionOne() {
    return (
    <section className="ones">
      <div className="container">
        <div className="title">
          <h2>
            В СГУ наряду с созданием факультета фундаментальной медицины и медицинских технологий открыт научный медицинский центр.
          </h2>
          <p>Фундаментальные и прикладные исследования ведутся на междисциплинарном стыке медицины, химии, физики, биологии, биофотоники, 
            математического моделирования, компьютерных технологий, психологии.
          </p>
        </div>
        </div>
      <div className="line"></div>
      <div className="container">
        <div className="flex-links">
          <div className="mainitem"><Link to='/labs'>Лаборатории</Link></div>
          <div className="side-item">
            <div className="links-item-first"><Link to='/centers'>Научные центры</Link></div>
            <div className="links-item-second"><Link to='/services'>Услуги центра</Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionOne;        