### Application

**Name:** North Vacation Booking

**Purpose:** An application that allows users to list their homes as vacation rentals and allows guests to make reservations.

### Reservation Requirements

- A reservation must be between 1 and 31 nights, inclusive.STAY LENGTH
- A reservation must include between 1 and 12 guests, inclusive.STAY LENGTH
- The reservation costs $200 per night. RESULT (COST)
- Every valid reservation includes a one-time $50 cleaning fee. RESULT (COST)
- Each guest over five costs an additional $25 per night. CONDITION/RESULT (COST)
- The check-in date must be before the checkout date.
- The number of nights is calculated as `checkout date - check-in date`.
- The checkout date is not counted as a reserved night.
- Every night in the requested date range must be available.
- Invalid reservation information raises a `ValueError`.
- An unavailable reservation raises an `UnavailableError`.
- A new valid reservation begins in the `Pending` state.
- Successful payment moves it from `Pending` to `Confirmed`.
- Failed payment moves it from `Pending` to `Cancelled`.
- A confirmed reservation can move to `Checked In` on its check-in date.
- A checked-in reservation moves to `Completed` after checkout.
- A pending or confirmed reservation may be cancelled.
- A cancelled or completed reservation cannot change states.
- Invalid state transitions raise an `InvalidStateError`.

reservation length: invalid, x<1, 31<x; valid is 1-31 inclusive

## Step 1: Identify Conditions and Actions
CONDITIONS
Can a reservation happen?
- User selects a stay length that is 1-31 nights duration
- User indicates 1-5 guests for stay
- User selects 6-12 guests for stay
- User selects a check-in date that is before the checkout date
- All days selected by user are available
- User successfully makes payment
ACTIONS
- User is billed a one-time $50 cleaning fee
- User is billed $200 per night
- User is billed an additional $25 per night
- Successful payment confirms stay (from `Pending` to `Confirmed`)
- Failed payment cancels reservation (from `Pending` to `Cancelled`)

## Step 2: Create a Decision Table

| Conditions and Actions     | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 |  
| -------------------------- | :----: | :----: | :----: | :----: | :----: | :----: |
| valid stay length          |   T    |   T    |   T    |   T    |   T    |   T    |  
| 1-5 guests                 |   F    |   T    |   F    |   F    |   T    |   T    |  
| 6-12 guests                |   F    |   F    |   T    |   T    |   F    |   F    |  
| checkin before checkout    |   -    |   T    |   F    |   T    |   T    |   T    |  
| dates available            |   -    |   T    |   -    |   T    |   F    |   T    |  
| payment made               |   -    |   F    |   -    |   T    |   -    |   T    |  
| **Bill cleaning fee**      |   -    |   -    |   -    |   X    |   -    |   X    |  
| **Bill 200 a night**       |   -    |   -    |   -    |   X    |   -    |   X    |  
| **Bill 25 per person**     |   -    |   -    |   -    |   X    |   -    |   -    |  
| **Payment Success**        |   -    |   -    |   -    |   X    |   -    |   X    |  
| **Payment `Cancelled`**    |   -    |   X    |   -    |   -    |   -    |   X    |   
| **Reservation Canceled**   |   -    |   -    |   X    |   -    |   X    |   X    |  

Rule 1: Create a stay for 7 day duration, for 13 guests.
Rule 2: Create a stay for 4 guests, where dates are available and correct, but payment not successful.
Rule 3: Create a stay for 8 guests, with valid stay length but checkin is not before checkout.
Rule 4: Create a stay for 7 days, 8 guests, and checkin is before checkout, and payment is successful.
RUle 5: Create a stay for 2 days, 2 guests, valid stay length, but not all dates are available.
Rule 6: Create a stay for 2 days, 2 guests, valid stay length, payment successful, but user cancels.

## Step 3: Create Decision Table Test Cases

<details>
<summary>Test Cases</summary>

### TC01: Invalid Reservation (too many guests)

- **Check-in:** October 1
- **Checkout:** October 8
- **Number of guests:** 13
- **Availability:** Every requested night is available.
- **Expected Result:** The reservation is not created.
- **Expected Price:** NA

### TC02: Valid Reservation With Unsuccessful Payment

- **Check-in:** October 22
- **Checkout:** October 29
- **Number of guests:** 4
- **Availability:** Every requested night is available.
- **Expected Result:** The reservation not created.
- **Expected Price:** `$1450`
  - Seven nights at $200: `$1400`
  - One-time cleaning fee: `$50`

