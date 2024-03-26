import { Asset } from 'react-native-image-picker';

import { FormBuilderCustomComponentProps } from '@/components/UI/organisms/FormBuilder/types/types';
import Padder from '@/components/UI/atoms/Padder';
import ImagePicker from '@/components/UI/organisms/ImagePicker';
import { AvatarPicker } from '@/components/UI/molecules/AvatarPicker';
import { MARGINS } from '@/constants/theme';
import { isNotUndefined } from '@/services/isNotUndefined';

const AvatarFormField = <K extends string, V extends Asset | undefined>({
  setValue,
  value,
}: FormBuilderCustomComponentProps<K, V>) => (
  <Padder marginTop={MARGINS.M}>
    <ImagePicker
      imageSize={{ width: 400, height: 400 }}
      onChangeImage={(img) => {
        if (isNotUndefined(img?.assets) && img.assets[0]) {
          setValue(img.assets[0] as V);
        }
      }}>
      <AvatarPicker value={value} />
    </ImagePicker>
  </Padder>
);

export default AvatarFormField;
