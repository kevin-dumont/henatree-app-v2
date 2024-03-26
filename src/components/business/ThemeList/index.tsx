import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Container from '@/components/UI/atoms/Container';
import Text from '@/components/UI/atoms/Text';
import Title from '@/components/UI/atoms/Title';
import LabelledImage from '@/components/UI/molecules/LabelledImage';
import { COLORS, MARGINS } from '@/constants/theme';

const ThemeList = () => {
  return (
    <>
      <Container>
        <Title level={2}>De quoi as-tu envie ?</Title>
        <Text
          light
          fontSize={14}
          style={styles.subtitle}
          color={COLORS.neutral.gray4}>
          Amet, erat arcu leo ac suspendisse.
        </Text>
      </Container>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.themesScrollView}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
          <LabelledImage
            key={v}
            title="Musique"
            imageSrc={{ uri: 'https://via.placeholder.com/72x72' }}
            style={v === 10 ? styles.lastLabelledImage : styles.labelledImage}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: MARGINS.XXS,
    fontSize: 14,
  },
  themesScrollView: {
    marginTop: MARGINS.M,
    paddingLeft: MARGINS.XL,
  },
  labelledImage: {
    marginRight: MARGINS.M,
  },
  lastLabelledImage: {
    marginRight: MARGINS.XXL,
  },
});

export default ThemeList;
