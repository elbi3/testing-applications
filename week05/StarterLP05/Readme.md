# Learning Practice: White Box Testing

## Topics

- Statement coverage
- Branch coverage
- Loop coverage
- Organizing test cases, suites, and files
- Unit testing
- Integration testing

## Learning Objectives

By the end of this practice, you should be able to:

- Organize related test cases into suites and files.
- Write tests that execute statements and both outcomes of a branch.
- Test a loop with zero, one, and several items.
- Test React components using React Testing Library.
- Explain the difference between unit and integration testing.
- Write a unit test that exercises one component in isolation.
- Write an integration test that exercises multiple components working together.

## Resources

[White Box Testing - Software Engineering](https://www.geeksforgeeks.org/software-testing/software-engineering-white-box-testing/)
[Unit Testing](https://www.geeksforgeeks.org/software-testing/unit-testing-software-testing/)
[Integration Testing](https://www.geeksforgeeks.org/software-testing/software-engineering-integration-testing/)

## The Product

This practice uses a small Todo List application. The limited scope allows you to focus on white box testing without the added complexity of routing, a backend, or global state management. All application data is stored in local component state.

The application contains three components and one file of helper functions:

- **`src/utils/todoUtils.ts`:** Contains two functions. `createTodo(text)` creates a todo object, while `addTodo(todos, text)` determines whether a todo should be added.
- **`src/components/TodoItem.tsx`:** Displays one todo, a checkbox, and a Delete button. It receives data and callback functions through props.
- **`src/components/TodoList.tsx`:** Receives an array of todos and renders a `TodoItem` for each one.
- **`src/components/App.tsx`:** Stores the todos and input text in state. It renders the form and `TodoList`.

Review the application before beginning the tests. Try to understand the code yourself first. If you are unsure about a portion, you may use AI to help explain it.

## Test Cases, Suites, and Files

As an application becomes more complex, its tests must be organized clearly:

- **Test case:** One `test` or `it` block that checks a specific behavior.
- **Test suite:** A `describe` block that groups related test cases. A test file can contain multiple suites.
- **Test file:** A file generally organized around the function, component, or feature being tested.

## Testing React Applications

These tests are more complex than the tests introduced in Week 1. The solutions are available for reference and contain comments explaining the important parts of each test.

Don't be afrade to look at the solution. Note that the Lab will be easier.

## Step 0: Environment Setup

1. Install Jest and the required testing libraries:

   ```bash
   npm install --save-dev jest ts-jest ts-node @types/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

2. Create `jest.config.ts`:

   ```ts
   import type { Config } from "jest";

   const config: Config = {
     // Use ts-jest to convert TypeScript before Jest runs the tests.
     preset: "ts-jest",

     // Provide browser features such as document, buttons, and inputs.
     testEnvironment: "jsdom",

     // Load the additional DOM assertions before each test file runs.
     setupFilesAfterEnv: ["@testing-library/jest-dom"],

     // Allow imports that begin with @/ to resolve from the src directory.
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/src/$1",
     },
   };

   export default config;
   ```

3. Add `"test": "jest"` to the `scripts` section of `package.json`.

4. Run the tests:

   ```bash
   npm test
   ```

This application does not require a separate server. All data is stored in local state, so `npm test` is all that is required to run the test suite.

## Step 1: Statement Coverage

Write a test that covers `createTodo` in `src/utils/todoUtils.ts`.

- Call `createTodo` directly without rendering a React component.
- Use a sample string as the input.
- Verify that the returned object contains the expected text.
- Verify that `done` begins as `false`.
- Verify that the object contains a numeric `id`.
- One call is enough to execute every statement because the function has no branches.

<details>
<summary>Solution</summary>

```ts
// src/utils/todoUtils.test.ts

// Import the individual function being tested.
import { createTodo } from "./todoUtils";

// Group the test cases for createTodo into one suite.
describe("createTodo statement coverage", () => {
  it("creates a todo object from the given text", () => {
    // Arrange and Act:
    // Call the function with a known value and save its return value.
    const todo = createTodo("Buy milk");

    // Assert:
    // Confirm that the function stored the provided text.
    expect(todo.text).toBe("Buy milk");

    // A new todo should begin in an incomplete state.
    expect(todo.done).toBe(false);

    // The function should assign a numeric identifier to the new todo.
    // We check the type because the exact value may change between runs.
    expect(typeof todo.id).toBe("number");
  });
});
```

</details>

## Step 2: Branch Coverage

Write tests that cover `addTodo` in `src/utils/todoUtils.ts`.

- Locate the `if` statement inside `addTodo`.
- Determine what causes its condition to be true or false.
- Write one test using blank or whitespace-only text.
- Write another test using valid text.
- Confirm that blank text leaves the list unchanged.
- Confirm that valid text adds a new todo.

Together, these tests should execute both outcomes of the branch.

<details>
<summary>Solution</summary>

```ts
// src/utils/todoUtils.test.ts

// Import the function being tested.
import { addTodo } from "./todoUtils";

// Import the Todo type so the test data follows the application's structure.
import type { Todo } from "@/types";

describe("addTodo branch coverage", () => {
  it("returns the list unchanged when the text is blank", () => {
    // Arrange:
    // Begin with an empty list of todos.
    const todos: Todo[] = [];

    // Act:
    // Whitespace becomes an empty string after trim().
    // This makes !text.trim() true and executes the if block.
    const result = addTodo(todos, "   ");

    // Assert:
    // No todo should be added when the text is blank.
    expect(result).toEqual([]);
  });

  it("appends a new todo when the text is not blank", () => {
    // Arrange:
    const todos: Todo[] = [];

    // Act:
    // Valid text makes !text.trim() false.
    // The function skips the if block and creates a new todo.
    const result = addTodo(todos, "Buy milk");

    // Assert:
    // The returned array should contain exactly one todo.
    expect(result).toHaveLength(1);

    // The new todo should contain the supplied text.
    expect(result[0].text).toBe("Buy milk");

    // A newly created todo should not be marked as complete.
    expect(result[0].done).toBe(false);
  });
});
```

</details>

## Step 3: Loop Coverage

Write tests that cover the `todos.map` loop in `TodoList.tsx`.

- Render `TodoList` with an empty array.
- Render it with one todo.
- Render it with several todos.
- Check how many list items appear in each case.
- Confirm that the correct todo text is displayed.

These cases exercise the loop zero times, once, and multiple times.

Because `TodoList` renders real `TodoItem` components, these tests also confirm that the two components work together at a small integration level.

<details>
<summary>Solution</summary>

```tsx
// src/components/TodoList.test.tsx

// render places the component into the simulated document.
// screen provides queries for finding visible elements.
import { render, screen } from "@testing-library/react";

import TodoList from "./TodoList";
import type { Todo } from "@/types";

// TodoList requires callback props for toggling and deleting todos.
// These tests do not click anything, so an empty function is sufficient.
const noop = () => {};

describe("TodoList loop coverage", () => {
  it("renders no items when the todo list is empty", () => {
    // Arrange and Act:
    // An empty array causes todos.map to perform zero iterations.
    render(<TodoList todos={[]} onToggle={noop} onDelete={noop} />);

    // Assert:
    // queryAllByRole returns an empty array when no list items exist.
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("renders one item when the list contains one todo", () => {
    // Arrange:
    const todos: Todo[] = [{ id: 1, text: "Buy milk", done: false }];

    // Act:
    // The map loop performs one iteration.
    render(<TodoList todos={todos} onToggle={noop} onDelete={noop} />);

    // Assert:
    // One input item should produce one rendered list item.
    expect(screen.getAllByRole("listitem")).toHaveLength(1);

    // Confirm that the expected todo text is visible.
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  it("renders one item for each todo when the list contains several", () => {
    // Arrange:
    const todos: Todo[] = [
      { id: 1, text: "Buy milk", done: false },
      { id: 2, text: "Walk the dog", done: false },
      { id: 3, text: "Write tests", done: true },
    ];

    // Act:
    // The map loop performs one iteration for each of the three todos.
    render(<TodoList todos={todos} onToggle={noop} onDelete={noop} />);

    // Assert:
    // The number of rendered items should match the number of input objects.
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
```

</details>

## Step 4: Unit Testing

A **unit test** exercises one function, hook, or component in isolation. Dependencies are replaced with controlled values or mock functions so that the test remains focused on the selected unit.

In this step, you will test `TodoItem`, the smallest component in the application. Its responsibility is to display one todo and call the provided callback functions.

- Render `TodoItem` without `TodoList` or `TodoApp`.
- Provide one todo object through props.
- Use `jest.fn()` to create mock functions for `onToggle` and `onDelete`.
- Click the checkbox and verify that `onToggle` receives the correct todo ID.
- Click the Delete button and verify that `onDelete` receives the correct todo ID.

<details>
<summary>Solution</summary>

```tsx
// src/components/TodoItem.test.tsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoItem from "./TodoItem";
import type { Todo } from "@/types";

describe("TodoItem unit tests", () => {
  it("calls onToggle with the todo ID when the checkbox is selected", async () => {
    // Arrange:
    // userEvent simulates interaction more closely than calling an event
    // handler directly.
    const user = userEvent.setup();

    // Create controlled test data for the component.
    const todo: Todo = {
      id: 42,
      text: "Buy milk",
      done: false,
    };

    // Create mock callback functions.
    // Jest records when they are called and which arguments they receive.
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    // Render only TodoItem.
    // Its parent component and application state are not included.
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);

    // Act:
    // Find the checkbox by its accessible role and select it.
    await user.click(screen.getByRole("checkbox"));

    // Assert:
    // TodoItem should report which todo the user selected.
    expect(onToggle).toHaveBeenCalledWith(42);

    // The delete callback should not run during this interaction.
    expect(onDelete).not.toHaveBeenCalled();
  });

  it("calls onDelete with the todo ID when Delete is selected", async () => {
    // Arrange:
    const user = userEvent.setup();

    const todo: Todo = {
      id: 7,
      text: "Walk the dog",
      done: false,
    };

    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);

    // Act:
    // Locate the button using the label visible to the user.
    await user.click(screen.getByRole("button", { name: /delete/i }));

    // Assert:
    // TodoItem should pass the correct ID to its delete callback.
    expect(onDelete).toHaveBeenCalledWith(7);

    // The toggle callback should not run during this interaction.
    expect(onToggle).not.toHaveBeenCalled();
  });
});
```

</details>

## Step 5: Integration Testing

An **integration test** checks whether multiple units communicate and work together correctly.

In this step, you will interact with the complete `TodoApp`. The form, application state, helper functions, `TodoList`, and `TodoItem` components will all participate in the tests.

- Write one test that enters text, selects Add, and confirms that the new todo appears.
- Write another test that adds a todo, selects its checkbox, verifies that it is marked as complete, deletes it, and confirms that it is removed.
- Interact with the application through the visible user interface.
- Do not call component functions or state setters directly.

<details>
<summary>Solution</summary>

```tsx
// src/components/TodoApp.test.tsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoApp from "./TodoApp";

describe("TodoApp integration tests", () => {
  it("adds a todo through the form and displays it in the list", async () => {
    // Arrange:
    // Create a userEvent instance and render the complete application.
    const user = userEvent.setup();
    render(<TodoApp />);

    // Act:
    // Enter text through the real input element.
    await user.type(screen.getByPlaceholderText(/add a todo/i), "Buy milk");

    // Submit the text through the real Add button.
    await user.click(screen.getByRole("button", { name: /^add$/i }));

    // Assert:
    // This result requires the form, helper function, application state,
    // TodoList, and TodoItem to work together correctly.
    expect(screen.getByText("Buy milk")).toBeInTheDocument();

    // A successful submission should clear the input for the next todo.
    expect(screen.getByPlaceholderText(/add a todo/i)).toHaveValue("");
  });

  it("completes and deletes a todo through the user interface", async () => {
    // Arrange:
    const user = userEvent.setup();
    render(<TodoApp />);

    // Add a todo using the same actions a user would perform.
    await user.type(screen.getByPlaceholderText(/add a todo/i), "Buy milk");

    await user.click(screen.getByRole("button", { name: /^add$/i }));

    // Confirm that the todo was added before continuing.
    expect(screen.getByText("Buy milk")).toBeInTheDocument();

    // Act and Assert:
    // Select the todo's checkbox and verify the updated state.
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    // Delete the todo through the rendered TodoItem button.
    await user.click(screen.getByRole("button", { name: /delete/i }));

    // The item should no longer appear in the document.
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();

    // The list should now contain no todo items.
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
```

</details>

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on Canvas.

## AI Transparency

AI was used to help create portions of this file and to clean up its writing and formatting.
