module.exports = {
	globals: {
		before: true,
		after: true,
		spyOn: true,
		__PATH_PREFIX__: true,
		__BASE_PATH__: true,
		__ASSET_PREFIX__: true,
	},
	root: true,
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'react',
		'import',
		'jsx-a11y',
		'react-hooks',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': 0,
		'react/jsx-filename-extension': [0],
		'react/prop-types': 0,
		'no-console': 1,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
}
