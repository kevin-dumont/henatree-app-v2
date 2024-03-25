import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Container from '@components/atoms/Container';
import Title from '@components/atoms/Title';
import HangoutCard from '@components/organisms/HangoutCard';
import Button from '@components/molecules/Button';
import { BaseStylesProps } from '@typings/styles';
import { MARGINS } from '@constants/theme';

export interface HangoutListProps extends BaseStylesProps {
  title: string;
}

const HangoutList = ({ title, style }: HangoutListProps) => {
  return (
    <View style={[style]}>
      <Container style={styles.hangoutTitleContainer}>
        <Title level={2}>{title}</Title>
      </Container>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.hangoutScrollView}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <HangoutCard
            key={v}
            title="Sortie photo à la plage"
            date={new Date()}
            location="Lille"
            nbParticipants={1}
            nbParticipantsMax={5}
            imageSrc={{ uri: 'https://via.placeholder.com/250x170' }}
            style={v === 10 ? styles.lastHangoutCard : styles.hangoutCard}
          />
        ))}
      </ScrollView>

      <Container>
        <Button
          variant="secondary"
          appearance="lined"
          style={styles.buttonShowMore}>
          Voir toutes les sorties (20+)
        </Button>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  hangoutTitleContainer: {
    marginTop: MARGINS.XL,
    marginBottom: MARGINS.M,
  },
  hangoutScrollView: {
    paddingLeft: MARGINS.XL,
  },
  buttonShowMore: {
    marginTop: MARGINS.XL,
  },
  lastHangoutCard: {
    marginRight: MARGINS.XXL,
  },
  hangoutCard: {
    marginRight: MARGINS.M,
  },
});

export default HangoutList;
