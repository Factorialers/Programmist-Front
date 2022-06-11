import { GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { useRouter } from 'next/router'
import auth from "./firebase"

const Login = () => {
	const router = useRouter()
	const provider = new GoogleAuthProvider()
	signInWithPopup(auth,provider)
			.then((result) => {
				router.push('/logged')
			})
			.catch((error)=>{
				alert(error.message);
			})
}
export default Login