import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/HomePage/HomePage';
import Login from './components/views/Login/Login';
import Table from './components/views/Table/Table';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Order from './components/views/Order/Order';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7043',
    },
  },
});

function App () {
  return(
    <BrowserRouter basename={'/'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/table'} component={Table} />
              <Route exact path={process.env.PUBLIC_URL + '/table/booking/:id'} component={Booking} />
              <Route exact path={process.env.PUBLIC_URL + '/table/event/:id'} component={Event} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider> 
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;