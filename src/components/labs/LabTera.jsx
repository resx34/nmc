import React from "react";
import labTera from "./img/lab-tera.jpg";
import StaffCard from '../staffCard/StaffCard';
import suhorukov from '../staff/img/suhorukov.png';
import goryacheva from '../staff/img/goryacheva.png';
import svenskaya from '../staff/img/svenskaya.png';
import lomova from '../staff/img/lomova.png';
import maleAvatar from '../staff/img/maleAvatar.png';

class LabTera extends React.Component {
    render() {
        return (
            <>
                <h2>
                    Лаборатория «Дистанционно управляемые системы для тераностики»
                </h2>
                <img
                    className="labs__logo"
                    src={labTera}
                    alt="Лаборатория"
                ></img>
                Создана в 2014 году при поддержке гранта Правительства
                Российской Федерации для государственной поддержки научных
                исследований, проводимых под руководством ведущих учёных в
                российских образовательных учреждениях высшего профессионального
                образования по теме «Дистанционно управляемые
                наноструктурированные системы для адресной доставки и
                диагностики».
                <h3>Научный руководитель проекта:</h3>
                <div className="flex-staff-list">
                    <StaffCard
                        href="https://www.sgu.ru/person/suhorukov-gleb-borisovich"
                        src = {suhorukov}
                        head = "Сухоруков Глеб Борисович"
                        desc="Научный руководитель проекта.
                        профессор Лондонского университета королевы Марии, к.ф.-м.н., проф. (Лондон, Великобритания)."
                    />
                </div>

                <h3>Направление исследований:</h3>
                <p>
                    получение интерактивных наноинженерных систем (носителей),
                    построенных на принципах сборки наноструктурированных
                    материалов.
                </p>
                <h3>Ключевые сотрудники лаборатории:</h3>
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

                <h3>Основные проекты, выполняемые в лаборатории:</h3>
                <ol>
                    <li>
                        Государственное задание в сфере научной деятельности, проект
                        № 0799-2020-0002 «Многофункциональные наноразмерные и
                        наноструктурированные системы для аналитической химии и
                        тераностики», 2020-2022, руководитель – д.х.н., проф. И.Ю.
                        Горячева.
                  </li>
                    <li>
                        Грант РНФ № 16-13-10195 «Углеродные наночастицы и материалы
                        на их основе», 2016-2020, руководитель – к.ф.-м.н., проф.
                        Г.Б. Сухоруков.
                  </li>
                    <li>
                        Грант РНФ № 19-73-10123 «Магнито-управляемые нанообъекты
                        адресной доставки антибластомных препаратов in vivo»,
                        2019-2022, руководитель – к.ф.-м.н., с.н.с. М.В. Ломова.
                  </li>
                    <li>
                        Грант РНФ № 19-75-10043 «Повышение эффективности терапии
                        заболеваний почек за счёт использования систем
                        пролонгированной доставки препаратов и их адресации
                        эндоваскулярным методом», 2019-2022, руководитель – к.б.н.,
                        с.н.с. О.А. Синдеева.
                  </li>
                    <li>
                        Грант РНФ № 20-13-00195 «Разработка высокочувствительных
                        аналитических систем на основе люминесцентных и гибридных
                        наночастиц для экспрессного определения кардиомаркеров в
                        крови», 2020-2022, руководитель – д.х.н., проф. И.Ю.
                        Горячева.
                  </li>
                    <li>
                        Грант РНФ № 17-73-20172 «Субмикронные мезопористые частицы
                        ватерита для трансдермальной доставки биологически активных
                        веществ», 2017-2023, руководитель – к.ф.-м.н., с.н.с. Ю.И.
                        Свенская.
                  </li>
                </ol>
            </>
        );
    }
}

export default LabTera;
