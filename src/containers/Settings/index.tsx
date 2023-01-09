import React from 'react';
import SettingSection from './SettingsSection';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

interface IFocused {
  focused: boolean;
}

const FocusableSettingSection = withFocusable({ trackChildren: true })(
  SettingSection
);

function Settings({ focused }: IFocused) {
  return (
    <div>
      <h1
        className={`${
          focused ? ' text-[#e09c35]' : ''
        } flex justify-center py-[30px] text-[40px] text-[white]`}
      >
        Settings
      </h1>
      <FocusableSettingSection focusKey={'SettingSection'} />
    </div>
  );
}

export default Settings;
