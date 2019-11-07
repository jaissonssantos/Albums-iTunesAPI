module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ["airbnb", "prettier", "prettier/react"],
    rules: {
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "es5",
                singleQuote: true,
                printWidth: 100
            }
        ]
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "react/jsx-filename-extension": [0],
        "import/extensions": "off"
    }
};
