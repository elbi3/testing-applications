# Learning Practice: Defect Management

## Topics

- Defect identification
- Defect reports
- Severity and priority
- Defect status
- Defect tracking
- Root cause and process improvement

## Learning Objectives

- Identify when an actual result differs from an expected result.
- Distinguish between a product defect, test issue, and requested change.
- Write a clear and reproducible defect report.
- Assign an appropriate severity, priority, and status.
- Track a defect through retesting and closure.
- Identify possible causes and process improvements.

## The Product

The North Vacation Booking application allows users to create and view reservations.

The requirements state:

- A reservation may include 1–12 guests.
- A reservation may last 1–31 nights.
- Check-in must occur before checkout.
- All requested nights must be available.
- A valid reservation includes a one-time $50 cleaning fee.
- Invalid information must produce an error.

During testing, several unexpected results were observed that do not aline with the requirments!!!!. You will investigate and document them using the defect management process.

## Step 1: Classify the Findings

Find the defects in the application that do not match with the above requirments.
For each finding, decide whether it is most likely:

- A product defect
- A problem with the test
- A requested change
- Something that requires more investigation

Explain your decision.

<details>
<summary>Classification table</summary>

| Finding | Classification | Explanation |
| ------- | -------------- | ----------- |
| 1       |                |             |
| 2       |                |             |
| 3       |                |             |
| 4       |                |             |

</details>

## Step 2: Write a Defect Report

Choose **one product defect** from Step 1 and write a complete defect report.

Include:

- Unique identifier
- Title
- Date reported
- Reporter
- Application or feature
- Test environment
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Initial status
- Related requirement
- Supporting evidence that should be attached

Your steps should be detailed enough for another person to reproduce the problem.

<details>
<summary>Defect report template</summary>

| Field                            | Information |
| -------------------------------- | ----------- |
| Defect ID                        |             |
| Title                            |             |
| Date Reported                    |             |
| Reporter                         |             |
| Application or Feature           |             |
| Test Environment                 |             |
| Preconditions                    |             |
| Steps to Reproduce               |             |
| Expected Result                  |             |
| Actual Result                    |             |
| Severity                         |             |
| Priority                         |             |
| Status                           |             |
| Related Requirement or Test Case |             |
| Supporting Evidence              |             |

</details>

## Step 3: Assign Severity and Priority

Assign a severity and priority to each product defect from Step 1.

Use the following levels:

### Severity

- **Critical:** The application or a major feature cannot be used.
- **High:** A major feature does not work correctly.
- **Medium:** A feature works, but it has a significant problem or workaround.
- **Low:** The problem has a small effect on normal use.

### Priority

- **Urgent:** Fix immediately.
- **High:** Fix before the next release.
- **Medium:** Fix when higher-priority work is complete.
- **Low:** The fix may be postponed.

Explain why you selected each severity and priority. Remember that severity describes the defect’s impact, while priority describes how soon it should be fixed.

<details>
<summary>Severity and priority table</summary>

| Defect | Severity | Priority | Explanation |
| ------ | -------- | -------- | ----------- |
|        |          |          |             |
|        |          |          |             |

</details>

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on canvas

## AI Transparency

AI was used to help create portions of this file and to clean up its writing and formatting.
