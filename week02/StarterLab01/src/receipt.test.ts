import { describe, test, expect } from "@jest/globals";
import { addItem, deleteItem, total, tax, printReceipt } from "./receipt";

// - **Happy-path test:** Tests a function using valid input and confirms that it produces the expected result.
// - **Unhappy-path test:** Tests how a function responds to invalid input or an incorrect value.
// - **Edge-case test:** Tests an unusual value or a value near the limits of the function's expected input.
describe("the function `addItem", () => {
    const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
    ];

    test("the function `addItem` produces the expected result using valid input", () => {
        const newItem = { name: "slice", price: 5.99 };
        addItem("slice", 5.99);
        expect(ITEMS[4]).toMatchObject(newItem);
    });

    test("the function `addItem` handles invalid input or an incorrect value, such as digits in strings or 0 cost", () => {
        console.log("ITEMS: ", ITEMS);        
        addItem("0",0)
        expect(ITEMS.length).toEqual(5);
    });
    test("the function `addItem` handles negative numbers and empty strings", () => {
        console.log("ITEMS: ", ITEMS);  
        addItem("",-3)
        expect(ITEMS.length).toEqual(5);
    });
})

describe("the function `deleteItem", () => {
    const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
    ];
    test("the function `deleteItem` produces the expected result using valid input", () => {
        deleteItem("avocado oil");
        expect(ITEMS.length).toEqual(3);
    });
    test("the function `deleteItem` handles invalid input or an incorrect value", () => {
        deleteItem("slice");
        expect(ITEMS.length).toEqual(3);
    });
    test("the function `deleteItem` handles empty string parameters", () => {
        deleteItem("");
        expect(ITEMS.length).toEqual(3);
    });
})

describe("the function `total", () => {
    test("the function `total` produces the expected result using valid input", () => {
    });
    test("the function `total` handles invalid input or an incorrect value", () => {
    });
    test("the function `total` handles an edge case [[ADD]] by [[DOING WHAT?]]", () => {
    });
})

describe("the function `tax", () => {
    test("the function `tax` produces the expected result using valid input", () => {
    });
    test("the function `tax` handles invalid input or an incorrect value", () => {
    });
    test("the function `tax` handles an edge case [[ADD]] by [[DOING WHAT?]]", () => {
    });
})

describe("the function `printReceipt", () => {
    test("the function `printReceipt` produces the expected result using valid input", () => {
    });
    test("the function `printReceipt` handles invalid input or an incorrect value", () => {
    });
    test("the function `printReceipt` handles an edge case [[ADD]] by [[DOING WHAT?]]", () => {
    });
})