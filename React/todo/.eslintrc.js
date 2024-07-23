module.exports = {
    env: {
        node: true,
        commonjs: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['airbnb', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false, // Garante que o parser não precise de um arquivo de configuração separado do Babel
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react'], // Adicione isso para garantir que o Babel entenda a sintaxe JSX
        },
    },
    plugins: ['react', 'react-hooks', 'testing-library', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: './',
            },
        ],
    },
};
