import {useState,FC} from 'react';

const Footer:FC = () => {
  const [state,setState]=useState<number>(1);
  const add=()=>{
	  setState(state+1)
  }
  return (
    <footer className="bg-gray-700 shadow-xl">
	  <div>{state}</div>
	  <button type="button" onClick={add} className="text-stone-50">click</button>
      <div className="pt-3 text-3xl text-center text-stone-50">Programist</div>
      <div className="pt-5 text-sm text-center text-stone-50">©2022 Factorialers ALL RIGHT RESERVERD</div>
    </footer>
  );
};
export default Footer;
