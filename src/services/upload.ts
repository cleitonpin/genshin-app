import { getApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { Alert, Platform } from 'react-native';
// import uuid from 'uuid';

const firebaseApp = getApp();

async function uriToBlob(uri: string): Promise<Blob> {
  const repsonse = await fetch(uri);
  const blob = await repsonse.blob();
  return blob;
}

async function uploadToFirebase(blob: any, id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const storage = getStorage(firebaseApp, 'gs://genshin-7857a.appspot.com');
    const storageRef = ref(storage, id);

    uploadBytes(storageRef, blob).then(snapshot => {
      resolve(snapshot);
    })
  });
}

async function getPhoto(id: string): Promise<any> {
  const storage = getStorage();

  const storageRef = ref(storage, id);

  const url = await getDownloadURL(ref(storageRef));

  console.log(url)
  return url;
}

export async function uploadPhoto(image: any, id: string): Promise<string> {
  const { uri } = image;
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

  const blob = await uriToBlob(uploadUri);
  const photoRef = await uploadToFirebase(blob, id);
  const image_id = photoRef.metadata.name;
  const url = await getPhoto(image_id);

  return url;
}