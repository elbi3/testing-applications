# Learning Practice: White Box Testing

## Test Cases, Suites, and Files

As an application grows, its tests must be organized clearly:

- **Test case:** One `test` or `it` block that checks a specific behavior.
- **Test suite:** A `describe` block that groups related test cases. A test file can contain multiple suites.
- **Test file:** A file generally organized around the function, component, or feature being tested.

## Step 1: Statement Coverage

**Statement coverage** checks whether every line of code ran at least once during your tests.

Write a test that covers `createTodo`.

- Call `createTodo` directly with a sample string.
- Verify that the returned object contains the expected text.
- Verify that `done` begins as `false`.
- Verify that the object contains a numeric `id`.
- One call is enough to execute every statement because the function has no branches.

<details>
<summary>Solution</summary>

```ts
import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";

describe("createTodo statement coverage", () => {
  it("creates a todo object from the given text", () => {
    const todo = createTodo("Buy milk");

    expect(todo.text).toBe("Buy milk");
    expect(todo.done).toBe(false);
    expect(typeof todo.id).toBe("number");
  });
});
```

</details>

## Step 2: Branch Coverage

**Branch coverage** checks whether every possible outcome of each decision (such as an `if`) ran at least once.

Write tests that cover `addTodo`. Add them below your first suite in the same file.

- Locate the `if` statement inside `addTodo`.
- Determine what makes its condition true and what makes it false.
- Write one test using blank or whitespace-only text.
- Write another test using valid text.
- Confirm that blank text leaves the list unchanged.
- Confirm that valid text adds a new todo.

Together, these tests should execute both outcomes of the branch.

<details>
<summary>Solution</summary>

```ts
describe("addTodo branch coverage", () => {
  it("returns the list unchanged when the text is blank", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "   ");

    expect(result).toEqual([]);
  });

  it("adds a new todo when the text is not blank", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "Buy milk");

    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Buy milk");
    expect(result[0].done).toBe(false);
  });
});
```

</details>

## Step 3: Loop Coverage

**Loop coverage** checks that a loop works correctly when it runs zero times, once, and several times. Bugs often hide at these edges.

Write tests that cover the `for` loop in `countDone`. Add them below your second suite.

- Call `countDone` with an empty array.
- Call it with one finished todo.
- Call it with several todos, some finished and some not.
- Check the returned count in each case.

These cases exercise the loop zero times, once, and multiple times. The last case also runs both outcomes of the `if` inside the loop.

<details>
<summary>Solution</summary>

```ts
describe("countDone loop coverage", () => {
  it("returns 0 when the list is empty (loop runs zero times)", () => {
    const todos: Todo[] = [];
    const result = countDone(todos);

    expect(result).toBe(0);
  });

  it("counts one finished todo (loop runs once)", () => {
    const todos: Todo[] = [{ id: 1, text: "Buy milk", done: true }];

    const result = countDone(todos);

    expect(result).toBe(1);
  });

  it("counts only the finished todos (loop runs several times)", () => {
    const todos: Todo[] = [
      { id: 1, text: "Buy milk", done: true },
      { id: 2, text: "Walk the dog", done: false },
      { id: 3, text: "Write tests", done: true },
    ];

    const result = countDone(todos);

    expect(result).toBe(2);
  });
});
```

</details>

## Step 4: Check Your Coverage

Run the tests with a coverage report:

```bash
npm run coverage
```

Jest prints a table like this:

```
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 todoUtils.ts |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|-------------------
```

- **% Stmts** is your statement coverage.
- **% Branch** is your branch coverage.
- **Uncovered Line #s** lists any lines your tests never reached.

All columns should read 100. If one does not, the "Uncovered Line #s" column tells you which part of the code to write another test for.

Try this: comment out your blank-text test in Step 2 and run the report again. Watch the branch percentage drop, then restore the test.


