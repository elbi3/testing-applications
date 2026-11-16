# Learning Practice: Test Planning

## Topics

- Test objectives and scope
- Test approach
- Roles and responsibilities
- Test environments and test data
- Risks and mitigation
- Entry and exit criteria
- Test schedules and communication

## Learning Objectives

- Explain the purpose of a test plan.
- Define the scope and objectives of testing.
- Select appropriate test types and techniques.
- Identify the people, tools, environments, and data needed for testing.
- Identify testing risks and possible responses.
- Create measurable entry and exit criteria.
- Organize testing activities into a simple schedule.

## The Product

The North Vacation Booking development team is preparing a new version of its booking application.

The application allows a user to:

- Select a rental.
- Enter check-in and checkout dates.
- Enter the number of guests.
- Create a booking.
- View their bookings.
- Increase, decrease, or reset values where applicable.

The team wants a plan describing how the application should be tested before release. You will create a short test plan for this release.

## Step 1: Define the Test Context

Describe what will be tested and why.

Include:

- Two test objectives
- Features that are in scope
- Features that are out of scope
- The test basis, such as requirements, user stories, source code, or designs
- At least one assumption or constraint

<details>
<summary>Example format</summary>

| Section                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| Test objective           | Confirm that users can create a valid booking |
| In scope                 | Booking form and booking list                 |
| Out of scope             | Payment processing                            |
| Test basis               | Booking requirements and user stories         |
| Assumption or constraint | Testing must be completed within one week     |

</details>

## Step 2: Identify Roles and Responsibilities

Identify at least **three roles** involved in testing.

For each role, explain:

- What the person is responsible for
- When they will be involved
- Who they need to communicate with

<details>
<summary>Example format</summary>

| Role   | Responsibilities           | When Involved                    | Communication                 |
| ------ | -------------------------- | -------------------------------- | ----------------------------- |
| Tester | Designs and executes tests | Before and during test execution | Reports defects to developers |
|        |                            |                                  |                               |

</details>

## Step 3: Define the Test Approach

Explain how the application will be tested.

Include:

- The test levels that will be used
- At least two test types
- At least two test techniques
- Any manual or automated testing
- The test deliverables that will be created

Possible test deliverables include:

- Test cases
- Automated test files
- Test results
- Coverage reports
- Defect reports
- A test completion report

<details>
<summary>Example format</summary>

| Test Area    | Test Level or Type | Technique               | Manual or Automated | Deliverable    |
| ------------ | ------------------ | ----------------------- | ------------------- | -------------- |
| Booking form | Component testing  | Boundary value analysis | Automated           | Jest test file |
|              |                    |                         |                     |                |

</details>

## Step 4: Identify Test Requirements

Describe what is needed to complete the testing.

Include:

- The test environment
- Browsers or devices
- Testing tools
- Test data
- Any access, accounts, or permissions
- Any people or training needed

## Step 5: Create a Risk Register

Identify at least **three risks** that could affect the product or the testing process.

For each risk, include:

- A description of the risk
- Whether it is a product risk or project risk
- Its likelihood
- Its impact
- A possible mitigation

<details>
<summary>Example risk register</summary>

| Risk                                           | Type         | Likelihood | Impact | Mitigation                           |
| ---------------------------------------------- | ------------ | ---------- | ------ | ------------------------------------ |
| A user can create a booking with invalid dates | Product risk | Medium     | High   | Prioritize date validation tests     |
| The test environment is unavailable            | Project risk | Low        | High   | Confirm access before testing begins |
|                                                |              |            |        |                                      |

</details>

## Step 6: Define Entry Criteria

Entry criteria describe what must be ready before test execution can begin.

Create at least **three entry criteria** for this project.

Your criteria may address:

- Availability of testable code
- Completion of earlier testing
- Availability of the test environment
- Availability of test cases
- Availability of test data
- Installation of testing tools

Write criteria that can be clearly checked as met or not met.

## Step 7: Define Exit Criteria

Exit criteria describe when testing is complete or when it should stop.

Create at least **three measurable exit criteria**.

Your criteria may address:

- Percentage of planned tests completed
- Required code or requirements coverage
- Number or severity of unresolved defects
- Completion of high-risk testing
- Successful regression testing
- Release deadlines

<details>
<summary>Example entry and exit criteria table</summary>

| Type  | Criterion                                             |
| ----- | ----------------------------------------------------- |
| Entry | The application can be opened in the test environment |
| Entry | All planned test cases have been reviewed             |
| Exit  | All planned high-priority tests have been executed    |
| Exit  | No critical defects remain unresolved                 |

</details>

## Step 8: Create a Test Schedule

Create a simple schedule containing at least **five testing activities**.

Include:

- The activity
- The person or role responsible
- When it will happen
- Any activity that must be completed first

<details>
<summary>Example schedule</summary>

| Activity            | Responsible Role         | Time  | Dependency                      |
| ------------------- | ------------------------ | ----- | ------------------------------- |
| Review requirements | Tester and product owner | Day 1 | Requirements are available      |
| Design test cases   | Tester                   | Day 2 | Requirements have been reviewed |
|                     |                          |       |                                 |

</details>

## Step 9: Define the Communication Plan

Explain how testing information will be shared with the team.

Include:

- What information will be communicated
- Who will receive it
- How it will be communicated
- When or how often it will be communicated

<details>
<summary>Example communication plan</summary>

| Information   | Audience     | Method         | Frequency              |
| ------------- | ------------ | -------------- | ---------------------- |
| Test progress | Project team | Daily stand-up | Daily                  |
| Defect report | Developer    | GitHub issue   | When a defect is found |
|               |              |                |                        |

</details>

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on canvas

## AI Transparency

AI was used to help create portions of this file and to clean up its writing and formatting.
