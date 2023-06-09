import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
	rgba(255, 255, 255, 0.5),
	rgba(255, 255, 255, 0.5)
	),
	url("https://cdn.shopify.com/s/files/1/1257/6551/files/WBG_2_a164e906-cef0-46c5-922a-c779ffc0eb8a.jpg?v=1670879224&width=1500") center;
	
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: cover;
	`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })};
`

const Title = styled.h1`
  font-size: 24px;	
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: border-box;
  padding: 15px 20px;
  background-color: yellowgreen;
  color: black;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  &:disabled {
	color: orange;
	cursor: not-allowed;
	  }
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Error = styled.span`
  color: red;
`


const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const { isFetching, error } = useSelector(state => state.user)

	const dispatch = useDispatch()

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, {username, password})
	}

  return (
	<Container>
		<Wrapper>
			<Title>SIGN IN</Title>
			<Form>
				<Input 
					placeholder="username"
					onChange={e => setUsername(e.target.value)} 
				/>
				<Input 
					placeholder="password"
					onChange={e => setPassword(e.target.value)} 
				/>
				<Button
					onClick={handleClick}
					disabled={isFetching}
				>LOGIN</Button>
				{error && <Error>Something went wrong</Error>}
				<Link>DID YOU FORGET YOUR PASSWORD DUMB ASS?</Link>
				<Link>CREATE A NEW ACCOUNT</Link>
			</Form>
		</Wrapper>
	</Container>
  )
}

export default Login