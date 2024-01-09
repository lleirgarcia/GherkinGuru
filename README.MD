# Gherkin Guru 

## Summary
In this repository, you will find the application that we are going to test during the course. It is a simple application with a series of minimal functionalities to put into practice various types of tests that we can perform in the field of testing.

Additionally, we also find the Cypress repository for E2E and component testing.

This application is web-based, and we can also generate an APK for testing on Android.

## Requirements

- Node v16.20.2
- Npm 8.19.4
- IDE (Visual Code or IntelliJ)

## First steps

Execute in terminal following steps:
```
npm i 
```

### APK (no for now)
Add cordova for Andorid platform:
ionic cordova platform add android

Build APK for Android:
ionic cordova build android

### Start the APP client and server
App: ionic serve
Server: node src/server.js

### Start Cypress for tests
Start cypress wizard with
``` 
npx cypress open
```

E2E testing is already configured.

#### How test are estructured?
_TBD_

#### How tests works in Cypress?
_TBD_

#### Execute tests with Cypress
_TBD guide._




## Contact

📩 Mail: lleirgarcia@gmail.com
🗣️ LinkedIn: https://www.linkedin.com/in/lleirgarcia/