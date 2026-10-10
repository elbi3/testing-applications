import { describe, test, expect, jest, afterEach } from "@jest/globals";
import { addItem, deleteItem, total, tax, printReceipt } from "./receipt";

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
        addItem("0",0)
        expect(ITEMS.length).toEqual(5);
    });
    test("the function `addItem` handles negative numbers and empty strings", () => { 
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
    const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
    ];
    test("the function `total` produces the expected result using valid input", () => {
        const myTotal = total(ITEMS);
        expect(myTotal).toEqual(47.49);
    });
    test("the function `total` handles an empty `ITEMS` Array by returning `0.0`", () => {
        const ITEMS2 = [];
        expect(total(ITEMS2)).toHaveReturned(0.0);
    });
    test("the function `total` handles an edge case where incorrect data structure is passed", () => {
        const ITEMS3 = {};
        expect(total(ITEMS3)).toHaveReturned(undefined);
    });
})

describe("the function `tax", () => {
    const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
    ];
    test("the function `tax` produces the expected result using valid input", () => {
        const result = tax(0.07, ITEMS);
        expect(result).toBe(3.32);
    });
    test("the function `tax` handles invalid input or an incorrect value", () => {
        expect(tax(0.07, "items")).toThrow()
    });
    test("the function `tax` handles edgecases such as negative numbers and falsey values", () => {
        expect(tax(-2, "")).toThrow()
    });
})

describe("the function `printReceipt", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
    ];
    const taxRate = 0.07;
    test("the function `printReceipt` produces the expected result using valid input", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        printReceipt(taxRate, ITEMS);
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith(`Tax: $ + ${String(taxRate)}`);
        // logSpy.mockRestore();
    });
    test("the function `printReceipt` handles invalid input or an incorrect value", () => {
        const taxRate = -2;
        expect(printReceipt(taxRate)).toThrow();
    });
    test("the function `printReceipt` handles an undefined input", () => {
        const taxRate = undefined;
        expect(printReceipt(taxRate)).toThrow();
    });
})
