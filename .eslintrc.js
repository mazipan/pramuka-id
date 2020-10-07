module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'prettier'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "parser": '@typescript-eslint/parser'
    },
    "plugins": [
        "react"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': 'off',
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-undef": "off"
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
