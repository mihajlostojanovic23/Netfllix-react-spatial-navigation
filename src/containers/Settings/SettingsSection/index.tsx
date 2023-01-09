import React, { useState } from 'react';
import Settings from '../../../assets/img/Settings.svg';
import SettingItem from './SettingItem';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Settings
import { SettingsData } from '../../../data/Settings';

interface ISetting {
  id: number;
  label: string;
}

interface IObject {
  label: string;
}

const FocusableSetting = withFocusable()(SettingItem);

function SettingSection() {
  const [correct, setCorrect] = useState<string>();

  const handleOnEnter = (object: IObject) => {
    console.log(object, 'OB');
    setCorrect(object.label);
    console.log(object.label);
  };

  return (
    <div className="flex h-[90vh] w-[100%] items-center justify-center">
      <div className="flex w-[100%] items-center justify-around">
        <div className="logo">
          <img style={{ width: '300px' }} src={Settings} alt="Not found" />
        </div>
        <div className="settings">
          {SettingsData.map((setting: ISetting) => (
            <FocusableSetting
              focusKey={`Setting-Item-${setting.id}`}
              key={setting.id}
              onEnterPress={handleOnEnter}
              {...setting}
              correct={correct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SettingSection;
