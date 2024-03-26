import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import Text from '@/components/UI/atoms/Text';
import { BaseStylesProps } from '@/types/styles';
import { MARGINS } from '@/constants/theme';

export interface LabelledImageProps extends BaseStylesProps {
  imageSrc: ImageSourcePropType;
  title: string;
  onTouchEnd?: () => void;
}

const LabelledImage = ({
  imageSrc,
  title,
  onTouchEnd,
  style,
}: LabelledImageProps) => (
  <View onTouchEnd={onTouchEnd} style={[styles.view, style]}>
    <Image style={styles.image} source={imageSrc} />
    <Text style={styles.text} light fontSize={14}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    width: 72,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 72,
  },
  text: {
    marginTop: MARGINS.XS,
  },
});

export default LabelledImage;
