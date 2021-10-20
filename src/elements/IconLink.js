import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VisuallyHidden from '../components/VisuallyHidden'

const Link = styled.a`
	color: inherit;
	margin: 0 0.25rem;
	font-size: 1.75rem;

	&:hover {
		color: ${(props) => props.theme.colors.primary};
	}
`

const IconLink = ({ icon, url, description }) => (
	<Link href={url} target="_blank">
		<VisuallyHidden>{description}</VisuallyHidden>
		<FontAwesomeIcon icon={icon} aria-hidden />
	</Link>
)

export default IconLink
