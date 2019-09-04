import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from './Title'

const Email = () => {
	const data = useStaticQuery(graphql`
		query EmailQuery {
			site {
				siteMetadata {
					email
				}
			}
		}
	`)
	return (
		<section>
			<Title>Email</Title>
			<div
				dangerouslySetInnerHTML={{
					__html: data.site.siteMetadata.email,
				}}
			/>
		</section>
	)
}

export default Email
