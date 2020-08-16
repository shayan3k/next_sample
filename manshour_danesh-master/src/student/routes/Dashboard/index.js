import React, { Fragment } from 'react'
import './Dashboard.scss'

import { LineShadow } from "../../components/Charts";
import { conversionChartConfig } from "../../constants/chartConfig";

import Header from '../../containers/Header'
import Menu from '../../containers/Menu'
import Footer from '../../containers/Footer'
import BreadCrumb from '../../containers/breadCrumb'
import TodayClass from '../../components/TodayClasses'

import Book1 from '../../assets/images/books/book01.jpg'
import Book2 from '../../assets/images/books/book02.jpg'
import Book3 from '../../assets/images/books/book03.jpg'
import Book4 from '../../assets/images/books/book04.jpg'
import Book5 from '../../assets/images/books/book05.jpg'
import Book6 from '../../assets/images/books/book06.jpg'

export default function Dashboard() {
    return (
        <Fragment>
            <Header />
            <Menu />
            <main>
                <section className="dashboard-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <BreadCrumb routeTitle="میز مطالعه" />
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <span>کلاس های امروز من</span>
                                        </div>
                                        <div className="today-classes">
                                            <TodayClass
                                                image={Book1}
                                                title="ادبیات فارسی"
                                                description="کلاس آنلاین نکته و ادبیات فارسی نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 13:00"
                                                url="/"
                                            />
                                            <TodayClass
                                                image={Book2}
                                                title="زبان فارسی"
                                                description="کلاس آنلاین نکته و زبان فارسی نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 14:00"
                                                url="/"
                                            />
                                            <TodayClass
                                                image={Book3}
                                                title="دین و زندگی"
                                                description="کلاس آنلاین نکته و دین و زندگی نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 15:00"
                                                url="/"
                                            />
                                            <TodayClass
                                                image={Book4}
                                                title="زبان انگلیسی"
                                                description="کلاس آنلاین نکته و زبان انگلیسی نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 16:00"
                                                url="/"
                                            />
                                            <TodayClass
                                                image={Book5}
                                                title="شیمی"
                                                description="کلاس آنلاین نکته و شیمی نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 17:00"
                                                url="/"
                                            />
                                            <TodayClass
                                                image={Book6}
                                                title="ریاضیات"
                                                description="کلاس آنلاین نکته و ریاضیات نظام جدید استاد محمد واعظی"
                                                date="دوشنبه 12 خرداد 1399 ,ساعت 10:00"
                                                url="/"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <span>نمودار پیشرفت شما</span>
                                        </div>
                                        <div className="dashboard-line-chart">
                                            <LineShadow {...conversionChartConfig} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}
