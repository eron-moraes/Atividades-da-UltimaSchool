# teste-unitario-jest
teste-unitario-jest


//Packages to install
//===================================================== ==

npm init

npm install --save-dev jest 

npm install --save-dev jest-html-reporter 

//=======================================================

Package.json setup to exec:
> "scripts": {  "test": “jest” }, // for Jest executions

//=======================================================

Package.json setup to report:
> "jest": {
   "reporters": [
     "default",
     [   "./node_modules/jest-html-reporter",
       {   "pageTitle": "Test Report“ }
                          ]
   ] }
   
//======================================================
