import { loginStart, loginSuccess, loginFailure } from './userRedux';
//import { publicRequest } from '../requestMethods';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://weedsbgone.onrender.com',
});

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await api.post('/auth/login', user);
		dispatch(loginSuccess(res.data));

	} catch (err) {
		dispatch(loginFailure());
	}
}