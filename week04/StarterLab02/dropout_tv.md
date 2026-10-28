
# Lab: Black Box Testing

## Step 1: Select a Website

[dropout tv](https://www.dropout.tv/)
I will be testing the Search (shows) feature, as well as the login feature

## Equivalence Partitioning

SEARCH: Start typing to see results!

When I type a single character, the [search](https://watch.dropout.tv/search) page should show no results. Example: "a"
When I type two characters, the search page shows results ("All(2375)"). Example: ".a"
When I type two characters that match a substring in a word, the search page shows results ("All(219)"). Example: "as"
When I type a phrase that matches part of a title, the search page shows results ("All(2)"). Example: "Run as fast"
When I type three numbers, the page shows no results. Example: 102, 123, 122, 124 (This seems limited by highest number of episodes in a season)
When I type three non-alphanumeric characters, the page shows all results ("All(3780)"). Example: "(((", "...", "!!!" (was this an error on their part?)
When I type substring "cc", the page shows no results.


|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| Classification              | Partition       | Range or Condition   | Representative Value | Expected Result                  |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length          | invalid, low    | no input             | " "                  | page shows nothing               |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length          | invalid, low    | one character        | "a"                  | page shows nothing               |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length/content  | valid, match    | 2 or more characters | "as"                 | show filtered results "All(219)" |
|                             |                 | (substring match)    |                      |                                  |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length/content  | valid, no match | 2 alpha-numerics     | "cc"                 | page shows nothing               |
|                             |                 | (no substring match) |                      |                                  |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length/content  | valid, no match | 2 or more !a-Z/0-9   | "**"                 | show all results "All(3780)"     | 
|                             |                 | (no substring match) | "(((", "...", "!!!"  |                                  |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|
| search text length/content  | invalid, high,  | 2 or more a-Z/0-9    | "111", "aaaaa"       | page shows nothing               |
|                             | no match        | (no substring match) |                      |                                  |
|-----------------------------|-----------------|--------------------- |----------------------|----------------------------------|

Note 1: I realize this could have been two tables, one for input length, and one for filtering success, but because of my user testing experience, I felt inclined to keep it as one. Their filtering seemed odd to me--not a pure filter. Some inputs showed all results. Maybe "**" is a hidden accessibility thing I don't know about.
Note 2: From what I can tell, there is no upper limit for string length.
Note 3: Any amount of white space entered returned no results, so "           " returns no results.

## Decision Table Testing

### worksheet (website observations)

When I click login button, I am taken to a "Dropout Sign in" modal, then I enter my email address, then I click next,then I enter my password and click sign in, OR I select "Reset your password" ("Don't know your password? Never set one?") OR I select "Email me a sign in link". If I select the email link option, I see a "Check your email!" message. Once I click on my email link (elsewhere, even on another machine), I am taken to [pick](https://watch.dropout.tv/profile/pick) "Who is watching?". I can select my profile, add a profile, or click on "Manage Profiles" button. I click on my profile, and I am taken to the main page.

#### Condition Stubs
Did user enter an email address?
Did user enter correct password?
Did user select email link? 
Did user open their email and click the link?

#### Action Stubs
User is taken to "who is watching" selection
User selects profile and is taken to main page
User selects edit profile
User is taken to "Add profile" page 
User enters new profile name
User selects done on "manage profiles" page
User returned to "who is watching selection"

#### table

| Conditions and Actions         | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 |
| ------------------------------ | :----: | :----: | :----: | :----: | :----: | :----: |
| User enters valid email        |   T    |   T    |   F    |   T    |   T    |   T    |
| User enters correct password   |   T    |   -    |   -    |   -    |   F    |   -    |
| User uses email link           |   -    |   T    |   -    |   T    |   -    |   F    |
| **Select user profile**        |   X    |   X    |   -    |   -    |   -    |   -    |
| **Create new profile**         |   -    |   -    |   -    |   X    |   -    |   -    |
| **Logged in**                  |   X    |   X    |   -    |   X    |   -    |   -    |
| **Raise `ValueError`**         |   -    |   -    |   X    |   -    |   X    |   X    |

Note: I just assume the "create new profile" implies you select it as well, because it loops back to select user profile otherwise, which is already tested

#### test cases

### TC01: Valid Login With Password (Uses Existing Profile)
**Email entered**: true
**Email input**: totalyvalidemail@mail.com
**Valid Password**: password1234
**User Profile**: me (valid)
**Logged in**: true

### TC02: Valid Login With Email Link (Uses Existing Profile)
**Email entered**: true
**Email input**: totalyvalidemail@mail.com
**Selected email link**: true (clicked)
**User Profile**: me (valid)
**Logged in**: true

### TC03: Invalid Login (no email)
**Email entered**: true
**Email input**: INVALIDSOBAD@mail.com
**Logged in**: false
**Expected Result:**: `ValueError`

### TC04: Valid Login With New User Profile Selection
**Email entered**: true
**Email input**: totalyvalidemail@mail.com
**Selected email link**: true (clicked)
**User Profile**: create new (valid)
**Logged in**: true

### TC05: Invalid Login (incorrect password)
**Email entered**: true
**Email input**: totalyvalidemail@mail.com
**Invalid Password**: ohno
**Logged in**: false
**Expected Result:**: `ValueError`

### TC06: Invalid Login (link not accessed in email)
**Email entered**: true
**Email input**: totalyvalidemail@mail.com
**Selected email link**: false (unclicked)
**Logged in**: false
**Expected Result:**: `ValueError`

## State Transition Testing

States:
Not logged in
Logged in

| Current State | Event                    | Expected State   | Expected Result                     |
| ------------- | ------------------------ | ---------------- | ----------------------------------- |
| Not logged in | Enter email              | Not logged in    | User is prompted to enter password  |
| Not logged in | Enter valid password     | Not logged in    | User is taken to profile page       |
| Not logged in | Enter invalid password   | Not logged in    | User sees invalid password message  |
| Not logged in | Click send link to email | Not logged in    | Click takes user to profile page    |
| Not logged in | User selects profile     | Logged in        | User is taken to the home page      |
| Not logged in | User creates new profile | Not logged in    | Click takes user to profile page    |



| Test ID | Starting State | Event                      | Expected State   | Expected Result                     | Transition Type |
| ------- | -------------- | -------------------------- | ---------------- | ----------------------------------- | --------------- |
| TC01    | Not logged in  | Enter email                | Not logged in    | User is prompted to enter password  | Valid           |
| TC02    | Not logged in  | Enter valid password       | Not logged in    | User is taken to profile page       | Valid           |
| TC03    | Not logged in  | Enter invalid password     | Not logged in    | User sees invalid password message  | Invalid         |
| TC04    | Not logged in  | Click send link to email   | Not logged in    | Click takes user to profile page    | Valid           |
| TC05    | Not logged in  | User selects profile       | Logged in        | User is taken to the home page      | Valid           |
| TC06    | Not logged in  | User creates new profile   | Not logged in    | Click takes user to profile page    | Valid           |
