# Learning Practice: Defect Management

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
| 1 Num guests input accepts 15 | Product defect | A reservation may include 1–12 guests. |
| 2 Date picker selects one date | Product defect | Check-in must occur before checkout, but cannot select two dates. |
| 3 Res Availability not found | Product defect | All requested nights must be available; not sure whether availability logic is present. |
| 4 Unable to test stay length | Needs more investigation | A reservation may last 1–31 nights, but refer to finding 2 (can't select 2 dates). |
| 5 Booking fees not available | Needs more investigation | A valid reservation includes a one-time $50 cleaning fee, but cannot complete reservation to confirm it is applied |
| 6 Rental dropdown empty | Needs more investigation | Invalid information must produce an error; unsure whether missing data or broken dropdown. |
</details>

## Step 2: Write a Defect Report

Choose **one product defect** from Step 1 and write a complete defect report.
| 1 Num guests input accepts 15 | Product defect | A reservation may include 1–12 guests. |
Include:

- Unique identifier: 1
- Title: "Number of Guests" input accepts more than 12 guests
- Date reported: 11-19-26
- Reporter: El Brewster
- Application or feature
- Test environment
- Steps to reproduce
- Expected result: Error message ("Invalid information must produce an error.")
- Actual result: INput of 15 guests accepted and displays in "Bookings" view
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
| Defect ID                        | 1 |
| Title                            | "Number of Guests" input accepts more than 12 guests |
| Date Reported                    | 11-19-26 |
| Reporter                         | El Brewster |
| Application or Feature           | Feature |
| Test Environment                 | dev environment, Chrome browser |
| Preconditions                    | Load app in the browser, enter a date input to skip error message |
| Steps to Reproduce               | Navigate to the "Add Booking" page and enter number of guests, click "confirm booking" |
| Expected Result                  | Error message ("Invalid information must produce an error.") |
| Actual Result                    | Input of 15 guests accepted and displays in "Bookings" view |
| Severity                         | High |
| Priority                         | High |
| Status                           | New |
| Related Requirement or Test Case | A reservation may include 1–12 guests. |
| Supporting Evidence              | [see screenshot](screenshots/bookings_view.png) |

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
| 1 Num guests input accepts 15 | **Medium** | **High** | Feature technically works, but creates invalid reservation |
| 2 Date picker selects one date | **High** | **Urgent** | Can technically make a booking, but cannot enter valid stay range |
| 3 Res Availability not found | **High** | **Urgent** | Can technically make a booking, but cannot check availability range |

</details>
(4-6 need investigation)
