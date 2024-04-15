/**
 * ESLint ^7.0.0 이후 eslintrc format -> deprecated
 */
export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ignores: ["*.config.js"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
