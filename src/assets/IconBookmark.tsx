import {Path, Svg} from 'react-native-svg';
import React from 'react';

const IconBookmark = ({
  color,
  fillColor,
}: {
  color?: string;
  fillColor?: string;
}) => {
  return (
    <Svg
      width="24"
      height="24"
      fill={fillColor ? fillColor : 'none'}
      viewBox="0 0 24 24">
      <Path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
      />
    </Svg>
  );
};

export default IconBookmark;
