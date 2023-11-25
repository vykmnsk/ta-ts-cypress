# ta-ts-cypress
Test Automation in Typescript with Cypress


## Setup

#### Node
install node.js and npm from https://nodejs.org/en/download/ 

verify:

> node -v

> npm -v

#### Typesctipt
> npm install -g ts-node

verify:
> ts-node src/try.ts

#### Cypress tests
> npm install    


## Run

#### via __CLI__: single test in *headless* mode

> npx cypress run --spec [path/to/spec-filename].cy.ts

#### via __Cypress UI__ in a browser (*Chrome*)
> npx cypress open
    
choose E2E testing

choose Chrome

click on test(s) to run