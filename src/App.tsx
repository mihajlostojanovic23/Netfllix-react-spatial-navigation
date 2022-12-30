import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  initNavigation,
  withFocusable,
} from '@noriginmedia/react-spatial-navigation';

//Components
import SideBar from './components/SideBar';
import Routes from './containers/Routes';
import DataProvider from './context/searchContext';
import UserProvider from './context/userContext';

initNavigation({
  debug: false,
  visualDebug: false,
});

const FocusableSideBar = withFocusable()(SideBar);

function App() {
  return (
    <div>
      <UserProvider>
        <DataProvider>
          <Router>
            <FocusableSideBar focusKey={'SideBar'} />
            <div className="ml-[100px]">
              <Routes />
            </div>
          </Router>
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
