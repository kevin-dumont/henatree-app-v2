import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { FormBuilderDateProps } from '@components/organisms/FormBuilder/types';
import Text from '@components/atoms/Text';
import { COLORS, MARGINS } from '@constants/theme';
import { useBoolean } from '@hooks/useBoolean';
import Padder from '@components/atoms/Padder';
import { DEVICE_LANGUAGE } from '@i18n/locale';

const DEFAULT_DATE_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const Date = <K extends string, V extends Date>({
  placeholder,
  setValue,
  value,
  error,
  dateFormat = DEFAULT_DATE_FORMAT,
}: FormBuilderDateProps<K, V>) => {
  const [isPickerShown, showPicker, hidePicker] = useBoolean();

  const handleConfirm = (d: Date) => {
    setValue(d as any);
    hidePicker();
  };

  return (
    <>
      <DateTimePickerModal
        locale="fr-FR"
        confirmTextIOS="Confirmer"
        cancelTextIOS="Annuler"
        isVisible={isPickerShown}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />

      <TouchableWithoutFeedback onPress={showPicker}>
        {!value ? (
          <Text light fontSize={20} color={COLORS.neutral.gray4}>
            {placeholder || 'Sélectionne une date'}
          </Text>
        ) : (
          <Text light fontSize={20}>
            {value.toLocaleDateString(DEVICE_LANGUAGE, dateFormat)}
          </Text>
        )}
      </TouchableWithoutFeedback>

      {error && (
        <Padder marginTop={MARGINS.M}>
          <Text fontSize={14} color={COLORS.orange.base}>
            {error}
          </Text>
        </Padder>
      )}
    </>
  );
};

export default Date;
