import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #f9f9f9;
	/* box-shadow: 1px 1px 10px #d6d6d6; */
	box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
		0 18px 36px -18px rgba(0, 0, 0, 0.3),
		0 -12px 36px -8px rgba(0, 0, 0, 0.025);
	margin: 0 auto 2em auto;
	justify-content: center;
	max-width: 80%;
	padding: 2em;
`

const Platform = ({ children }) => <Container>{children}</Container>

export default Platform
