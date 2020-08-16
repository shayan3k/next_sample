import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StudentDashboard from "./student/routes/Dashboard";
import Account from "./student/routes/Account";
import HomePage from "./public/HomePage";

import DefaultLayout from "./admin/containers/DefaultLayout";
import Login from "./admin/views/Pages/Login";
import Register from "./admin/views/Pages/Register";
import Page404 from "./admin/views/Pages/Page404";
import Page500 from "./admin/views/Pages/Page500";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/admin/login"
          name="ورود به پنل کاربری"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/admin/register"
          name="ثبت نام"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/404"
          name="ارور ۴۰۴"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="ارور ۵۰۰"
          render={(props) => <Page500 {...props} />}
        />
        <Route
          exact
          path="/admin"
          name="داشبورد اصلی"
          render={(props) => <DefaultLayout {...props} />}
        />
        <Route
          exact
          path="/Student"
          name="پنل دانش آموز"
          render={(props) => <StudentDashboard {...props} />}
        />
        <Route
          exact
          path="/Account"
          name="ورود به حساب کاربری"
          render={(props) => <Account {...props} />}
        />
        <Route
          path="/"
          name="صفحه اصلی منشور دانش"
          render={(props) => <HomePage {...props} />}
        />
      </Switch>
    </Router>
  );
}
