# 0x00. ES6 Basics

## 📘 Project Overview

This project introduces modern JavaScript using **ECMAScript 6 (ES6)**, focusing on syntax, structure, and features that improve code readability, maintainability, and performance. By the end, you’ll be comfortable with variables, functions, objects, iterators, and new parameter handling techniques in ES6.

---

## 🧠 Learning Objectives

By the end of this project, you should be able to explain — without Googling — the following concepts:

### ✅ What ES6 Is
- ES6, also known as **ECMAScript 2015**, is a significant upgrade to JavaScript that introduced cleaner syntax and powerful new features like `let`, `const`, arrow functions, promises, template literals, and more.

### ✅ New Features Introduced in ES6
- `let` and `const`
- Arrow functions (`=>`)
- Default function parameters
- Template literals (`` `Hello, ${name}` ``)
- Destructuring
- Rest and spread operators
- Classes and inheritance
- Modules (`import/export`)
- Promises
- Symbols
- Sets and Maps
- `for...of` loop
- Iterators and Generators

### ✅ Difference Between a Constant and a Variable
- `let` allows reassignment of values; `const` does not.
- `const` is immutable in reference, but objects or arrays declared with `const` can still have their **contents** changed.

### ✅ Block-Scoped Variables
- `let` and `const` are **block-scoped** (limited to `{}` blocks), unlike `var`, which is function-scoped.

### ✅ Arrow Functions and Default Parameters
- Arrow functions provide shorter syntax and do not bind their own `this`.
```js
const greet = (name = 'Guest') => `Hello, ${name}`;

✅ Rest and Spread Function Parameters
Rest collects multiple arguments into an array:

js

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
Spread unpacks array or object values:

js

const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
✅ String Templating in ES6
Use template literals with backticks for multi-line strings and interpolation:

js

const name = 'Duncan';
console.log(`Welcome, ${name}!`);
✅ Object Creation and Their Properties in ES6
Shorthand syntax:

js

const name = 'Duncan';
const user = { name }; // same as { name: name }
Computed property names:

js

const key = 'score';
const obj = { [key]: 95 }; // { score: 95 }
Method shorthand:

js

const obj = {
  greet() {
    console.log('Hello');
  }
};
✅ Iterators and for...of Loops
Use for...of to loop through iterables like arrays, strings, Maps, Sets, or custom iterators.

js

for (const char of 'Gaine') {
  console.log(char);
}
Custom iterable using a generator:

js

const iterable = {
  *[Symbol.iterator]() {
    yield 'A';
    yield 'B';
    yield 'C';
  }
};
for (let val of iterable) console.log(val); // A B C
📚 Resources
Concept	Resource	Type
ES6 Overview	ES6 Features (es6-features.org)	Cheatsheet
Mozilla Docs	ECMAScript 6 Overview	Docs
Statements	JS Statements - MDN	Docs
Arrow Functions	Arrow Functions - MDN	Docs
Default/Rest Parameters	Function Parameters - MDN	Docs
Iterables & Iterators	Demystifying Iterables - DigitalOcean	Tutorial
Object Enhancements	Object Initializer - MDN	Docs
Template Literals	Template Literals - MDN	Docs
🛠️ Project Requirements
General
All files are interpreted on Ubuntu 18.04 LTS using NodeJS 12.11.x

Use vi, vim, emacs, or Visual Studio Code for editing

All files end with a new line

A README.md file at the root of the project folder is mandatory

Use the .js file extension for all code

Tests will be run using Jest

Code will be linted using ESLint with provided rules

All functions must be exported using export default or export {}

📁 Folder Structure Example
csharp

0x00-ES6_basics/
│
├── README.md
├── 0-constants.js
├── 1-block-scoped.js
├── 2-arrow.js
├── 3-default-parameter.js
├── 4-rest-parameter.js
├── 5-spread-operator.js
├── 6-string-template.js
├── 7-object-properties.js
├── 8-iterators.js
├── package.json
├── .eslintrc.js
└── __tests__/
    └── *.test.js
👨‍💻 Author
Duncan Korir
LinkedIn | GitHub | Portfolio