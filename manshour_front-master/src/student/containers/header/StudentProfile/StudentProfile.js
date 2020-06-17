import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './studentprofile.scss'
import Header from '../../Header';
import Menu from '../../Menu';
import Footer from '../../Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function StudentProfile(props) {
  const classes = useStyles();

  return (

    <>
      <Header />
      <Menu />
      <main>
        <form className={classes.root} noValidate autoComplete="off">

          <div>
            <TextField
              required
              id="filled-required"
              label="اجباری"
              defaultValue=" نام کاربری"
              variant="filled"
            />

            <TextField
              id="filled-password-input"
              label=" نام خانوادگی"

              autoComplete="current-password"
              variant="filled"
            />

            <TextField
              id="filled-password-input"
              label="  محل سکونت"

              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="  نام پدر"

              autoComplete="current-password"
              variant="filled"
            />


            <TextField
              id="filled-number"
              label="شماره ملی"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />


            <TextField
              id="filled-number"
              label="شماره تماس"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />

          </div>

        </form>

      </main>
      <Footer />
    </>





  );
}
