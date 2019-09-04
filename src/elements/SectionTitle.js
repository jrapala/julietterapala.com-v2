import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	title: PropTypes.string,
}

const H3 = styled.h3`
	color: #000;
	margin: 1em 1em;
`

const SectionTitle = ({ title }) => <H3>{title}</H3>

SectionTitle.propTypes = propTypes

export default SectionTitle
