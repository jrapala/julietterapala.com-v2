import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.a`
	color: inherit;
	margin: 0 0.25em;
	font-size: 1.5em;

	&:hover {
		color: ${props => props.theme.colors.primary};
	}
`

const Icon = ({ icon, url, alt }) => (
	<Container title={alt} href={url} target="_blank">
		<FontAwesomeIcon icon={icon} />
	</Container>
)

export default Icon
