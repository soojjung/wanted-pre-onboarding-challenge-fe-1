import { useContext } from 'react';
import { AppContext } from '../App';

// 보관함 해체(사용하게)해주는 함수 -> object형식으로 나온다
const useApp = () => useContext(AppContext);

export default useApp;
