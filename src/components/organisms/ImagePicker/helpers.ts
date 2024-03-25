import { PermissionsAndroid, Platform } from 'react-native';
import {
  Callback,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonPositive: 'Autoriser',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
};

const requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
          buttonPositive: 'Autoriser',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
    }
    return false;
  } else {
    return true;
  }
};

export const captureImage = async (successCallback: Callback) => {
  const options: CameraOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
    videoQuality: 'low',
    durationLimit: 30,
    saveToPhotos: true,
  };

  const isCameraPermitted = await requestCameraPermission();
  const isStoragePermitted = await requestExternalWritePermission();

  if (isCameraPermitted && isStoragePermitted) {
    launchCamera(options, successCallback);
  }
};

export const chooseFile = (callback: Callback) => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
  };

  launchImageLibrary(options, callback);
};
