<h1 align="center">Buscapé Challenge</h1>

<h1 align="center"><img src="./src/assets/images/preview.gif" /></h1>

## ✨ Technologies

This project was developed using the following technologies:

- [React](https://reactjs.org/)
- [React DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [Create REACT-APP](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://react-redux.js.org/)
- [Styled-components](https://www.styled-components.com/)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [ESLint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Project

### You can preview the project clicking [here](https://buscape-ecommerce-react.vercel.app/).

React e-commerce application based on "Buscapé" web site, you can move items to your cart and remove them, if you move the same item you already moved to the cart, it will count 1 more in quantity property, you can also remove them 1 by 1.

## 🎯 Challenge

This project is based on the [buscape-company-front-end](https://github.com/buscape-company/exercicios/tree/master/frontend) challenge, and proposed by [Pedro Leão](https://github.com/pleaobraga) using React and Redux.


## 🔧 Technologies choice

Project developed using the React library to make it a Single Page Application, which guarantees the best performance when running directly in the client's browser, Create React Application tool to configure the environment, TypeScript as the language to guarantee props and state values accordingly as expected from the contract, Redux as the global context state management, Styled Components to avoid unnecessary and conflicting component styles, Testing Library and Jest for testing to ensure quality assurance on components and events, Atomic Design as the design pattern to promote clean maintenance and good coding practices according to ESLint and EditorConfig.

 ## 🔨 Project Architecture

 Project Architecture based on Atomic Design and SOLID principles.

 ```
 src
 ├──assets
 │   ├──images
 │   └──styles
 ├──components
 │   ├──Atom
 │   ├──Molecule
 │   └──Organism
 ├──helpers
 ├──resources
 │   └──items
 ├──store
 │   └──actions
 └──utils
 ```

 ## 🧪 Components

 ```
 Component
  ├──Component.tsx
  ├──Component.test.tsx
  ├──styles.ts
  └──index.ts
 ```

 ## 🎆 Redux

 Redux was used to guarantee cart value on every component and to add and to remove items from cart.
 you can access the redux actions on folder `src/store/actions`.

 ## 👷‍♀️ Tests

 Unit tests coverage was higher than 80%

 <h1 align="center"><img src="./src/assets/images/coverage.png" /></h1>

## 🚀 How to run

Clone this repository.
```bash
# Run to install dependencies.
$ yarn

# Run to start the project on `localhost:3000`.
$ yarn start
```

## 💣 How to test

Clone this repository.
```bash
# Run to install dependencies.
$ yarn

# Run to test all suited tests.
$ yarn test

# Run to test all suited tests and get their coverage.
$ yarn coverage
```

## 🚧 How to build

Clone this repository.
```bash
# Run to install dependencies.
$ yarn

# Run to start building the project.
$ yarn build

# Builded project it´s now available at folder `root/build`
```

## 💎 Next steps

- Create an API to register the products in a database, instead a mock JSON file.
- Create an unique product details page.
- Create an alternative layout to the different screen sizes.
