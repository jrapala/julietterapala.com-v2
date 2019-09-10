import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	title: PropTypes.string,
}

const H2 = styled.h2`
	color: ${props => props.theme.colors.mediumGray};
	margin: 1em 1em;
`

const PageTitle = ({ title }) => <H2>{title}</H2>

PageTitle.propTypes = propTypes

export default PageTitle
