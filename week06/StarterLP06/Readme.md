# Learning Practice: Experience-Based Testing

## Step 1: Error Guessing

Choose one feature of the `airbnb-clone-ts` application, such as creating or viewing a booking.
--> I want to study the search bar functionaltiy.

Based on your experience with similar websites, list **three things you think might go wrong**.
---> 1. I want to know what kind of messages happen with weird entries, like all special characters.
---> 2. I want to know if it handles SQL injection
---> 3. I want to see how the string matching works, does it give all results for no match or something similar?

These are predictions based on your experience, knowledge, and instincts. You do not need to prove that they are defects at this point.

## Step 2: Exploratory Testing

Write a one-sentence **testing charter** describing what you want to investigate about your selected feature.

---> Does the search function feel intuitive when I use it, or do I need to play around with it to understand how the app works?

Spend **10 to 15 minutes** testing the feature. As you work, briefly record:

I entered "hi" and hit enter, but nothing happened.
I entered "main street" and hit enter, but nothing happened.
Since I am wondering if I am missing the point, I click "Add Booking" to see what's there. Since I see fields labeled Rental, Date, and Number of Guests, I decide to try other values.
I click home again, and scroll down (odd that the app is confined to 2 inches vh). I enter "123", nothing happens.
I enter 12/01 and hit enter, and nothing happens.
I decide to navigate the site a bit and see what I am missing.
I go to bookings, and see nothing. It makes me wonder if that's what the search feature is for, so I add a booking.
I try to add a booking. The rental dropdown has nothing, so I enter nothing. I enter the date 11/11/2026. I enter 2 guests, and click confirm booking. (Not sure whether anything happened, since the only feedback was button background change)
I navigate to "Bookings" to see if the booking has been added. I see "Rental: Date: 2026-11-11 Guests: 2"
I navigate to home and enter "2026". Nothing happens.
I enter "Rental: Date: 2026-11-11 Guests: 2" and nothing happens. Wow this feature is non-existent.

<details>
<summary>Exploratory testing notes</summary>

| What I Tried | What Happened | What I Decided to Try Next |
| ------------------------------------------------------- | ------------- | -------------------------- |
| I entered "hi" and hit enter | nothing happens | I entered a different string "main street"|
| I entered "main street", hit enter | nothing happens | I click "Add Booking" to see what's there |
| I decide to try other values (123) | nothing happens | I decide to try other values |
| I enter 12/01 and hit enter | nothing happens | I navigate to bookings and add a booking |
| I add a booking for 11/11/2026, 2 guests | booking is added | I check for the res under "Bookings" |
| I go "Home", search for my booking with "2026" | nothing happens | I decide to try other values |
| I enter "Rental: Date: 2026-11-11 Guests: 2", hit enter | nothing happens | I decide the feature is not implemented |

(end test)

</details> 

## Step 3: Checklist-Based Testing

Create a checklist containing at least **five checks** for the same feature.

1. Does the search bar handle SQL injection cases?
2. Does the search bar handle negative cases such as empty inputs, special characters, or long strings?
3. Does the search bar handle white space?
4. Are typos accommodated or handled well?
5. Does the search bar accommodate valid single and multi-word queries?

Perform each check and record one of the following results:

- **Passed**
- **Failed**
- **Unable to Test**

Include a brief note when a result needs additional explanation.

<details>
<summary>Checklist format</summary>

| Check             | Result      | Notes                                   |
| ----------------- | ----------- | --------------------------------------- |
| `' OR '1'='1 `    | **Failed**  | no values returned, no warning messages |
| "November 8"      | **Failed**  | no values returned, no warning messages |
| "2 bedrooms"      | **Failed**  | no values returned, no warning messages |
| "L.A."            | **Failed**  | no values returned, no warning messages |
| "  "              | **Failed**  | no values returned, no warning messages |  
| "Last ANGLS"      | **Failed**  | no values returned, no warning messages | 

</details>

## Step 4: Acceptance Testing

- **Given:** The starting condition
- **When:** The action the user performs
- **Then:** The specific result that should occur

Given I am on the Home page, when I enter my booking date in the search field, then the booking info should appear in the display.
Given I am on the Home page, when I enter my query `' OR '1'='1 `, then the home page should inform me my query was invalid.
Given I am on the Home page, when I enter white space "   ", then the home page should suggest valid alternatives to search (such as, please enter a location or dates of your resetvation).
Given I am on the HOme page, when I enter a destination, then the home page should display rentals available for that locaiton.


For example:

```text
Given I am on the booking form,
when I submit a rental, date, and number of guests,
then the reservation should appear in my list of bookings.
```

For the same feature you selected in Step 1:

- Write **three to five acceptance criteria** using the Given, When, Then format.
- Write each criterion from the user's perspective.
- Make each expected result specific enough to determine whether it passed or failed.
- Perform each criterion against the running application.
- Mark each result as **Passed**, **Failed**, or **Unable to Test**.
- If a criterion fails, explain what happened.

<details>
<summary>Acceptance criteria format</summary>

| Given, When, Then                                                                                                                              | Result     | Notes      |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Given **I am on the Home page**, when **I enter my booking date in the search field**, then **the booking info should appear in the display.** | **Failed** | no results |
| Given **I am on the Home page**, when **I enter my query `' OR '1'='1 `**, then **the home page should inform me my query was invalid.**       | **Failed** | no results |
| Given **I am on the Home page**, when **I enter white space "   "**, then **the home page should suggest valid alternatives to search.**       | **Failed** | no results |
| Given **I am on the Home page**, when **I enter a destination**, then **the home page should display rentals available for that locaiton.**    | **Failed** | no results |

</details>

A checklist item usually describes one specific check, such as submitting a form with an empty date. An acceptance criterion describes whether the user can accomplish a complete goal, such as successfully booking a rental.

Your checklist and acceptance criteria may overlap because they examine the same feature for different purposes.

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on Canvas.

## AI Transparency

AI was used to help create portions of this file and to clean up its writing and formatting.
