import { getStorage, ref, uploadBytes } from 'firebase/storage';
import app from './index';

const storage = getStorage(app);

const FileUP = (file: File) => {
  const storageRef = ref(storage, `images/${file.name}`);
  uploadBytes(storageRef, file).then((snapshot) => {
	
  });
};
