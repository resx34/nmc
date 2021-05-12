import React from 'react';
import './News.css';
import PageTitle from '../PageTitle/PageTitle';
import newPic from './img/new.jpg';
import newPicOne from './img/new-1.jpg';

function News() {
  return (
    <>
      <PageTitle title="Новости"></PageTitle>
      <div className="page">
        <div className="container">
          <article className="news-block">
            <div className="news-block-img">
              <img src={newPic} alt="фото новости" />
            </div>
            <div className="news-block-part-text">
              <h3 className="news-block-title">В СГУ начал работать научный медицинский центр</h3>
              <div className="news-block-text"> 1 декабря в Саратовском национальном исследовательском государственном университете начал работать научный медицинский центр.
              <br />
              Как сообщает пресс-служба вуза, создание научного медицинского центра обусловлено интенсивной и продуктивной работой научных коллективов, проводящих исследования
              в области фундаментальной медицины, медицинских технологий, живых систем и научных направлений, тесно связанных с медициной - так называемых междисциплинарных
              исследований.
              <br />
              "Достаточно сказать, что в последние годы на работы в области медицины и живых систем приходится 40% объема финансирования всех научных исследований
              и разработок, выполняемых в университете. Значительная часть публикаций ученых Саратовского университета в высокорейтинговых научных журналах, индексируемых
              в международных системах цитирования Web of Science и Scopus, также приходится на публикации медицинской тематики. Из четырех научных лабораторий,
              функционирующих сегодня в университете в рамках Правительственной программы по созданию научных лабораторий под руководством ученых мирового уровня
              ("программа мегагрантов"), три работают в области медицинских технологий. Успешно работает лаборатория медицинского профиля, созданная при поддержке Фонда
               перспективных исследований - лаборатория "Системы принятия врачебных решений", - говорится в сообщении.
              </div>
            </div>
          </article>

          <article className="news-block">
            <div className="news-block-img">
              <img src={newPicOne} alt="фото новости" />
            </div>
            <div className="news-block-part-text">
              <h3 className="news-block-title">Название новости 2</h3>
              <div className="news-block-text">
                Deserunt enim exercitation dolor sit irure. Eiusmod amet ex voluptate fugiat fugiat elit magna aute aliqua ex duis adipisicing pariatur ad. 
                In anim ad exercitation ad cillum. Est excepteur mollit id ut tempor aliqua eu.

                Ad nostrud id ipsum ullamco culpa adipisicing esse. Aliquip incididunt consequat anim deserunt consequat anim proident esse non laborum. 
                Consequat consectetur deserunt minim commodo exercitation eiusmod consequat proident non adipisicing voluptate id id deserunt. 
                Excepteur ut laborum velit eu anim officia cupidatat. Anim laborum deserunt duis aliqua excepteur laboris dolor ipsum consectetur consectetur ex. 
                Dolor tempor ut ad fugiat anim.

                Est esse id ullamco laborum aliquip ad qui pariatur adipisicing. Aliqua qui tempor cillum fugiat culpa incididunt culpa sunt sunt. Occaecat nostrud 
                amet proident quis. Duis eu esse quis excepteur irure sit minim reprehenderit in dolor enim et do. Dolor do labore in minim veniam consectetur. 
                Aliquip dolor ad proident fugiat labore in do esse labore mollit tempor excepteur. Est mollit proident voluptate qui amet enim reprehenderit 
                incididunt quis.
              </div>
            </div>
          </article>

        </div>
      </div>
    </>
  );
}

export default News;