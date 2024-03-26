import { StyleSheet } from 'react-native';

export type Styles = ReturnType<typeof StyleSheet.create>[0];

export interface BaseStylesProps {
  style?: Styles;
}
