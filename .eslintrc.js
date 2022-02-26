// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
        'react/prop-types': 0,
        'max-len': ['error', { 'code': 150 }],
        'vars-on-top': 'error',
        'func-style': [
            'error',
            'declaration',
            { 'allowArrowFunctions': true }
        ],
        'no-unused-vars': 'off',
        'comma-dangle': [
            'error',
            'never'
        ],
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
