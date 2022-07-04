module.exports = {
	extends: ['next', 'prettier', 'plugin:react/recommended', 'xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
};
