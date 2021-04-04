import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import VenuesPage from './components/VenuesPage';
import ListSearchPage from './components/ListSearchPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import ReviewCreatePage from './components/ReviewCreatePage';
import VenueIdPage from './components/VenueIdPage';
import HomePage from './components/HomePage';
import './index.css';
import stage from './images/airstagehome2.jpg';

function App() {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded ] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [ dispatch ]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/login'>
              <LoginFormPage />
            </Route>
            <Route path='/signup'>
              <SignupFormPage />
            </Route>
            <Route exact path='/venues' >
              <VenuesPage />
            </Route>
            <Route exact path='/venues/:id' >
              <VenueIdPage />
            </Route>
            <Route exact path='/list'>
              <ListSearchPage />
            </Route>
            <Route exact path='/reviews/:id'>
              <ReviewCreatePage />
            </Route>
          </Switch>
      )}
      <img src={stage} alt='Concert stage' id='stageImg'/>
    </>
  );
}

export default App;
