import React, { FC } from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
	margin-top: 1rem;
`

const SectionTitle: FC = ({ children }) => <H2>{children}</H2>

export default SectionTitle
