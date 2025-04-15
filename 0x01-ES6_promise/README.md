# 0x01. ES6 Promises

## 📚 Project Description

This project introduces the use of **Promises** in modern JavaScript (ES6+), focusing on handling asynchronous operations using `Promise`, `async/await`, and proper error handling with `try/catch`. Promises help to manage asynchronous code more elegantly than traditional callbacks, leading to cleaner and more readable code.

All code in this project will be tested using **Jest** and verified with **ESLint** following the **Airbnb style guide**.

---

## 🧠 Learning Objectives

By the end of this project, I should be able to explain and apply:

- ✅ What a JavaScript **Promise** is, why it’s useful, and how it works.
- ✅ How to use `.then()`, `.catch()`, `.finally()` for chaining and error handling.
- ✅ How to use the static methods of the `Promise` object:
  - `Promise.resolve()`
  - `Promise.reject()`
  - `Promise.all()`
  - `Promise.race()`
  - `Promise.allSettled()`
  - `Promise.any()`
- ✅ How to use `async/await` syntax to simplify asynchronous code.
- ✅ How to use `throw` and `try...catch` blocks for error management in both sync and async contexts.
- ✅ How to export and test JavaScript functions using Jest.

---

## 🛠 Project Setup

### Requirements

- Node.js 12.11.x
- Ubuntu 18.04 LTS (for ALX checks)
- ESLint (Airbnb style)
- Jest for unit testing

### Install dependencies

Ensure you're in the project directory, then:

```bash
npm install

This installs all required dev dependencies (babel, eslint, jest, etc.) as defined in the package.json.

Run tests
bash

npm run test
Run ESLint checks
bash

npx eslint .
⚙️ Configuration Files
The project includes the following configuration files:

package.json — Defines dependencies and scripts

babel.config.js — Babel transpilation config

.eslintrc.js — ESLint rules using Airbnb base config

utils.js — Helper functions used in some tasks:

uploadPhoto()

createUser()

js

// uploadPhoto returns:
{ status: 200, body: 'photo-profile-1' }

// createUser returns:
{ firstName: 'Guillaume', lastName: 'Salva' }
📁 Project Structure
arduino

0x01-ES6_promise/
├── babel.config.js
├── package.json
├── .eslintrc.js
├── utils.js
├── 0-promise.js
├── 1-promise.js
├── 2-then.js
├── 3-all.js
├── ...
├── __tests__/
│   ├── 0-promise.test.js
│   ├── 1-promise.test.js
│   └── ...
└── README.md
✅ Sample Usage
js

// example usage of 0-promise.js
import getResponseFromAPI from './0-promise';

const promise = getResponseFromAPI();
console.log(promise instanceof Promise); // true
🧪 Testing with Jest
Test files are located under the __tests__/ folder and follow this pattern:

bash

__tests__/
  |- 0-promise.test.js
  |- 1-promise.test.js
Each function exported in the source files is tested for correctness, edge cases, and proper Promise handling.

👨‍💻 Author
Duncan Korir

GitHub: @duncorir

LinkedIn: duncan-korir

Portfolio: gaineafrica.vercel.app

🧠 Acknowledgements
Project developed as part of the ALX Frontend JavaScript track.
