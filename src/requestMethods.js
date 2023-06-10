import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODFmNmE2ZGVlZTliY2M0YTQ5OWE0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjI0MzU3NiwiZXhwIjoxNjg3MTA3NTc2fQ.ZpzZXpvDMg8GrU43zB2og098RTilnDloZ00ORbUcw2s'

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` }
});

