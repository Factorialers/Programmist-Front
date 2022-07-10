import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from './index';

const storage = getStorage(app);

export default storage;

const fileUpload = async (file: File) => {
  const storageRef = ref(storage, `images/${file?.name}`);

  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return url;
};

export { fileUpload };
