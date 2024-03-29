import {Path, Svg} from 'react-native-svg';
import React from 'react';

const IconUser = ({color}: {color?: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.96873 16.3536L10.2052 5.85659C10.9418 4.38482 13.0388 4.38521 13.7748 5.85724L19.0391 16.3543C19.704 17.6842 18.7388 19.25 17.2541 19.25H6.75335C5.26832 19.25 4.30314 17.6835 4.96873 16.3536Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconUser;
