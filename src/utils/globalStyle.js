import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
	}

	* + * {
		margin-top: 1rem;
	}

	html,
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		font-size: 18px;
		line-height: 1.4;

		> div {
			margin-top: 0;
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
    	font-weight: bold;
    	text-decoration: none;
    	&:hover {
      		color: ${props => props.theme.colors.primary};
    	}
  	}
`

export default GlobalStyle
