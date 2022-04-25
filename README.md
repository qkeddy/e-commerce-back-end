# E-Commerce Back End
![badmath](https://img.shields.io/github/license/qkeddy/e-commerce-back-end)
![badmath](https://img.shields.io/github/issues/qkeddy/e-commerce-back-end)
![badmath](https://img.shields.io/github/languages/top/qkeddy/e-commerce-back-end)
![badmath](https://img.shields.io/github/watchers/qkeddy/e-commerce-back-end)
![badmath](https://img.shields.io/github/forks/qkeddy/e-commerce-back-end)

## Description
A full CRUD back end for an e-commerce site using Express.js, Sequelize, and a MySQL database.

A demo of this application can be viewed [here](https://drive.google.com/file/d/1iKPGEZBSAZsAVkSmambfkUsfHnoWCwen/view?usp=sharing).

A link to the GitHub repository can be viewed [here](https://github.com/qkeddy/e-commerce-back-end).

## Table of Contents

- [Deployment](#deployment)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)

## Deployment
1. Fork and clone project repo
2. Run `npm install`
3. Create a MySQL database called `ecommerce_db`. A script is available to automatically drop and create the MySQL database with the following: `source ./db/schema.sql`
4. Seed the MySQL database `npm run seed`
5. Open the CLI in the project folder and run `npm start` (or if in development use Nodemon: `npm run watch`)


## Features
- API endpoints to support full CRUD operations against a simple E-Commerce database.
- Seed database to populate test data using Sequelize.


## Usage
See steps above.

## Tests
Currently, no automated unit tests have been built. 

## Credits
- [Quinlan Eddy](https://github.com/qkeddy)

## License
MIT License

Copyright (c) 2022 Quin Eddy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## How to Contribute

If you would like to contribute to this project. Please email me at qkeddy@gmail.com. If you would like to contribute to future projects, please follow me at https://github.com/qkeddy.

It is requested that all contributors adhere to the standards outlined in the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
