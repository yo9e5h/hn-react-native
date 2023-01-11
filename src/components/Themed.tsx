import {Platform, Text as DefaultText, View as DefaultView} from 'react-native';

import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  textType?: 'bold' | 'regular' | 'semibold' | 'medium';
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {
    style,
    lightColor,
    darkColor,
    lightBorderColor,
    darkBorderColor,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  const borderColor = useThemeColor(
    {light: lightBorderColor, dark: darkBorderColor},
    'border',
  );

  return (
    <DefaultView
      style={[
        {
          backgroundColor,
          borderColor,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function SafeAreaView(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return (
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: Platform.OS === 'android' ? 0 : 48,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
