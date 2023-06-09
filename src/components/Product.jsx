import styled from 'styled-components'
import { ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(black, 0.2);
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
	cursor: pointer;
`

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 350px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`
const Circle = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background-color: #e9f5f5;
	position: absolute;
`
const Image = styled.img`
	border-radius: 10%;
	height: 75%;
	z-index: 2;
	`

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.2);
		cursor: pointer;
	}
`
const Name = styled.h1`
	color: black;
	margin: 20px;
	font-size: 1rem;
	border: 1px solid black;
	padding: 10px;
	border-radius: 10px;
	text-align: center;
	background-color: white;
	opacity: 0.6;
`
const Price = styled.h1`
	color: darkorange;
	margin: 20px;
	font-size: 1rem;

`

const Product = ({item}) => {
  return (
	<Container>
		<Circle />
		<Image src={item.img} />
		<Info>
			<Icon>
				<ShoppingCartOutlined />
			</Icon>
			<Icon>
				<Link to={`/product/${item._id}`}>				
				<SearchOutlined />
				</Link>
			</Icon>
			<Icon>
				<FavoriteBorderOutlined />
			</Icon>
			<Name>{item.title}</Name>
			<Price>$ {item.price}</Price>
		</Info>
	</Container>
  )
}

export default Product