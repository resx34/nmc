import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './Contacts.css';
import mapsCorps8 from './img/mapsCorps8.png';
import ContactsCard from './ContactsCard';

class Contacts extends React.Component {
  render() {
    return (
      <>
        <PageTitle title="Контакты"></PageTitle>
        <div className="page">
          <div className="container">
			<ContactsCard
				contactsTitle="Лаборатория Дистанционно управляемые системы для тераностики"
				contactsAdress="410012, г. Саратов, ул. Большая Казачья, 112А, VIII корпус СГУ, комн.62"
				contactsNumberLink="tel: +7 (8452) 21-07-44"
				contactsNumber="+7 (8452) 21-07-44"
				contactsMailLink="mailto: recordslab@gmail.com"
				contactsMail="recordslab@gmail.com"
				contactsMap={mapsCorps8}
			/>
			<ContactsCard
				contactsTitle="Лаборатория биомедицинской фотоакустики"
				contactsAdress="410012, г. Саратов, ул. Большая Казачья, 112А, VIII корпус СГУ"
				contactsNumberLink="tel: +7 (987) 317-18-47"
				contactsNumber="+7 (987) 317-18-47"
				contactsMailLink="mailto: inozemtsevaoa@mail.ru"
				contactsMail="inozemtsevaoa@mail.ru"
				contactsMap={mapsCorps8}
			/>
			<ContactsCard
				contactsTitle="Лаборатория умного сна"
				contactsAdress="410012, г. Саратов, ул. Большая Казачья, 112А, VIII корпус СГУ"
				contactsNumberLink="tel: +7 (8452) 21-07-44"
				contactsNumber="+7 (8452) 21-07-44"
				contactsMailLink="mailto: recordslab@gmail.com"
				contactsMail="recordslab@gmail.com"
				contactsMap={mapsCorps8}
			/>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
