import React from 'react';
import femaleAvatar from './img/femaleAvatar.png';
import maleAvatar from './img/maleAvatar.png';
import penzel from './img/penzel.png';
import tuchin from './img/tuchin.png';
import slepnev from './img/slepnev.png';
import StaffCard from '../staffCard/StaffCard';


class StaffLabSleep extends React.Component {
    render() {
        return (
            <div className="flex-staff-list">
                <div className="flex-staff-list">
                    <StaffCard 
                        href="https://p220.ru/labs/scientists/penzel-tomas/"
                        src = {penzel}
                        head = "Томас Уолтер Фридель Пензель"
                        desc = "Научный руководитель проекта"
                    />
                </div>
                <div className="flex-staff-list">
                    <StaffCard 
                        href="https://www.sgu.ru/person/slepnev-andrey-vyacheslavovich"
                        src = {slepnev}
                        head = "Слепнев Андрей Вячеславович "
                        desc = "Заведующий лабораторией"
                    />
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
                        src = {maleAvatar}
                        head = "Постнов Дмитрий Энгелевич"
                        desc="Ведущий научный сотрудник "
                    />
                </div>
            </div>
        );
    }
}

export default StaffLabSleep;