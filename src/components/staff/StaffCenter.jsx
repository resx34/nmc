import React from 'react';
import konovalova from './img/konovalova.png';
import zalesnyy from './img/zalesny.png';
import shamionov from './img/shamionov.png';
import grigoreva from './img/grigoreva.png';
import runnova from './img/runnova.png';
import grinina from './img/grinina.png';
import zhuravlev from './img/zhuravlev.png';
import sozonnik from './img/sozonnik.png'
import StaffCard from '../staffCard/StaffCard'


class StaffCenter extends React.Component {
    render() {
        return (
            <div className="flex-staff-list">
                <div className="flex-staff-list">
                <StaffCard
                    href="https://www.sgu.ru/person/konovalova-marina-dmitrievna"
                    src={konovalova}
                    head="Марина Дмитриевна Коновалова"
                    desc="Руководитель центра"
                /> 
                <StaffCard
                    href="https://www.sgu.ru/person/zalesnyy-sergey-alekseevich"
                    src={zalesnyy}
                    head="Залесный Сергей Алексеевич"
                    desc="Заместитель руководителя"
                />
                </div>
                <StaffCard
                    href="https://www.sgu.ru/person/shamionov-rail-munirovich"
                    src={shamionov}
                    head="Залесный Сергей Алексеевич"
                    desc="Главный научный сотрудник"
                />
                <StaffCard
                    href="https://www.sgu.ru/person/grigoreva-marina-vladimirovna"
                    src={grigoreva}
                    head="Григорьева Марина Владимировна"
                    desc="Ведущий научный сотрудник"
                />
                <StaffCard
                    href="https://www.sgu.ru/person/runnova-anastasiya-evgenevna-0"
                    src={runnova}
                    head="Руннова Анастасия Евгеньевна"
                    desc="Ведущий научный сотрудник"
                />
                <StaffCard
                    href="https://www.sgu.ru/person/grinina-elena-sergeevna"
                    src={grinina}
                    head="Гринина Елена Сергеевна"
                    desc="Старший научный сотрудник"
                />
                <StaffCard
                    href="https://www.sgu.ru/person/zhuravlev-maksim-olegovich"
                    src={zhuravlev}
                    head="Журавлев Максим Олегович"
                    desc="Старший научный сотрудник"
                />
                <StaffCard
                    href="https://www.sgu.ru/person/sozonnik-aleksey-vladimirovich"
                    src={sozonnik}
                    head="Созонник Алексей Владимирович"
                    desc="Старший научный сотрудник"
                />                
            </div>
        );
    }
}

export default StaffCenter;