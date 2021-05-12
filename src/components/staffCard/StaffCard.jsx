import React from 'react'

export default function StaffCard(props) {
    return (
        <div className="item">
            <a href={props.href} target="blank">
            <figure>
                <img src={props.src} alt="фото сотрудника"></img>
                <figcaption>
                    <h3> {props.head} </h3>
                    {props.desc}
                </figcaption>
            </figure>
            </a>
        </div>
    )
}
