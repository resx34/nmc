import React from 'react';
import inozemceva from './img/inozemceva.png';
import slepnev from './img/slepnev.png';
import femaleAvatar from './img/femaleAvatar.png';
import StaffCard from '../staffCard/StaffCard'


class StaffDeputy extends React.Component {
    render() {
        return (
            <div className="flex-staff-list">
                <StaffCard 
                    href="https://www.sgu.ru/person/inozemceva-olga-aleksandrovna"
                    src = {inozemceva}
                    head = "Иноземцева Ольга Александровна "
                    desc = "Заместитель руководителя по инновациям"
                    />
                <StaffCard 
                    href="https://www.sgu.ru/person/slepnev-andrey-vyacheslavovich"
                    src = {slepnev}
                    head = "Слепнев Андрей Вячеславович "
                    desc = "Заместитель руководителя по организационной работе"
                    />       
                <StaffCard 
                    href="https://www.sgu.ru/person/semyachkina-glushkovskaya-oksana-valerevna"
                    src = {femaleAvatar}
                    head = "Семячкина-Глушковская Оксана Валерьевна"
                    desc = "Заместитель руководителя по коммерциализации научных разработок"
                    />    
                <StaffCard 
                    href="https://www.sgu.ru/person/bucharskaya-alla-borisovna"
                    src = {femaleAvatar}
                    head = "Бучарская Алла Борисовна"
                    desc = "Заместитель руководителя по медицинским исследованиям"
                    />            
              </div>   
        );
    }
}

export default StaffDeputy;