module.exports = {	
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		// 'plugin:react/recommended',
		'plugin:@next/next/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	'ignorePatterns': [
		'public/thirdparty/**',
		'.eslintrc.js',
		'next.config.js',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',		
		'prettier'
	],
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		// 'linebreak-style': [
		// 	'error',
		// 	'windows'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'single'
		// ],
		// 'semi': [
		// 	'error',
		// 	'always'
		// ],
		'comma-dangle': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-unknown-property': [2,{ 'ignore': ['jsx' ]}],
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
			  'singleQuote': false,
			  'parser': 'flow',
			  'endOfLine': 'off'
			}			
		  ]
	},
	'settings': {
		'react': {
		 	'version': 'detect',
		},
	},	
};
