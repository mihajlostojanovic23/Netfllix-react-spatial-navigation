import React from 'react';

import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import MainSection from './MainSection';

const FocusableMainSection = withFocusable({ trackChildren: true })(
  MainSection
);

function Home() {
  return (
    <div className="flex">
      <FocusableMainSection focusKey={'MainSection'} />
    </div>
  );
}

export default Home;
