import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS, MARGINS, THEME } from '@constants/theme';
import Container from '@components/atoms/Container';
import Padder from '@components/atoms/Padder';
import Text from '@components/atoms/Text';
import TextField from '@components/molecules/TextField';
import Title from '@components/atoms/Title';

const ExploreHeader = () => {
  return (
    <Container style={styles.header}>
      <Padder paddingBottom={MARGINS.XL * 2}>
        <Padder paddingVertical={MARGINS.XL}>
          <Title level={1} color={THEME.text.color}>
            Faites des rencontres,{' '}
            <Text bold fontSize={24} underlined>
              différemment
            </Text>{' '}
            😻
          </Title>
        </Padder>
        <TextField placeholder="Recherchez un lieu, une sortie…" />
      </Padder>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.yellow.base,
  },
});

export default ExploreHeader;
