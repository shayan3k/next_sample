import React, { Fragment } from 'react'
import './Menu.scss'

export default function Menu() {
    return (
        <Fragment>
            <aside>
                <div className="main-menu">
                    <ul>
                        <li className="nav-item active">
                            <a href="/" data-flag="dashboard">
                                <i className="icon-layers"></i>
                                <span>میز مطالعه</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" data-flag="courses">
                                <i className="icon-notebook"></i>
                                <span>درس های من</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" data-flag="financial">
                                <i className="icon-basket"></i>
                                <span>امور مالی</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" data-flag="buy">
                                <i className="icon-graduation"></i>
                                <span>خرید درس</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" data-flag="live">
                                <i className="icon-book-open"></i>
                                <span>پخش زنده</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </Fragment>
    )
}
