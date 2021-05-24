import { useContext } from 'react';
import { Context } from '../App';

function useAuth() {
	return useContext(Context);
}

export default useAuth;
