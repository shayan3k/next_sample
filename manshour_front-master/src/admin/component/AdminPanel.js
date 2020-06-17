import React, { Fragment } from 'react';
import MaterialTable from 'material-table';

import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';
import AdminMenue from './AdminMenu';



export default function AdminPanel() {
  const [state, setState] = React.useState({

    ////list of users that pass into tabel

    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Alborz', 63: 'Iran' },
      },
    ],
    data: [
      { name: 'Emad', surname: 'Deym', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zobdegan',
        surname: 'software developers',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (

    <Fragment>
      <AdminHeader />
      <AdminMenue />
      <main>
        <MaterialTable
          title="Editable Example"
          columns={state.columns}
          data={state.data}
          editable={{

            /// adding new data in tabels
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),

            ///update data in tabel 
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),

            ///delet data in tabel
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />

      </main>
      <AdminFooter />
    </Fragment>
  );
}
