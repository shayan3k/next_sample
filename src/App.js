import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentDashboard from "./student/routes/Dashboard";
import Account from "./student/routes/Account";
import HomePage from "./public/HomePage";

import DefaultLayout from "./admin/containers/DefaultLayout";
import Login from "./admin/views/Pages/Login";
import Register from "./admin/views/Pages/Register";
import Page404 from "./admin/views/Pages/Page404";
import Page500 from "./admin/views/Pages/Page500";

export default function App() {
  return (
    <Router>
      <Switch>
        {/* Static page routes */}
        <Route
          exact
          path="/"
          name="صفحه اصلی منشور دانش"
          render={(props) => <HomePage {...props} />}
        />

        {/* Admin panel routes */}
        <Route
          exact
          path="/admin"
          name="داشبورد اصلی"
          render={(props) => <DefaultLayout {...props} />}
        />
        <Route
          path="/admin/login"
          name="ورود به پنل کاربری"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/admin/register"
          name="ثبت نام"
          render={(props) => <Register {...props} />}
        />

        {/* Student panel routes */}
        <Route
          path="/student"
          name="پنل دانش آموز"
          render={(props) => <StudentDashboard {...props} />}
        />
        <Route
          path="/account"
          name="ورود به حساب کاربری"
          render={(props) => <Account {...props} />}
        />

        {/* Errors routes */}
        {/* in case that no route matches the provided routes, then redirect to the route with no path specified*/}
        <Route
          path="/500"
          name="ارور ۵۰۰"
          render={(props) => <Page500 {...props} />}
        />
        <Route name="ارور ۴۰۴" render={(props) => <Page404 {...props} />} />
      </Switch>
    </Router>
  );
}
