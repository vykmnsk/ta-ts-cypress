# Test Automation in Typescript with Cypress


## Setup

### Node
Install node.js and npm from https://nodejs.org/en/download/ and verify:

> node -v

> npm -v


### Cypress tests
> npm install    


## Run

### headless

all tests

> npx cypress run --spec cypress/e2e/*

a specific test (e.g. *homepage*)

> npx cypress run --spec cypress/e2e/homepage.cy.ts


### in a browser (e.g. *Chrome*)

> npx cypress open
    
choose E2E testing

choose Chrome

click on test(s) to run