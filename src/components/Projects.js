import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from './Title'

const Projects = () => {
	const data = useStaticQuery(graphql`
		query ProjectsQuery {
			site {
				siteMetadata {
					portfolio {
						title
						description
						link
					}
				}
			}
		}
	`)
	return (
		<section>
			<Title>Selected Projects</Title>
			{data.site.siteMetadata.portfolio.map(portfolioItem => (
				<div key={portfolioItem.link}>
					<h4 style={{ marginBottom: '16px' }}>
						<a
							href={portfolioItem.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{portfolioItem.title}
						</a>
					</h4>
					<p
						dangerouslySetInnerHTML={{
							__html: portfolioItem.description,
						}}
					/>
				</div>
			))}
			<p>
				More on{' '}
				<a
					href="https://github.com/jrapala/"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub!
				</a>
			</p>
		</section>
	)
}

export default Projects
