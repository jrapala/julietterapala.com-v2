import React from 'react'
import styled from 'styled-components'
import MasterTour from '../../content/assets/mastertour.svg'

const LogoContainer = styled.div`
	padding: 0 1.5rem;
	margin-top: 0.5rem;
`

const Logo = styled.img`
	width: 100%;
	max-height: 150px;

	@media screen and (min-width: 520px) {
		height: auto;
		width: 250px;
	}
`

const MasterTourLogo = () => (
	<LogoContainer>
		<Logo src={MasterTour} alt="Eventric Master Tour Logo" />
	</LogoContainer>
)

export default MasterTourLogo
