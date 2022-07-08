import { getStorage, ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import app from './index';

const storage = getStorage(app);

const FileUP = async (file: File | null) => {
  const storageRef = ref(storage, `images/${file?.name}`);
  let snapshot;
  let url;
  if (file != null) {
    snapshot = await uploadBytes(storageRef, file);
    url = await getDownloadURL(snapshot.ref);
  }
  return url;
};
export default FileUP;
