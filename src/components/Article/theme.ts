 import {createContext,useState,useCallback} from 'react'

 type ThemeContext = {
	tab: number;
	sub: number;
	setTab: () => void;
	setSub: () => void;
  };
  const defaultContext: ThemeContext = {
	tab:1,
	sub:1,
	setTab: () => {},
	setSub: () => {}
  };
const themeContext = createContext<ThemeContext>(defaultContext);
const useTheme = (): ThemeContext => {
	// state名はThemeContext typeのプロパティに合わせる。
	const [tab, setisTab] = useState<number>(1);
	const [sub, setisSub] = useState<number>(1);
	// 関数名はThemeContext typeのプロパティに合わせる。
	const setTab = useCallback((): void => {
	  if(tab===1){
		setisTab(0);
	  }else if(tab===0){
		setisTab(1);
	  }
	}, []);
	const setSub = useCallback((): void => {
	  
	}, []);
	return {
	  tab,
	  sub,
	  setTab,
	  setSub
	};
  };
export {themeContext,useTheme}