# ecommerce-product-listing

## Quick start
- git clone https://github.com/rana0286/ecommerce-product-listing.git
- cd ecommerce-product-listing
- Use node >= v8
- yarn install or npm i
- yarn start or npm run start
- open URL http://localhost:8080/ in browser
- npm run test to run the unit test with eslint and sass-lint check
- npm run lint for JavaScript/React linting
- npm run sass-lint for sass linting


## Architecure and principle
- I follow the atomic design patteren
- For good scalability, reusability and unit testing I used "single responsibility principle"
- I used DRY(Do not repeat) principle
- It is a single page app developed using react/redux
- Sepration of concern

## Tools and Technology
- Webpack 4 and Babel 7 for build and transpiler
- Redux for state management and redux-thunk as a middleware
- React as a view library
- Jest and enzyme for unit testing
- eslint for JavaScript linting
- sass-lint for sass linting
- scss to write the css with BEM convention
- Node v10 for build and automation
- No Boilerplate used
- No any react app creater used
- All the config for build, unit test, linting has been done from scratch

## Code quality
- sass lint issue 0
- eslint issue 0 (On cuurrent config of eslint)
- Components unit test coverage is 95%
- pre commit hooks (using husky) to run linting and unit test cases

## Further Improvements
- Handle errors and exceptions from single place
- i18n
- Performance check
- Accessibility check
- Integration (BDD)
- CI/CD implementation
- Can be used styled-components

## Why not SSR
- Pros and cons of CSR and SRR are debatable

