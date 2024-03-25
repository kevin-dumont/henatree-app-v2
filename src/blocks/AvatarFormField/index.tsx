import _ from 'lodash';
import { Asset } from 'react-native-image-picker';

import { FormBuilderCustomComponentProps } from '@components/organisms/FormBuilder/types';
import Padder from '@components/atoms/Padder';
import ImagePicker from '@components/organisms/ImagePicker';
import { AvatarPicker } from '@components/molecules/AvatarPicker';
import { MARGINS } from '@constants/theme';

const AvatarFormField = <K extends string, V extends Asset | undefined>({
  setValue,
  value,
}: FormBuilderCustomComponentProps<K, V>) => (
  <Padder marginTop={MARGINS.M}>
    <ImagePicker
      imageSize={{ width: 400, height: 400 }}
      onChangeImage={(img) => {
        if (!_.isUndefined(img?.assets) && img.assets[0]) {
          setValue(img.assets[0] as V);
        }
      }}>
      <AvatarPicker value={value} />
    </ImagePicker>
  </Padder>
);

export default AvatarFormField;
