import { render, screen } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";
import { describe, test, expect, beforeEach } from 'vitest';
import App from './App';

describe('counter app', () => {
let user: ReturnType<typeof userEvent.setup>
    beforeEach(() => {
        //https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent
        user = userEvent.setup()
        render(<App />)
    })

    test('renders without crashing', () => {
        expect(screen.getAllByRole('button').length).toBeGreaterThan(0)
        expect(screen.getByText('Increment')).toBeInTheDocument();   
        expect(screen.getByText('Decrement')).toBeInTheDocument(); 
        expect(screen.getByText('Reset')).toBeInTheDocument(); 

    });

    test("TC-01: the counter increment button, when clicked once, displays count of 1", async () => {
        await user.click(screen.getByRole("button", {name: "Increment"}));

        expect(screen.getByText("Increment")).toBeVisible();
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: 1');
    })

    test("TC-02: the counter decrement button, when clicked once, displays count of -1", async () => {
          await user.click(screen.getByRole("button", {name: "Reset"}));
          await user.click(screen.getByRole("button", {name: "Decrement"}));
  
          expect(screen.getByText("Decrement")).toBeVisible();
          expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: -1');
    })

    test("TC-03: the counter reset button, when clicked once displays count of 0", async () => {
          await user.click(screen.getByRole("button", {name: "Reset"}));
  
          expect(screen.getByText("Reset")).toBeVisible();
          expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: 0');
    })



  test("TC-04: the counter increment button, when spam-clicked five times displays count of 5", async () => {
        await user.click(screen.getByRole("button", {name: "Increment"}));
        await user.tripleClick(screen.getByRole('button', {name:  "Increment"}));
        await user.click(screen.getByRole("button", {name: "Increment"}));

        expect(screen.getByText("Increment")).toBeVisible();
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: 5');
  })

    test("TC-05: the counter decrement button, when spam-clicked five times displays count of 5", async () => {
        await user.click(screen.getByRole("button", {name: "Decrement"}));
        await user.tripleClick(screen.getByRole('button', {name:  "Decrement"}));
        await user.click(screen.getByRole("button", {name: "Decrement"}));
        
        expect(screen.getByText("Decrement")).toBeVisible();
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: -5');
  })

    test("TC-06: combine TC-04 and TC-05", async () => {
        await user.click(screen.getByRole("button", {name: "Reset"}));
        await user.click(screen.getByRole("button", {name: "Increment"}));
        await user.tripleClick(screen.getByRole('button', {name:  "Increment"}));
        await user.click(screen.getByRole("button", {name: "Increment"}));
        await user.click(screen.getByRole("button", {name: "Decrement"}));
        await user.tripleClick(screen.getByRole('button', {name:  "Decrement"}));
        await user.click(screen.getByRole("button", {name: "Decrement"}));

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent('Count: 0');
  })
});