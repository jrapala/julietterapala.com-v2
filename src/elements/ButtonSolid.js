import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.a`
	background: ${(props) => props.theme.colors.primary};
	border: 3px solid ${(props) => props.theme.colors.primary};
	border-radius: 8px;
	box-shadow: 4px 4px 4px ${(props) => props.theme.colors.neutralMedium};
	color: #fff;
	display: inline-block;
	font-weight: ${(props) => props.theme.fonts.primary.bold};
	margin: 1em;
	padding-left: 1.5em;
	text-align: center;
	white-space: nowrap;
	width: 68%;

	@media screen and (max-width: 780px) {
		margin-top: 0;
		width: 88%;
	}

	&:hover {
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
		cursor: pointer;
		padding-left: 0;
		transform: scale(1.05);
		transition: all 200ms ease-in-out;
		width: 70%;
		span {
			opacity: 1;
			transition: opacity 200ms ease-in-out;
		}

		@media screen and (max-width: 780px) {
			width: 90%;
		}
	}
`

const ButtonSolid = ({ children, url }) => (
	<Button href={url} target="_blank" rel="noopener noreferrer">
		{children}
		<span
			css={css`
				opacity: 0;
			`}
		>
			&ensp;&rarr;
		</span>
	</Button>
)

export default ButtonSolid
