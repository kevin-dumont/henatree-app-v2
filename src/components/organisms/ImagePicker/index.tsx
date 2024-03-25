import React, { PropsWithChildren, memo } from 'react';
import { MenuView } from '@react-native-menu/menu';
import { ImagePickerResponse } from 'react-native-image-picker';

import { captureImage, chooseFile } from './helpers';

export interface ImagePickerProps {
  onChangeImage: (imgResponse: ImagePickerResponse) => void;
  title?: string;
  imageSize: {
    width: number;
    height: number;
  };
}

const CAMERA = 'camera';
const PICK_PHOTO = 'pick-photo';

const ImagePicker = ({
  onChangeImage,
  children,
  title,
}: PropsWithChildren<ImagePickerProps>) => (
  <MenuView
    title={title ?? 'Choisir une option'}
    onPressAction={({ nativeEvent }) => {
      switch (nativeEvent.event) {
        case CAMERA:
          captureImage(onChangeImage);
          break;
        case PICK_PHOTO:
          chooseFile(onChangeImage);
          break;
        default:
      }
    }}
    actions={[
      {
        id: CAMERA,
        title: 'Prendre une photo',
        image: 'camera.fill',
      },
      {
        id: PICK_PHOTO,
        title: 'Importer depuis la pellicule',
        image: 'photo.fill',
      },
    ]}>
    {children}
  </MenuView>
);

export default memo(ImagePicker);
