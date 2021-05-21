import React, {useState} from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import  picOne  from './img/block-link-1.jpg';
import  picTwo  from './img/block-link-2.jpg';
import ImageSlider from '../slider/ImageSlider';
import { SliderData } from '../slider/SliderData';

function OldMain() {

  const [block, setBlock] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 200 ) {
      setBlock(true);
    } 
  }

  const [link, setLink] = useState(false);

  const linkActive = () => {
    if(window.scrollY >= 1400 ) {
      setLink(true);
    } 
  }

  window.addEventListener ('scroll', changeBackground);
  window.addEventListener ('scroll', linkActive);
  
  return (
    <main>
      <div className="container">
          <article>
            <h2>
              В СГУ наряду с созданием факультета фундаментальной медицины и медицинских технологий открыт научный медицинский центр.
            </h2> 
            <h2>Задачи центра:</h2>
            <ul>
              <li>
                обеспечение научной составляющей
                нового факультета,
              </li>
              <li>
                проведение междисциплинарных
                исследований и разработок в
                приоритетных областях науки,
              </li>
              <li>
                проведение междисциплинарных
                исследований и разработок в
                приоритетных областях науки,
              </li>
            </ul>

            <div>
              Фундаментальные и прикладные исследования ведутся на междисциплинарном стыке медицины, химии, физики, биологии, биофотоники, 
              математического моделирования, компьютерных технологий, психологии. Научное направление Центра соответствует приоритету научно-технологического 
              развития Российской Федерации: «Переход к персонализированной медицине, высокотехнологичному здравоохранению и технологиям здоровьесбережения, 
              в том числе за счет рационального применения лекарственных препаратов (прежде всего антибактериальных)».
            </div>

          </article>

          
      </div>
      <div className={block ? 'animated-item-active' : 'animated-item'}>
        <div className={block ? 'item-active-text' : 'item-text'}>
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
        </div>
        <div className={block ? 'item-active-image' : 'item-image'}></div>
      </div>

      <div className="container">
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.


      </div>

      <div className={link ? 'block-link-active' : 'block-link'}>
        <div className="row-links">
          <div className={link ? 'lab-link-active' : 'lab-link'}>
            <img src={picOne} alt="pic"></img>
            <div className="link"><Link to='/labs'>Лаборатории</Link></div>
          </div>
          <div className={link ? 'center-link-active' : 'center-link'}>
          <img src={picTwo} alt="pic"></img>
            <div className="link"><Link to='/labs'>Центры</Link></div>  
          </div>
        </div>
      </div>

      <div className="container">
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
          Consequat esse elit Lorem deserunt do excepteur.
          Culpa culpa occaecat consectetur adipisicing labore ad magna dolor ex nisi labore quis dolor. 
          Non incididunt aliqua cupidatat non duis ad incididunt ex adipisicing culpa. Aute magna ut occaecat elit voluptate. 
          Nostrud dolor adipisicing consequat Lorem culpa exercitation labore ex ipsum. Adipisicing amet elit in do anim adipisicing.
          Dolore anim amet velit cupidatat non. Consequat veniam laborum esse amet sunt laboris labore nulla irure magna sit deserunt qui adipisicing. 
      </div>

      <ImageSlider slides={SliderData}/>

    </main>
  );
}
  
  export default OldMain;