import { ref,getBlob } from "firebase/storage";
import { storage } from "./firebase";

const getFile=async(path:string)=>{
	const pathReference = ref(storage, path);
	const blob:Blob = await getBlob(pathReference)
	return blob
}
const toString=async(blob:Blob)=>{
	const text=await blob.text();
	return text
}

export {getFile,toString}