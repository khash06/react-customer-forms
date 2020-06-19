import React from 'react';
import styles from './app.module.scss';
import EntryCard from './components/EntryCard';
import NewCustomerForm from './pages/NewCustomerForm';
import ExistingCustomerForm from './pages/ExistingCustomerForm';
import Review from './pages/Review';
import { Switch, Route } from 'react-router-dom';

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
          <Route path="/new_customer">
            <NewCustomerForm />
          </Route>
          <Route path="/existing_customer">
            <ExistingCustomerForm />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
