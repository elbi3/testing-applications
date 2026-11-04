import "@testing-library/jest-dom/jest-globals";
import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react"; //fireEvent
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("the counter app", () => {
    
    it("displays a title 'Count: 0', and three buttons 'Increment', 'Decrement', and 'Reset' when the page loads", () => {
        render(<App />);
        const button1 = screen.getByRole('button', {name: "Increment"});
        const button2 = screen.getByRole('button', {name: "Decrement"});
        const button3 = screen.getByRole('button', {name: "Reset"});
        
        expect(button1).toBeInTheDocument();
        expect(button2).toBeInTheDocument();
        expect(button3).toBeInTheDocument();
        expect(screen.getByText('Count: 0')).toBeInTheDocument();

    });

    it("starts count at 0", () => { 
        let count = 0; 
        render(<App />);
        expect(screen.getByText(`Count: ${count}`)).toBeInTheDocument();
    });

    it("increments the count when the 'Increment' button is clicked", async () => {
        render(<App />);
        await userEvent.click(screen.getByText("Increment"));
        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });

    it("decrements the count when the 'Decrement' button is clicked", async () => {
        render(<App />);
        await userEvent.click(screen.getByText("Decrement"));
        expect(screen.getByText("Count: -1")).toBeInTheDocument();
    });

    it("resets the count to 0 when the 'Reset' button is clicked", async () => {
        render(<App />);
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Reset"));
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });

    it("increments and decrements doing correct operations", async () => {
        render(<App />);
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Decrement")); //-1
        await userEvent.click(screen.getByText("Decrement")); //-1
        await userEvent.click(screen.getByText("Reset"));
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Increment")); //+1
        await userEvent.click(screen.getByText("Decrement")); //-1
        await userEvent.click(screen.getByText("Decrement")); //-1
        expect(screen.getByText(`Count: 3`)).toBeInTheDocument();
    });
});