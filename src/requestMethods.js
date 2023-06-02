import axios from 'axios';


const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhY2U1ZGNmNmEzNzkwNmE3MjExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk3NzM2MiwiZXhwIjoxNjgxMjM2NTYyfQ.LhSOUTKsydOYmJ-ZIjOcwc0cP6mgKdQ0g43PjBrJqo0'

export const publicRequest = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

export const userRequest = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	headers: { token: `Bearer ${TOKEN}` }
});

