import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useState, useEffect } from "react"
import axios from "axios"

const api = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Products = ({cat, filters}) => {
	console.log(cat, filters)
	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			try {
				const catState = cat 
				? `/products?category=${cat}` 
				: '/products'
				const res = await api.get(catState)
				setProducts(res.data)
				console.log(res.data[0].title)
			} catch (err) {
				console.log(err)
			}
		}
		getProducts()
	}, [cat])
	console.log(products)

	useEffect(() => {
		cat &&	
			setFilteredProducts(
				products.filter((item) => 
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			)								
	}, [products, cat, filters])
	
	console.log(filteredProducts)
  return (
	<Container>
		{cat 
			? filteredProducts.map((item) => <Product item={item} key={item._id} />)
		 	: products
				.slice(0,8)
				.map((item) => <Product item={item} key={item._id} />)}
	</Container>
  )
}

export default Products