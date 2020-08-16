import React, { Fragment } from 'react'
import profile_image from '../../assets/images/profile-pic.jpg'

export default function ProfileDropdown(props) {
    return (
        <Fragment>
            <div className="user btn-group">
                <button type="button" className="btn btn-empty dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{props.studentName}</span>
                    <img src={profile_image} alt="Profile" />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#link">حساب کاربری <i className="icon-mouse"></i></a>
                    <a className="dropdown-item" href="#link">لیست نمرات</a>
                    <a className="dropdown-item" href="#link">ویرایش اطلاعات</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#link">خروج</a>
                </div>
            </div>
        </Fragment>
    )
}
