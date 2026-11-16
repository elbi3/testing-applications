# Learning Practice: Enhancing Testing with Large Language Models

## Topics

- Large language models in software testing
- Human and AI collaboration
- Prompt context and specificity
- AI-assisted test design
- Evaluating AI-generated test ideas
- Hallucinations and unsupported assumptions

## Learning Objectives

- Identify ways an LLM can assist with software testing.
- Compare the results of vague and detailed prompts.
- Provide relevant requirements and context in a prompt.
- Evaluate AI-generated tests for accuracy and usefulness.
- Identify missing requirements, vague results, and unsupported assumptions.
- Use human judgment to improve AI-generated test ideas.

## The Product

You will use an LLM to help design tests for North Vacation Booking.

The application has the following requirements:

- A reservation must be between 1 and 31 nights.
- A reservation must include between 1 and 12 guests.
- The price is $200 per night.
- Each valid reservation includes a one-time $50 cleaning fee.
- Each guest over five costs an additional $25 per night.
- The check-in date must occur before the checkout date.
- The checkout date is not counted as a reserved night.
- All requested nights must be available.
- Invalid booking information produces an error.
- Unavailable dates produce an unavailable error.

You are responsible for reviewing and verifying everything produced by the LLM.

## Step 1: Create Your Own Test Ideas

Before using an LLM, create at least **five test ideas** from the requirements.

Include:

- The requirement being tested
- The input or action
- The expected result

<details>
<summary>Test idea table</summary>

| Requirement | Input or Action | Expected Result |
| ----------- | --------------- | --------------- |
|             |                 |                 |
|             |                 |                 |

</details>

## Step 2: Use a General Prompt

Give an LLM the following prompt:

```text
Create tests for a vacation booking application.
```

Save the complete response.

Review the response and identify:

- Test ideas that are useful
- Test ideas that are too vague
- Ideas that are not supported by the requirements
- Important requirements the response missed
- Expected results that are unclear or incomplete

<details>
<summary>Response evaluation table</summary>

| AI-Generated Idea | Useful, Vague, Unsupported, or Incorrect | Explanation |
| ----------------- | ---------------------------------------- | ----------- |
|                   |                                          |             |
|                   |                                          |             |

</details>

## Step 3: Create a Contextual Prompt

Write a new prompt that gives the LLM enough information to produce more useful test ideas.

Your prompt must include:

- The role you want the LLM to perform
- A clear testing task
- The North Vacation Booking requirements
- The testing techniques or risks it should consider
- The number of test ideas you want
- The information each test idea should contain
- A direction not to invent unsupported requirements

Your prompt should clearly demonstrate:

- **Mindset:** You remain responsible for the testing decisions.
- **Technique:** Your instructions clearly describe the requested task and output.
- **Context:** You provide the application requirements needed to complete the task.

Save your prompt and the complete response.

## Step 4: Evaluate the Contextual Response

Review the response generated from your contextual prompt.

For each test idea, decide whether to:

- Accept it
- Revise it
- Reject it

Explain your decision.

Check whether:

- The inputs follow the requirements.
- The expected results are specific.
- Pricing calculations are correct.
- Boundary values are correct.
- The test can actually be performed.
- The LLM introduced unsupported assumptions.
- Any requirements are still missing from the tests.

<details>
<summary>AI response review table</summary>

| AI-Generated Idea | Accept, Revise, or Reject | Reason | Required Correction |
| ----------------- | ------------------------- | ------ | ------------------- |
|                   |                           |        |                     |
|                   |                           |        |                     |

</details>

## Step 5: Compare the Prompts

Compare the results of the general prompt and your contextual prompt.

Include:

- Which prompt produced more useful test ideas
- How adding requirements changed the response
- One weakness found in the general response
- One weakness that remained in the contextual response
- One test idea the LLM suggested that you had not considered
- One test idea you created that the LLM missed

## Step 6: Create the Final Test Cases

Using your own ideas and any useful AI suggestions, create at least **five final test cases**.

Every test case must be reviewed and corrected by you.

Include:

- Test case ID
- Requirement being tested
- Preconditions
- Inputs or actions
- Expected result
- Source of the idea

For the source, use one of the following:

- Human-generated
- AI-generated and verified
- AI-generated and revised

<details>
<summary>Final test case table</summary>

| Test Case ID | Requirement | Preconditions | Inputs or Actions | Expected Result | Source |
| ------------ | ----------- | ------------- | ----------------- | --------------- | ------ |
| TC-01        |             |               |                   |                 |        |
| TC-02        |             |               |                   |                 |        |

</details>

## Step 7: Reflect on Human and AI Responsibilities

Answer the following questions:

1. What did the LLM help you complete more quickly?
2. What information did the LLM misunderstand, overlook, or invent?
3. What knowledge did you need to evaluate its response?
4. What could happen if a tester used the response without reviewing it?
5. Which testing decisions should remain the responsibility of the tester?

## What to Submit

1. Create and initialize a GitHub repository.
2. Commit and push your work to the repository.
3. Make sure the repository is public. Private repositories will not receive credit.
4. Submit the URL on canvas

## AI Transparency

AI was used to help create and clean up this file.
