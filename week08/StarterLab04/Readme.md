# Lab: Test Planning and Defect Management

## Step 1: Create a Test Plan

Create a brief test plan for the provided Counter application.

Test objectives:

Verify that "counter-app" functions as a basic counter, with basic increment, decrement, and reset functionality. UI should reflect application logic accurately and reactively. Sould increment and decrement by one unless buttons indicate visually a different increase/decrease metric.

What is in and out of scope:
In scope:
Increment, decrement, and reset functions
UI elements display and behave as expected.
Basic user flow implementation and effectiveness.

Out of scope:
Other mathematical calculations or behaviors, features unrelated to increment/decrement/reset, add-ons, page routing and navigation, performance beyond basic component reactivity, wholely unrelated features like payments and image display.

The testing approach:
Exploratory and white box testing (writing test based on source code and internal structure), statement coverate, state changes.

The test environment and tools:
The Counter application, Jest, React Testing Library, VSCode, Git, and GitHub.

At least one product risk
Spam button clicks prevent correct count display

Entry criteria:
"counter-app" runs and displays in the browser, testing environment installed and active

Exit criteria:
Planned test cases run and pass, defects fixed or accepted, all findings documented

## Step 2: Design Test Cases

Create at least four test cases for the application.

For each test case, include:

| Test case ID | Starting state | Actions | Expected result
|----|---|---|---|
| TC-01 | application open and visible, counter says 0 | click increment | counter says 1 |
| TC-02 | application open and visible, counter says 0 | click decrement | counter says -1 |
| TC-03 | application open and visible, counter says 1 | click reset | counter says 0 |
| TC-04 | application open and visible, counter says 0 | spam-click increment 5 times| counter says 5 |
| TC-05 | application open and visible, counter says 0 | spam-click decrement 5 times| counter says -5 |
| TC-06 | application open and visible, counter says 0 | combine TC-04 and TC-05 | counter says 0 |

At least one test case should involve multiple actions in sequence.

## Step 3: Execute the Tests

Run your test cases against the application.

For each test case, record:

| Test case ID | Actual result | Pass or fail |
|----|---|---|
| TC-01 | 1 | Pass |
| TC-02 | 1 | Fail |
| TC-03 | 0 | Pass |
| TC-04 | 5 | Pass |
| TC-05 | 5 | Fail |
| TC-06 | 0 | Fail |

Repeat any failed test to determine whether the result can be reproduced.
--> results reproduced multiple times

## Step 4: Report a Defect

If you find a defect, create one defect report.

Include:

Defect-01: "Decrement performs as increment"
Related test case(s): TC-02, TC-05, TC-06
Test environment: RTL, User-event testing library, Vitest, jest-dom
Steps to reproduce: in the dev environment, in terminal, run "npm run test"
Expected result: 7 tests pass
Actual result: 4 tests pass, 3 tests fail
Severity and priority: Critical severity, Urgent priority (single-feature application non-functional: count only goes up, not down)
Status: NEw


### Defect-01: Decrement performs as increment

| Field | Details |
| ----- | ------- |
| **Related test case(s)** | TC-02, TC-05, TC-06 |
| **Test environment** | RTL, user-event, Vitest, jest-dom |
| **Severity** | Critical |
| **Priority** | Urgent |
| **Status** | New |

#### Steps to reproduce
1. In the dev environment, open a terminal.
2. Run `npm run test`.

#### Expected result
All 7 tests pass.

#### Actual result
4 tests pass, 3 tests fail.

#### Severity and priority rationale
The application's only feature is non-functional for decrementing: the count only goes up, never down.
