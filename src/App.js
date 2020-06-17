import React from 'react';
import styles from './app.module.scss';
import EntryCard from './components/EntryCard';
import NewCustomerForm from './pages/NewCustomerForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <header className={styles.appHeader}>
          <p>Keishi's Tires</p>
        </header>
        <Switch>
          <Route path="/" exact>
            <EntryCard />
          </Route>
          <Route path="/newcustomer">
            <NewCustomerForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
