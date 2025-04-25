# 0x04. TypeScript

## 📘 Project Description

This project introduces **TypeScript**, a statically typed superset of JavaScript that compiles to plain JavaScript. Through a series of tasks, we explore TypeScript's powerful typing system, interfaces, classes, generics, namespaces, and how it integrates with the DOM and external libraries.

By the end of this project, we will be able to build more maintainable, robust, and scalable JavaScript applications using TypeScript.

---

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

##  Learning Objectives

By completing this project, you will be able to:

- Understand and use basic types in TypeScript (`string`, `number`, `boolean`, `array`, `tuple`, `enum`, etc.)
- Create and implement interfaces, classes, and functions with types
- Work with the DOM using TypeScript safely
- Use generic types to write reusable components and functions
- Group code using namespaces and avoid global scope pollution
- Merge multiple interface declarations using declaration merging
- Import and type external libraries using ambient namespaces
- Simulate nominal typing for stronger type safety

---

## 🛠️ Project Structure

Each subfolder represents a task and is a separate mini-project with its own configuration:

0x04-TypeScript/ ├── task_0/ │ ├── js/ │ │ └── main.ts │ ├── package.json │ ├── tsconfig.json │ └── webpack.config.js ├── task_1/ │ ├── js/ │ │ └── main.ts │ ├── package.json │ ├── tsconfig.json │ └── webpack.config.js ├── ...


---

## 📦 Installation & Usage

### Prerequisites
- Node.js v12+
- TypeScript (`npm install -g typescript`)
- Webpack (`npm install -g webpack webpack-cli`)
- ESLint (`npm install -g eslint`)

### To Run a Task:
```bash
cd task_X   # Replace X with the task number
npm install
npm run build   # or: npx webpack

The output will be found in the dist/ folder (if configured in webpack.config.js)

Requirements
Files must end with a new line

No TypeScript compiler errors or warnings

Code checked with jest (v24.9.*)

Code must use the .ts extension

Editor compatibility: vi, vim, emacs, or Visual Studio Code

A linter config (.eslintrc.js) is included per task

Author
Duncan Korir
GitHub | LinkedIn | Portfolio