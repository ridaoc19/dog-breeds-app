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
		'react/react-in-jsx-scope': 'off',
		'no-console': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.js',
					'**/*.spec.js',
					'**/*.test.ts',
					'**/*.spec.ts',
					'**/*.test.tsx',
					'**/*.spec.tsx',
					'**/.storybook/**',
					'**/stories/**',
					'**/*.stories.ts',
					'**/*.stories.tsx',
					'**/*.setup.ts',
				],
			},
		],
	},
};
