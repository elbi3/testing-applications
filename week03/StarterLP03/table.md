# North Vacation Booking Reservation Requirements
inputs, conditions, or calculated values

<!-- - The reservation costs $200 per night. --> VALID result
<!-- - Every valid reservation includes a one-time $50 cleaning fee. --> VALID result

TC01: Number of NIGHTS (32) is rejected (More than 31 nights is invalid)
TC02: Number of NIGHTS (-1) is rejected (Less than 1  night is invalid)
TC03: Number of NIGHTS (9) is accepted (valid: within 1-31 inclusive range)

TC04: Number of GUESTS (13) is rejected (More than 12 guests is invalid)
TC04: Number of GUESTS (0) is rejected (Less than 1 guest is invalid)
TC05: Number of GUESTS (+COST) (5) is accepted (1–5 guests is valid with "No additional guest fee")
TC06: Number of GUESTS (+COST) (7) is accepted (6-12 guests is valid with fee: "Additional $25 per guest, per night")


| Classification              | Partition             | Range or Condition  | Expected Result                     |
| --------------------------- | --------------------- | ------------------- | ----------------------------------- |
| Number of NIGHTS  32        | Invalid high          | More than 31 nights | `ValueError`                        |
| Number of NIGHTS -1         | Invalid low           | Less than 1  night  | `ValueError`                        |
| Number of NIGHTS  9         | Valid                 | 1-31 inclusively    | valid                               |
| Number of GUESTS  13        | Invalid high          | More than 12 guests | `ValueError`                        |
| Number of GUESTS  0         | Invalid low           | Less than 1  guest  | `ValueError`                        |
| Number of GUESTS (+COST)    | Valid, standard rate  | 1–5 guests          | No additional guest fee             |
| Number of GUESTS (+COST)    | Valid, additional fee | 6–12 guests         | Additional $25 per guest, per night |
| Check-in / checkout dates   | Invalid late          | Check-in after checkout   | `ValueError`                  |
| Check-in / checkout dates   | Invalid sameday       | Check-in matches checkout | `ValueError`                  |  
| Check-in / checkout dates   | Valid                 | Check-in before checkout  | valid                         |  
| Check-in / checkout dates   | Valid                 | Checkout not included     | valid                         |  /or is this AVAILABILITY?

| Availability                | Invalid, missing      | Not all nights in range available | `UnavailableError`                        |
| Availability                | Valid (checkout-checkin)  | Nights in range available | valid                        |

- **Classification:** Number of guests
- **Partition:** Valid, standard rate
- **Input:** `3` guests
- **Expected Result:** The reservation is accepted, and no additional guest fee is added.