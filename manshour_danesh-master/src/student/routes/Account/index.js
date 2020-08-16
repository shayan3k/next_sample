import React, { Fragment } from 'react'
import './Account.scss'
import Logo from '../../assets/images/logo.png';

export default function Account() {
    return (
        <Fragment>
            <section className="login-wrapper">
                <div className="tab_container">
                    <div className="logo-box">
                        <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>

                    <input id="tab1" type="radio" name="tabs" checked />
                    <label htmlFor="tab1"><span>ورود به حساب کاربری</span></label>

                    <input id="tab2" type="radio" name="tabs" />
                    <label htmlFor="tab2"><span>ثبت نام</span></label>

                    <section id="content1" className="tab-content">
                        <form action="." method="POST">
                            <div className="form-group">
                                <input type="number" className="form-control" name="phonenumber" placeholder="شماره موبایل خود را وارد کنید...." autoComplete="off" required />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-primary">ورود به حساب کاربری</button>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-left">
                                        <a href="/forget-password">رمز خود را فراموش کردید؟</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section id="content2" className="tab-content">
                        <form action="." method="POST">
                            <div className="form-group">
                                <input type="number" className="form-control" name="phonenumber" placeholder="شماره موبایل" autoComplete="off" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="کلمه عبور" autoComplete="off" required />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-primary">ثبت نام</button>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-left">
                                        عضو هستید؟ <a href="/forget-password">وارد شوید</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </Fragment>
    )
}
