module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:@next/next/recommended', 'xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'operator-linebreak': 'off',
	},
};
