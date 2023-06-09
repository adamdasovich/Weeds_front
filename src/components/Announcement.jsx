import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: firebrick;
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
  padding: 20px;
`

const Announcement = () => {
  return (
	<Container>
		30% off all Merchandise!
	</Container>
  )
}

export default Announcement