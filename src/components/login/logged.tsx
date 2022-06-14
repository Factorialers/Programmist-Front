import router from 'next/router';
import { MouseEvent, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../libs/firebase/authProvider';
import { auth } from '../../libs/firebase/firebase';

const Logged = () => {
  const { user } = useContext(FirebaseContext);
  useEffect(() => {
    if (user == null) {
      router.push('/login');
    }
  });
  const HandleLogout = ( ) => {
		auth.signOut().then(()=>{
      router.push('/login')
    }).catch((error)=>{
      alert(error)
    })
	  };
  return (
    <div>
      <div className="text-4xl text-center">you logged in {user?.displayName}</div>
     <button type='button' onClick={HandleLogout}>log out</button>
    </div>
  );
};
export default Logged;
