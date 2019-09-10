import React from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageTitle from '../elements/PageTitle'
import articles from '../utils/articles'

const Container = styled.section`
	display: flex;
	flex-direction: column;
	margin-left: 1.5em;
	max-width: 80%;
`

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo title="Writing" />
			<PageTitle title="Writing" />
			<Container>
				<p>Here are some of my blog posts!</p>
				<ul style={{ marginBottom: '1.666rem', marginLeft: '1rem' }}>
					{articles.map(article => (
						<li key={article.link}>
							<a
								css={css`
									color: black;
								`}
								href={article.link}
								title={`Link to article ${article.title}.`}
								target="_blank"
								rel="noopener noreferrer"
							>
								{article.title}
							</a>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	)
}

export default NotFoundPage
