import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Asset } from 'react-native-image-picker';

import Center from '@components/atoms/Center';
import AvatarImage from '@assets/images/avatar.png';
import PlusIcon from '@components/atoms/Icons/PlusIcon';
import { COLORS } from '@constants/theme';
import CircleButton from '@components/molecules/CircleButton';

export interface AvatarPickerProps {
  onPress?: () => void;
  value?: Asset;
}

export const AvatarPicker = ({ onPress }: AvatarPickerProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Center>
        <View style={styles.imageContainer}>
          <Image style={styles.pickAvatar} source={AvatarImage} />
          <CircleButton
            activeOpacity={1}
            style={styles.button}
            size={33}
            withBorder={false}>
            <PlusIcon color={COLORS.neutral.white} />
          </CircleButton>
        </View>
      </Center>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pickAvatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  imageContainer: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 23,
    right: 23,
  },
});
