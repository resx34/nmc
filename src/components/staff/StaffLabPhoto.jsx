import React from 'react';
import femaleAvatar from './img/femaleAvatar.png';
import inozemceva from './img/inozemceva.png';
import tuchin from './img/tuchin.png';
import bratashov from './img/bratashov.png';
import StaffCard from '../staffCard/StaffCard';


class StaffLabPhoto extends React.Component {
    render() {
        return (
            <div className="flex-staff-list">
                <div className="flex-staff-list">
                <StaffCard 
                    href="https://www.sgu.ru/person/inozemceva-olga-aleksandrovna"
                    src = {inozemceva}
                    head = "Иноземцева Ольга Александровна "
                    desc = "Руководитель лаборатории"
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
                        href="https://www.sgu.ru/person/semyachkina-glushkovskaya-oksana-valerevna"
                        src = {femaleAvatar}
                        head = "Семячкина-Глушковская Оксана Валерьевна"
                        desc = "Ведущий научный сотрудник"
                    /> 
                    <StaffCard
                        href="https://www.sgu.ru/person/genina-elina-alekseevna"
                        src = {femaleAvatar}
                        head = "Генина Элина Алексеевна"
                        desc="Ведущий научный сотрудник "
                    />
                    <StaffCard 
                        href="https://www.sgu.ru/person/bratashov-daniil-nikolaevich"
                        src = {bratashov}
                        head = "Даниил Николаевич Браташов"
                        desc = "Заведующий лабораторией"
                    />  
                </div>
            </div>
        );
    }
}

export default StaffLabPhoto;