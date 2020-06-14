import React from 'react'

export default function TodayClasses(props) {
    return (
        <div className="d-flex flex-row align-items-center mb-3">
            <a className="d-block position-relative" href={props.url}>
                <img src={props.image} alt={props.title} className="list-thumbnail border-0" />
                <span className="position-absolute badge-top-right badge badge-warning badge-pill">۳ روز دیگه</span>
            </a>
            <div className="p-2 pr-3">
                <a href={props.url}>
                    <p className="list-item-heading">{props.title}</p>
                    <p className="text-muted mb-2">{props.description}</p>
                    <div className="text-primary">{props.date}</div>
                </a>
            </div>
        </div>
    )
}
