# North Vacation Booking Reservation Requirements
inputs, conditions, or calculated values

<!-- STAY LENGTH
- A reservation must be between 1 and 31 nights, inclusive.
invalid x<1, valid is 1-31 inclusively, invalid is 31<x -->
<!-- GUESTS
- A reservation must include between 1 and 12 guests, inclusive.
invalid x<1, valid is 1-12 inclusively, invalid is 12<x -->
COSTS
<!-- - The reservation costs $200 per night. -->
<!-- if x === 200, true, else false (how do you do booleans?) -->
<!-- - Every valid reservation includes a one-time $50 cleaning fee. -->
<!-- if valid, add 50; if not valid, nothing happens -->
<!-- - Each guest over five costs an additional $25 per night.
if guests <6 no additional cost, if 5-12, add 25 per person per night, and we should already have the greater than 12 ruled out by guests check -->
CHECKIN/CHECKOUT
<!-- - The check-in date must be before the checkout date. -->
<!-- if checkin before checkout then possibly valid, if checkin is === checkout OR greater than checkout not valid -->
<!-- - The number of nights is calculated as `checkout date - check-in date`.
check for weird stuff, like invalid dates or checkin before checkout--does this loop into other tests? -->
- The checkout date is not counted as a reserved night.
RESERVATION AVAILABILITY
- Every night in the requested date range must be available.
- An unavailable reservation raises an `UnavailableError`. (unavailable based on what?)

- Invalid reservation information raises a `ValueError`. (what information?)

| Classification              | Partition             | Range or Condition  | Expected Result                     |
| --------------------------- | --------------------- | ------------------- | ----------------------------------- |
| Number of NIGHTS  32        | Invalid high          | More than 31 nights | `ValueError`                        |
| Number of NIGHTS -1         | Invalid low           | Less than 1  night  | `ValueError`                        |
| Number of NIGHTS  9         | Valid                 | 1-31 inclusively    | valid                               |
| Number of GUESTS  13        | Invalid high          | More than 12 guests | `ValueError`                        |
| Number of GUESTS  0         | Invalid low           | Less than 1  guest  | `ValueError`                        |
<!-- | Number of GUESTS  5         | Valid                 | 1-12 inclusively    | valid                               | --> fits in other test cases
| Number of GUESTS (+COST)    | Valid, standard rate  | 1–5 guests          | No additional guest fee             |
| Number of GUESTS (+COST)    | Valid, additional fee | 6–12 guests         | Additional $25 per guest, per night |
| Check-in / checkout dates   | Invalid late          | Check-in after checkout   | `ValueError`                  |
| Check-in / checkout dates   | Invalid sameday       | Check-in matches checkout | `ValueError`                  |  
| Check-in / checkout dates   | Valid                 | Check-in before checkout  | valid                         |  

| Availability                | Invalid high          | More than 12 guests | `ValueError`                        |

BOOLEANS
- The reservation costs $200 per night. let's hardcode this! :D (happens with passing checkin/checkout and availability and num guests and completing booking)
- Every valid reservation includes a one-time $50 cleaning fee. (happens with passing checkin/checkout?)

Covered by other Checkin / checkout dates tests:
- The number of nights is calculated as `checkout date - check-in date`. (not a partition, works if other checks pass?)