# Mutation Testing

## Using Stryker to generate mutants and test them

In this example, a basic JS functions are tested using the Jest unit testing library.
**The test files contain less the required number of test cases.**

- **gradeToLetter.js**: Returns the corresponding letter for a grade. This function is made based on the requirements: [grade to letter requirements](./README-gradeToLetter.MD)

- Do not modify the bmi.js and bmi.test.js code (They are only there as examples)

The steps to run

- install nodejs (you can use [codesandbox](https://codesandbox.io/) or [codespaces](https://github.com/features/codespaces) as well)
# Getting Started

## 1. Install Node.js
Install Node.js on your machine.  
You may also use GitHub Codespaces or CodeSandbox.

## 2. Install project dependencies
To install the project dependencies, run:

```bash
npm install
```

You should now be able to run the example codes using:

```bash
node main.js
```

## 3. Run the unit tests

To run the unit test (Jest), use: 

```bash
npm test
```
## 4. Run mutation testing

To run the mutation generate using stryker and Jest : 

```bash
npx stryker run --reporters html
```

## 5. Get the report

The last line generates an HTML file with the name of repoerters/mutation.html which contains the test results for the coverage and also Mutants.
If you are running the tests locally you should be able to see the results in the html file. If you are on codespaces, you will need to install "Live Server" plugin and use it to open the HTML file.




## Exercise

Getting to Know the Artifact

In this exercise, you will analyze an existing function and its corresponding test suite.

### Exercise step 1. Review requirements

Review the implementation in `gradeToLetter.js` and its `Requirements` in the related Readme file: 

[README-gradeToLetter.MD](./README-gradeToLetter.MD) for the gradeToLetter.js implementation.


### Exercise step 2: Add new test cases 

Review the test cases in `gradeToLetter.test.js`.

   - Observe which scenarios are currently being tested. 
   - Identify what inputs are covered and what might be missing.
   - Add at least five new test cases for each test file.

<mark>Based on the surviving mutations, add new test cases --- at least 5 --- (in `gradeToLetter.test.js`).</mark>

- 3 the equality and inequality related test cases
- 1 return of errors based on wrong input
- 1 uncovered condition


### Exercise step 3. Run test

Run the existing tests:
  
   ```bash
   npm test
   ```

I have already added required script runs inside the `package.json` file.

```json
    "scripts": {
    "test": "rm -rf .stryker-tmp/* && jest", 
    "reset": "jest --clearCache",
    "mutation": "rm -rf .stryker-tmp/* && stryker run --reporters html"
  }
```

**Note that if you are on Windows the `rm` function will not run and result in errors.**

### Exercise step 4: Generate mutants and review report

#### Run the following command:

```bash
npx stryker run --reporters html
```

or

```bash 
npm run mutation
```

#### Open the report

Open the report in the browser:

```open reports/mutation/mutation.html```

### Exercise step 5: Find Survivors and Improve test cases

Find the mutants that survived the mutation testing.



### Exercise step 6: Redo the tests

Run the previous commands to execute the tests again. Check if there are any other mutants that survived the mutation testing.

# Deliverable Checklist

- The new gradeToLetter.test.js file with new test cases. (25 Points)
- Write an explanation -- few lines -- of what you did, include screenshots if needed and explain your findings. (25 Points)
- The new Stryker report mutation.html file. (50 Points)