### TC03: Invalid Reservation (checkin not before checkout)

- **Check-in:** October 4
- **Checkout:** October 1
- **Number of guests:** 8
- **Availability:** `ValueError` raised.
- **Expected Result:** The reservation is not created.
- **Expected Price:** NA

### TC04: Valid Reservation With Extra Guest Fee

- **Check-in:** October 1
- **Checkout:** October 8
- **Number of guests:** 8
- **Availability:** Every requested night is available.
- **Expected Result:** The reservation is created.
- **Expected Price:** `$1575`
  - Seven nights at $200: `$1400`
  - One-time cleaning fee: `$50`
  - Additional $25 per person over 5: `$125`

### TC05: Invalid Reservation (unavailable dates)

- **Check-in:** October 1
- **Checkout:** October 3
- **Number of guests:** 2
- **Availability:** Every requested night is not available.
- **Expected Result:** The reservation is not created.
- **Expected Price:** NA

### TC06: Valid Reservation but User Cancels

- **Check-in:** October 1
- **Checkout:** October 3
- **Number of guests:** 2
- **Availability:** Every requested night is available.
- **Expected Result:** The reservation is created, but user cancels.
- **Expected Price:** `$550` (to be reimbursed)
  - Two nights at $200: `$400`
  - One-time cleaning fee: `$50`

</details>

## Step 4: Identify Reservation States and Events

- Identify five possible reservation states.
- Identify five events that may cause the reservation to change states.

<details>
<summary>States and Events</summary>

### Reservation States

- `Pending`
- `Confirmed`
- `Checked In`
- `Completed`
- `Cancelled`

### Events That Change Reservation States

- Payment succeeds
- Payment fails
- Guest cancels
- Guest checks in
- Guest checks out

</details>

## Step 5: Create a State Transition Table

| Current State | Event                  | Expected State   | Expected Result                     |
| ------------- | ---------------------- | ---------------- | ----------------------------------- |
| Pending       | Payment succeeds       | Confirmed        | Reservation is confirmed            |
| Pending       | Payment fails          | Cancelled        | Reservation is cancelled            |
| Confirmed     | Guest checks in        | Checked in       | Guest is checked in for reservation |
| Checked In    | Guest checks in        | Guest checks out | Reservation is completed            |
| Pending       | Guest cancels          | Cancelled        | Reservation is cancelled            |
| Confirmed     | Guest cancels          | Cancelled        | Reservation is cancelled            |
| Checked In    | Guest checks out early | Cancelled        | Reservation is cancelled            |
| Checked In    | Guest checks in        | Guest checks in  | An `InvalidStateError` is raised.   |
| Cancelled     | Guest checks in        | Cancelled        | An `InvalidStateError` is raised.   |
| Completed     | Guest checks in        | Completed        | An `InvalidStateError` is raised.   |
| Completed     | Guest checks out       | Completed        | An `InvalidStateError` is raised.   |       

## Step 6: Create State Transition Test Cases

<details>
<summary>State Transition Test Cases</summary>

| Test ID | Starting State | Event                      | Expected State   | Expected Result                     | Transition Type |
| ------- | -------------- | -------------------------- | ---------------- | ----------------------------------- | --------------- |
| ST01    | Pending        | Payment succeeds           | Confirmed        | The reservation is confirmed.       | Valid           |
| ST02    | Pending        | Payment fails              | Cancelled        | Reservation is cancelled            | Valid           |
| ST03    | Confirmed      | Guest checks in            | Checked in       | Guest is checked in for reservation | Valid           |
| ST04    | Checked In     | Guest checks in            | Guest checks out | Reservation is completed            | Valid           |
| ST05    | Pending        | Guest cancels              | Cancelled        | Reservation is cancelled            | Valid           |
| ST06    | Confirmed      | Guest cancels              | Cancelled        | Reservation is cancelled            | Valid           |
| ST07    | Checked In     | Guest checks out early     | Cancelled        | Reservation is cancelled            | Valid           |
| ST08    | Checked In     | Guest checks in            | Guest checks in  | An `InvalidStateError` is raised.   | Invalid         |
| ST09    | Cancelled      | Guest checks in            | Cancelled        | An `InvalidStateError` is raised.   | Invalid         |
| ST10    | Completed      | Guest checks in            | Completed        | An `InvalidStateError` is raised.   | Invalid         |
| ST11    | Completed      | Guest checks out           | Completed        | An `InvalidStateError` is raised.   | Invalid         |

</details>
