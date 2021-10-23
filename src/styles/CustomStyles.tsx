import { css } from 'styled-components'

const CustomStyles = css`
	html,
	body {
		font-family: ${({ theme: { fonts } }) => fonts.primary.fontFamily};
		line-height: 1.4;
		color: ${({ theme: { colors } }) => colors.text};

		> div {
			margin-top: 0;
		}
	}

	header {
		font-size: 1.125rem;
	}

	main {
		font-size: 1.125rem;

		a:hover {
			background-color: ${({ theme: { colors } }) => colors.primary};
			border-radius: 5px;
			color: ${({ theme: { colors } }) => colors.background};
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1.1;

		+ * {
			margin-top: 0.5rem;
		}
	}

	li {
		margin-top: 0.25rem;
	}

	a {
		color: ${(props) => props.theme.colors.primary};
		text-underline-offset: 0.15em;
		text-decoration: underline dotted;
		font-weight: bold;
		padding: 0.1em;
	}

	p {
		margin-bottom: 1rem;
	}
`

export default CustomStyles
