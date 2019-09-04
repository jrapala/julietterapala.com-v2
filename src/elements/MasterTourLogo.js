import React from 'react'
import styled from 'styled-components'
import MasterTour from '../../content/assets/mastertour.svg'

const Logo = styled.img`
	margin: 0 0.5em 1.5em 2em;
	width: 7em;
`

const MasterTourLogo = () => (
	<Logo src={MasterTour} alt="Eventric Master Tour Logo" />
)

export default MasterTourLogo
