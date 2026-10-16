# North Vacation Booking Reservation Requirements

## Test Cases
TC01, Invalid Number of Nights
- **Classification:** Number of nights
- **Partition:** Invalid high
- **Input:** `32` nights
- **Expected Result:** The reservation is rejected (More than 31 nights is invalid) with `ValueError`
TC02, Invalid Number of Nights
- **Classification:** Number of nights
- **Partition:** Invalid low
- **Input:** `-1` nights
- **Expected Result:** The reservation is rejected (Less than 1 night is invalid) with `ValueError`
TC03, Valid Number of Nights
- **Classification:** Number of nights
- **Partition:** Valid
- **Input:** `9` nights
- **Expected Result:** The reservation is accepted (valid: within 1-31 inclusive range), for 200$ per night

TC04, Invalid Number of Guests 
- **Classification:** Number of guests
- **Partition:** Invalid high
- **Input:** `13` guests
- **Expected Result:** The reservation is rejected (More than 12 guests is invalid) with `ValueError`
TC05, Invalid Number of Guests 
- **Classification:** Number of guests
- **Partition:** Invalid low
- **Input:** `0` guests
- **Expected Result:** The reservation is rejected (Less than 1 guest is invalid) with `ValueError`
TC06, Valid Number of Guests 
- **Classification:** Number of guests
- **Partition:** Valid, standard rate
- **Input:** `5` guests
- **Expected Result:** The reservation is accepted (1–5 guests is valid with "No additional guest fee")
TC07, Valid Number of Guests 
- **Classification:** Number of guests
- **Partition:** Valid, additional fee
- **Input:** `7` guests
- **Expected Result:** The reservation is accepted (6-12 guests is valid with fee: "Additional $25 per guest, per night")

TC08, Invalid Check-in / checkout dates
- **Classification:** Check-in / checkout dates
- **Partition:** Invalid late
- **Input:** `10/02`,`10/01` 
- **Expected Result:** The reservation is rejected (Check-in after checkout) with `ValueError`
TC09, Invalid Check-in / checkout dates *I know this is technically covered by TC10 but I still need it*
- **Classification:** Check-in / checkout dates
- **Partition:** Invalid sameday
- **Input:** `10/02`,`10/02`
- **Expected Result:** The reservation is rejected (Check-in matches checkout) with `ValueError`
TC10, Valid Check-in / checkout dates 
- **Classification:** Check-in / checkout dates
- **Partition:** Valid
- **Input:** `10/02`,`10/10`
- **Expected Result:** The reservation is accepted (Check-in before checkout) for 200$ per night, 50$ cleaning fee
*I feel that we would want to check that check-in and checkout inputs exist at all, but that it belongs in other testing?*

TC11, Invalid Availability
- **Classification:** Check-in / checkout dates
- **Partition:** Invalid, missing
- **Input:** `10/02`,`10/10` 
- **Expected Result:** The reservation is rejected (Not all nights available) with `UnavailableError`
TC12, Valid Availability
- **Classification:** Check-in / checkout dates
- **Partition:** Valid (checkout-checkin)
- **Input:** `10/02`,`10/10` 
- **Expected Result:** The reservation is accepted (Nights in range available) for 200$ per night, 50$ cleaning fee

## Partition Table
<details>
<summary>Equivalence Partition Table</summary>

| Classification              | Partition             | Range or Condition        | Expected Result                     |
| --------------------------- | --------------------- | ------------------------- | ----------------------------------- |
| Number of NIGHTS  32        | Invalid high          | More than 31 nights       | `ValueError`                        |
| Number of NIGHTS -1         | Invalid low           | Less than 1  night        | `ValueError`                        |
| Number of NIGHTS  9         | Valid                 | 1-31 inclusively          | valid                               |
| Number of GUESTS  13        | Invalid high          | More than 12 guests       | `ValueError`                        |
| Number of GUESTS  0         | Invalid low           | Less than 1  guest        | `ValueError`                        |
| Number of GUESTS (+COST)    | Valid, standard rate  | 1–5 guests                | No additional guest fee             |
| Number of GUESTS (+COST)    | Valid, additional fee | 6–12 guests               | Additional $25 per guest, per night |
| Check-in / checkout dates   | Invalid late          | Check-in after checkout   | `ValueError`                        |
| Check-in / checkout dates   | Invalid sameday       | Check-in matches checkout | `ValueError`                        |
| Check-in / checkout dates   | Valid                 | Check-in before checkout  | valid                               | 
| Availability                | Invalid, missing      | Not all nights available  | `UnavailableError`                  |
| Availability                | Valid                 | Nights in range available | valid, 200$ per night, 50$ fee      |

</details>