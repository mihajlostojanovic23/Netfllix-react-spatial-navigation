import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import Settings from './Settings';
import Serach from './Search';
import Login from './Login';
import Register from './Register';

const FocusableHome = withFocusable()(Home);
const FocusableSetting = withFocusable()(Settings);
const FocusableSearch = withFocusable()(Serach);
const FocusableLogin = withFocusable()(Login);
const FocusableRegister = withFocusable()(Register);

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <FocusableHome />
      </Route>
      <Route path="/settings">
        <FocusableSetting focusKey={'Settings'} />
      </Route>

      <Route path="/search">
        <FocusableSearch />
      </Route>

      <Route path="/login">
        <FocusableLogin focusKey={'Login'} />
      </Route>

      <Route path="/register">
        <FocusableRegister focusKey={'Register'} />
      </Route>
    </Switch>
  );
}

export default Routes;
