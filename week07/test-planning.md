# The Product

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
<summary>Test Context</summary>

| Section                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| Test objective           | Confirm that users can make a payment         |
| In scope                 | Valid payments                                |
| In scope                 | Invalid payments                              |
| In scope                 | Duplicate payments                            |
| In scope                 | Insufficient funds                            |
| Out of scope             | Able to complete reservation successfully     |
| Out of scope             | Able to cancel reservation                    |
| Out of scope             | Able to select rental option                  |
| Test basis               | Payment requirements                          |
| Assumption or constraint | Testing must be completed within two weeks    |

| Test objective           | Confirm that users can select a rental option |
| In scope                 | Customers can search rental options           |
| In scope                 | Customers can user interactive components during rental lookup |
| In scope                 | Customers can select a specific rental |
| In scope                 | Selected rental navigates to a new page for that rental |
| Out of scope             | Able to complete reservation successfully     |
| Out of scope             | Able to check dates available                 |
| Out of scope             | Able to leave a rental review                 |
| Test basis               | Business requirements and user stories        |
| Assumption or constraint | Testing must be completed within one week     |

</details>

## Step 2: Identify Roles and Responsibilities

Identify at least **three roles** involved in testing.

For each role, explain:

- What the person is responsible for
- When they will be involved
- Who they need to communicate with

<details>
<summary>Test Rolres and Responsibilities</summary>

| Role          | Responsibilities                                                   | When Involved                      | Communication                 |
| ------------- | ------------------------------------------------------------------ | ---------------------------------- | ----------------------------- |
| QA Tester     | Test app and identify defects | Before and during test execution   | When there is a product to QA test | Reports defects to dev team   |
| Test Manager  | Creates overall test plan, handles resources, oversees the process | Involved in entire testing process | Communicates testing status to stakeholders |
| Product Owner | Represent customer/user and define product                         | All phases of SDLC                 | Communicate customer needs, interface with stakeholders |
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
<summary>Approach</summary>

| Test Area       | Test Level or Type  | Technique                | Manual or Automated | Deliverable                        |
| --------------- | ------------------- | ------------------------ | ------------------- | ---------------------------------- |
| Booking form    | Component testing   | Boundary value analysis  | Automated           | Jest test file, test results       |
| Booking form    | Usability           | Error Guessing           | Manual              | Test cases, defect reports         |
| Rental listings (API) | Integration testing | Equivalence partitioning | Automated           |Jest test files, test results       |
| Payment         | Integration testing | Equivalence partitioning | Automated           | Test results, Automated test files |

</details>

## Step 4: Identify Test Requirements

Describe what is needed to complete the testing.

Include:

- The test environment
- Browsers or devices: Chromium, Linux PC
- Testing tools: Vitest, Playwright, jsdom, checklists, BRD
- Test data: Sample users and booking entries, sample payment info
- Any access, accounts, or permissions: Test user accounts and test payment options, API access
- Any people or training needed: A product owner, test manager, QA tester, Software dev tester
Training would be familiarity with the SDlC, dev environment, and test tools as well as browser/device experience

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
| Sample data is not representative of typical user | Product risk | Medium | High | Test with actual users, acquire beter sample data    |
| Test time alloted not enough to complete tests | Project risk | Low | High | Ensure Test Manager has more testers to meet time requirements   |
| A user cancels a booking and is not refunded | Product risk | Low        | High   | Write tests to ensure canceled reservations initiate refunds |

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

Booking dates are available for selection (code is available for testing). 
Customers can cancel a reservation (feature is available for testing)
Test credit card information is available.
Test checklist for error-guessing has been written.
The test environment is ready to run tests.
An mvp version of the app is up and running.

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
<summary>Entry and exit criteria table</summary>

| Type  | Criterion                                             |
| ----- | ----------------------------------------------------- |
| Entry | Booking dates are available for selection (code is available for testing). |
| Entry | Customers can cancel a reservation (feature is available for testing) |
| Entry | Test credit card information is available.            |
| Entry | Test checklist for error-guessing has been written.   |
| Entry | The test environment is ready to run tests.           |
| Entry | An mvp version of the app is up and running.          |         
| Exit  | A unit test is written for every component            |
| Exit  | 100% unit test pass.                                  |
| Exit  | All identified/known defects resolved and tested      |
| Exit  | 100% completion on identified high-risk tests (run & passed) |
| Exit  | Testing completed in line with Test Manager's schedule (3 weeks before release deadline) |

</details>

## Step 8: Create a Test Schedule

Create a simple schedule containing at least **five testing activities**.

Include:

- The activity
- The person or role responsible
- When it will happen
- Any activity that must be completed first

<details>
<summary>Schedule</summary>

| Activity            | Responsible Role         | Time  | Dependency                      |
| ------------------- | ------------------------ | ----- | ------------------------------- |
| Test Planning       | Test Manager             | Day 1 | Functional Requirements are available |
| Test Writing        | Tester                   | Day 2 | Test environment setup  |
| Test Writing        | Tester                   | Day 2 | Test data available (stubs)  |
| Test Writing        | Tester                   | Day 2 | Test data available (stubs)  |
| Test Execution      | Tester                   | Weekly | Tests written and can run in dev environment |
| Regression Testing  | Tester                   | Day 30 | Re-running tests (previous testing has been done) |
| Test Reporting      | Test Manager             | Day 30 | Test results from running test suite |
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
| Defect report | QA Tester    | GitHub issue   | When a defect is found |
| Automated test summaries | Test Manager | Written report | Weekly |
| Test progress | Project Manager | Written report/meeting | Bi-Weekly |
| Code Defect   | Tester       | GitHub issue/Manager assignment | When a defect is found |
| Progress Update | Test Manager | Written report | Weekly |

</details>