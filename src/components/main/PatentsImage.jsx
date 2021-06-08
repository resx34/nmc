import React from 'react';
import patent1 from './img/patents/patent1.jpg';
import patent2 from './img/patents/patent2.jpg';
import patent3 from './img/patents/patent3.jpg';
import patent4 from './img/patents/patent4.jpg';
import patent5 from './img/patents/patent5.jpg';

function PatentsImage() {
    return (
        <div className="patents-image">
            <ul>
                <li><img src={patent1} alt="Патенты" /></li>
                <li><img src={patent2} alt="Патенты" /></li>
                <li><img src={patent3} alt="Патенты" /></li>
                <li><img src={patent4} alt="Патенты" /></li>
                <li><img src={patent5} alt="Патенты" /></li>
            </ul>
        </div>
    );
}
export default PatentsImage;