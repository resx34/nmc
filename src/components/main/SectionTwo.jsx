import React from 'react';
import './SectionTwo.css';
import PatentsImage from './PatentsImage'

function SectionTwo() {
    return (
        <section className="second">
            <div className="container">
                <div className="patents">
                    <h3>Наука и патенты</h3>
                    <PatentsImage/>
                </div>
            </div>
        </section>
    );
}
export default SectionTwo;