import React from 'react'

export default function ContactsCard(props) {
    return (
        <div className="contacts-card">
			<h2>{props.contactsTitle}</h2>
			<div className="contacts-info">
				<ul className="contacts-list">
					<li><h3>Адрес:</h3><p>{props.contactsAdress}</p></li>
					<li><h3>Телефон:</h3><a href={props.contactsNumberLink}> {props.contactsNumber} </a></li>
					<li><h3>Email:</h3><a href={props.contactsMailLink}> {props.contactsMail} </a></li>
				</ul>
				<img src={props.contactsMap} alt="maps" className="maps-img"></img>
			</div>
        </div>
    )
}