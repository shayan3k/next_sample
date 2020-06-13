import React, { Fragment } from 'react'
import './Account.scss'
import Logo from '../../assets/images/logo.png';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Router, Route, Link } from 'react-router-dom';
import { userService, authenticationService } from '@/_services';



class Account extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }
    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {

       
        const { currentUser, users } = this.state;
        return (

    <>
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

                
                                        <FormGroup>

                                            <Input type="text" name="phone number" id="" placeholder="شماره تلفن خود را وارد کنید" required />
                                        </FormGroup>

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
                                        <Input type="text" name="phone number" id="" placeholder="  کلمه عبور" required />
                                    </div>

                                    <div className="form-group">
                                        <Input type="text" name="phone number" id="" placeholder=" شماره دانش آموزی" required />
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
                     
                     <div>

                     {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                }
                         
                     </div>
                     
                        </div>
                    </section>
      
    
       </>
        )
    }
}
export default Account;