import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Story} from './StoryTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Root: NavigatorScreenParams<RootStackParamList>;
      TopTabs: MaterialTopTabScreenProps<TopTabParamList>;
    }
  }
}

export type RootStackParamList = {
  TopTabs: undefined;
  SinglePost: {
    story: Story;
  };
  NotFound: undefined;
};

export type TopTabParamList = {
  Top: undefined;
  New: undefined;
  Ask: undefined;
  Show: undefined;
  Jobs: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<
    RootStackParamList &
      TopTabParamList & {
        Root: NavigatorScreenParams<RootStackParamList>;
      },
    Screen
  >;
