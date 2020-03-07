import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import Header from './components/header/header.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {

  
  unsubscribeFromAuth = null
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if ( userAuth ) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
