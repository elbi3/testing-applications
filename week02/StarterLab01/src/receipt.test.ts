import { describe, test, expect, jest, afterEach } from "@jest/globals";
import { addItem, deleteItem, total, tax, printReceipt, ITEMS } from "./fixed_receipt.js";


describe("the function `addItem", () => {
    test("the function `addItem` produces the expected result using valid input", () => {
        addItem("slice", 5.99);
        expect(ITEMS[4]).toMatchObject({name: "slice", price: 5.99});
    });

    test("the function `addItem` handles invalid input of negative tax amount", () => {  
        expect(() => {addItem("0",-7)}).toThrow("Function input not valid");

    });
    test("the function `addItem` handles empty strings", () => { 
        expect(() => {addItem("", 3)}).toThrow("Function input not valid");
    });
});


describe("the function `deleteItem", () => {
    test("the function `deleteItem` produces the expected result using valid input", () => {
        deleteItem("avocado oil");
        expect(ITEMS.length).toEqual(4);
    });
    test("the function `deleteItem` handles invalid input or an incorrect value", () => {
        deleteItem("slice");
        expect(ITEMS.length).toEqual(3);
    });
    test("the function `deleteItem` handles empty string parameters", () => {
        expect(() => {deleteItem("")}).toThrow("Function input not valid");
    });
})

describe("the function `total", () => {
    test("the function `total` produces the expected result using valid input", () => {
        const myTotal = total();
        expect(myTotal).toEqual(47.49);
    });
    test("the function `total` handles an empty `ITEMS` Array by returning 0", () => {
        deleteItem("paper towels");
        deleteItem("sandwich");
        deleteItem("eggs");
        expect(total()).toEqual(0);
    });
    test("the function `total` handles an edge case where incorrect data is passed", () => {
//IDK WHAT TO PUT HERE
        expect(total()).toHaveReturned(undefined);
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
        const result = tax(0.07);
        expect(result).toBe(3.32);
    });
    test("the function `tax` handles invalid input or an incorrect value", () => {
        expect(tax(-2)).toThrow()
    });
    test("the function `tax` handles edgecases such as negative numbers and falsey values", () => {
        // expect(tax(-2, "")).toThrow()
//IDK WHAT TO PUT HERE
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
        printReceipt(taxRate);
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith(`Tax: $ + ${String(taxRate)}`);
        // logSpy.mockRestore();
    });
    test("the function `printReceipt` handles invalid input or an incorrect value", () => {
        const taxRate = -2;
        expect(printReceipt(taxRate)).toThrow();
    });
    test("the function `printReceipt` handles an undefined input", () => {
//IDK WHAT TO PUT HERE
        const taxRate = 0;
        expect(printReceipt(taxRate)).toThrow();
    });
})
