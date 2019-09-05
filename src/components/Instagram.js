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

					@media screen and (max-width: 865px) {
						justify-content: space-evenly;
					}

					@media screen and (max-width: 600px) {
						align-items: center;
						flex-direction: column;
						justify-content: space-between;
					}
				`}
			>
				{instaPhotos.map(photo => (
					<a
						key={photo.id}
						href={photo.link}
						target="_blank"
						rel="noopener noreferrer"
						css={css`
							box-shadow: 0;
							display: block;
							margin: 0.5rem;
							max-width: calc(33% - 1rem);
							width: 180px;
							transition: 200ms box-shadow linear;

							:focus,
							:hover {
								box-shadow: 0 2px 14px #22222244;
								z-index: 10;
							}

							@media screen and (max-width: 600px) {
								min-width: 75%;
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
