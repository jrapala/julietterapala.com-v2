import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageTitle from '../elements/PageTitle'

const Container = styled.div`
	display: flex;
	margin-left: 1.5em;
`

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo title="404: Not Found" />
			<PageTitle>Not Found</PageTitle>
			<Container>
				<p>
					You just hit a route that doesn&#39;t exist... the sadness.
				</p>
			</Container>
		</Layout>
	)
}

export default NotFoundPage
