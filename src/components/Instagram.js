import React, { Fragment } from 'react'
import Image from 'gatsby-image'
import { css } from 'styled-components'
import useInstagram from '../hooks/use-instagram'

const Instagram = () => {
	const instaPhotos = useInstagram()
	return (
		<Fragment>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					margin: 0em 2em 2em;
				`}
			>
				{instaPhotos.map(photo => (
					<a
						key={photo.id}
						href={`http://www.instagram.com/p/${photo.id}`}
						css={css`
							box-shadow: 0;
							display: block;
							margin: 0.5rem;
							max-width: calc(33% - 1rem);
							width: 120px;
							transition: 200ms box-shadow linear;

							:focus,
							:hover {
								box-shadow: 0 2px 14px #22222244;
								z-index: 10;
							}
						`}
					>
						<Image
							fluid={photo.fluid}
							alt={photo.caption}
							css={css`
								width: 100%;
								* {
									margin-top: 0;
								}
							`}
						/>
					</a>
				))}
			</div>
		</Fragment>
	)
}

export default Instagram
