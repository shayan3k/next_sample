import React, { useState,Fragment,useEffect  } from 'react';
import './Dashboard.scss'
import axios from 'axios';

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




export default function Dashboard(props) {
   
  
   
   
    return (
        <Fragment>
            <Header />
            <Menu />
            <main>
              {props.children}
            </main>
            <Footer />
        </Fragment>
    )
}
