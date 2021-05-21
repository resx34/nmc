import React from 'react';
import femaleAvatar from './img/femaleAvatar.png';
import maleAvatar from './img/maleAvatar.png';
import suhorukov from './img/suhorukov.png';
import tuchin from './img/tuchin.png';
import goryacheva from './img/goryacheva.png';
import svenskaya from './img/svenskaya.png';
import lomova from './img/lomova.png';

import StaffCard from '../staffCard/StaffCard'


class StaffLabTera extends React.Component {
    render() {
        return (
            <div className="flex-staff-list">
                <div className="flex-staff-list">
                    <StaffCard
                        href="https://www.sgu.ru/person/suhorukov-gleb-borisovich"
                        src = {suhorukov}
                        head = "Сухоруков Глеб Борисович"
                        desc="Научный руководитель проекта"
                    />
                </div>
                <div className="flex-staff-list">
                    <StaffCard
                        href="https://www.sgu.ru/person/tuchin-valeriy-viktorovich"
                        src = {tuchin}
                        head = "Тучин Валерий Викторович"
                        desc="Ведущий научный сотрудник "
                    />
                    <StaffCard
                        href="https://www.sgu.ru/person/maslyakova-galina-nikiforovna"
                        src = {femaleAvatar}
                        head = "Маслякова Галина Никифоровна"
                        desc="Ведущий научный сотрудник "
                    />
                    <StaffCard
                        href="https://www.sgu.ru/person/hlebcov-boris-nikolaevich"
                        src = {maleAvatar}
                        head = "Хлебцов Борис Николаевич"
                        desc="Ведущий научный сотрудник "
                    />
                </div>
                <div className="flex-staff-list">
                    <StaffCard 
                    href="https://www.sgu.ru/person/goryacheva-irina-yurevna"
                    src = {goryacheva}
                    head = "Ирина Юрьевна Горячева"
                    desc = "Ключевой сотрудник лаборатории"
                    />
                    <StaffCard 
                    href="https://www.sgu.ru/person/svenskaya-yulia-i?language=ru"
                    src = {svenskaya}
                    head = "Свенская Юлия Игоревна"
                    desc = "Ключевой сотрудник лаборатории"
                    />
                    <StaffCard 
                    href="https://www.sgu.ru/person/lomova-mariya-vladimirovna"
                    src = {lomova}
                    head = "Мария Владимировна Ломова"
                    desc = "Ключевой сотрудник лаборатории"
                    />  
                    <StaffCard 
                    href="#"
                    src = {maleAvatar}
                    head = "Георгий Сергеевич Терентюк"
                    desc = "Ключевой сотрудник лаборатории"
                    />  
                </div>
            </div>
        );
    }
}

export default StaffLabTera;