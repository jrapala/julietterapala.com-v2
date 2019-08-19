import React from 'react'
import styled from 'styled-components'
import LogoSVG from '../images/logo.svg'

const LogoImage = styled('img')`
	display: block;
	margin: 3rem auto 1.5rem;
`

const Logo = () => <LogoImage src={LogoSVG} alt="Juliette Rapala's Initials" />

export default Logo
