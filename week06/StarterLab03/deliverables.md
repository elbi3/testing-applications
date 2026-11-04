# Testing

## Step 1: Exploratory Testing: Testing Charter

Record at least **five actions or combinations of actions** you tried. For each one, include:

- What you did
- What you expected
- What happened
- Whether the test passed or failed

### Journal of Observations:
1. I navigated to the home page, and observed a title "Count: 0", and three buttons below: "Increment", "Decrement", and "Reset". I first hovered over the visual elements to check for mouse interaction. I noticed that all three buttons had a background change to indicate interactivity. (I note that font is probably too light in both inactive and active button states.)
2. I click "Increment": title becomes "Count: 1".
3. I click "Decrement": title becomes "Count: 0".
4. I click "Reset": nothing happens (but note that since we have "Count: 0", "Reset" probably does nothing). (I note that "Reset" should probably be inactive if we are at "0" from the user perspective, or there should be a message to the user).
5. I check for negative numbers by clicking "Decrement" a few times: "Count": -7 (is this desired behavior?)
6. I spam click "Increment" to get it above 0: "Count: 12"
7. I click "Reset" to see what it does: "Count: 0"
8. I spam click "Increment" and "Decrement" to check for odd behavior (I don't notice any: interactivity & browser responsiveness seems pretty nice!)
9. (extra notes/thoughts) The "Increment" and "Decrement" buttons could have symbols as well for readability. Buttons need some spacing to differentiate from each other visually. There's no reason they need to be this small, it's cheap fixes to make these bigger and more legible.

<details>
<summary>Example exploratory testing table</summary>

| Action                       | Expected Result                   | Actual Result                             | Pass or Fail    |
| ---------------------------- | --------------------------------- | ----------------------------------------- | --------------- |
| I hover over button elements | indication of interactive element | all three buttons had a background change | Pass            |
| I click "Increment"          | "Count: 1"                        |   title becomes "Count: 1"                | Pass            |
| I click "Decrement"          | "Count: 0"                        |   title becomes "Count: 0"                | Pass            |
| I click "Reset"              | "Count: 0"                        |   title stays "Count: 0"                  | Pass (see #4)   |
| I check for negative numbers | `Count: ${-num}`                  |   title becomes "Count: -7"               | Pass            |
| I spam click "Increment"     | "Count: 12"                       |   title becomes "Count: 12"               | Pass            |
| I click "Reset"              | "Count: 0"                        |   title becomes "Count: 0"                | Pass            |


</details>

## Step 2: Examine the Source Code

Identify:

- The starting value of `count`: it is "0" as seen in: `const [count, setCount] = useState(0);`
- The statements that change `count`: the setter function `setCount` (`etCount(count + 1)`, `setCount(count - 1)`, `setCount(0)`)
- The user action that causes each statement to execute: `onCLick`
- Any branches or loops in the code: no loops, no control flow statements

Should we have branch coverage and loop coverage on this component:
I would argue that neither are appropriate in this situation, since the main function is a setter function on the `useState` hook. It is a classic testing mistake to test library functions (like React hooks). There are no loops in the code, however we could check the application for expected behavior.


(see `src/App.test.tsx` for ##3-7)

## Step 8: Review Code Coverage

Record the coverage percentages reported for `App.tsx`:

| Coverage Type | Percentage |
| ------------- | ---------- |
| Statements    |   100      |
| Branches      |   100      |
| Functions     |   100      |
| Lines         |   100      |

Briefly explain:
I tested that the component rendered and displayed the four expected elements as well as displaying initial count of "0". I then tested whether the three buttons, when clicked, performed their expected function. I intentionally did not test the React hook functionality as that is a known testing anti-pattern. I was able to achieve 100% statement and branch coverage. In my opinion, since there were no control flow statements in this code, it is not a good example of testing branch coverage. I do not think a percentage proves that the component works correctly. I would be more interested in being certain that the reactivity was working properly. If we were using a different component library, like Svelte or Vue, reactivity and state might happen differently. I think since this application is simple, user tests are enough to determine that the app works as expected. Anything more complicated than this and I would want to know when things were being calculated and rendered and if that affected user experience.

## Step 9: Compare the Two Approaches

I did not discover new tests, rather brought my experience into the testing environment, especially the with accessibility issues present. I think my initial observation journal was more comprehensive than all the subsequent testing. It was faster, it produced actionable feedback, and it was thorough. The jest tests "prove" 100% coverage, but they did not catch things from my exploratory phase. I will say, however, without performing the white box testing (just reading the code), there would have bene no way to know whether we needed particular testing (for instance, if we were not using a React hook for state--we would absolutely need to test that implementation).

When I saw the source code, I knew that I wanted to test the string interpolation.
