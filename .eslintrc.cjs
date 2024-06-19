module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-console': 'warn',
	},
};
