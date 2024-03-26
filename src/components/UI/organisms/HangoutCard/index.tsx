import React, { memo } from 'react';
import { View, ImageSourcePropType, StyleSheet, Image } from 'react-native';

import { BaseStylesProps } from '@/types/styles';
import Text from '@/components/UI/atoms/Text';
import { MARGINS, THEME } from '@/constants/theme';
import Title from '@/components/UI/atoms/Title';
import Padder from '@/components/UI/atoms/Padder';
import { DEVICE_LANGUAGE } from '@/i18n/locale';

export interface HangoutCardProps extends BaseStylesProps {
  imageSrc: ImageSourcePropType;
  title: string;
  date: Date;
  nbParticipants: number;
  nbParticipantsMax: number;
  location: string;
  price?: number;
  onTouchEnd?: () => void;
}

const HangoutCard = ({
  imageSrc,
  title,
  date,
  location,
  nbParticipants,
  nbParticipantsMax,
  style,
}: HangoutCardProps) => {
  return (
    <View style={[style]}>
      <Image style={styles.image} source={imageSrc} />
      <Padder marginTop={MARGINS.S} marginBottom={MARGINS.XXS}>
        <Title level={3} color={THEME.hangoutCard.titleColor}>
          {title}
        </Title>
      </Padder>
      <Text>
        <Title level={4} color={THEME.hangoutCard.dateColor}>
          {date.toLocaleDateString(DEVICE_LANGUAGE, {
            day: 'numeric',
            weekday: 'short',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Title>
        <Title level={4} color={THEME.hangoutCard.participantColor}>
          {' '}
          · {nbParticipants}/{nbParticipantsMax} participants
        </Title>
      </Text>
      <Title level={4} color={THEME.hangoutCard.cityColor}>
        {location}
      </Title>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  image: {
    width: 250,
    height: 170,
    borderRadius: 8,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default memo(HangoutCard);
