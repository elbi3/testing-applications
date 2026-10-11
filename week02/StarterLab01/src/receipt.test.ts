import { describe, test, expect, jest, afterEach } from "@jest/globals";
import { addItem, deleteItem, total, tax, printReceipt, ITEMS } from "./fixed_receipt.js";


describe("the module `fixed_receipt`", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
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
    test("the function `total` produces the expected result using valid input", () => {
    //should be 21.99 + 8.75 + 6.75 = 37.49, since we deleted "slice" and "avocado oil"
        expect(total()).toEqual(37.49);
    });
    test("the function `total` handles an empty `ITEMS` Array by returning 0", () => {
        deleteItem("paper towels");
        deleteItem("sandwich");
        deleteItem("eggs");
        expect(total()).toEqual(0);
    });
    test("the function `total` handles an edge case where there is missing data in ITEMS", () => {
        expect(total()).toEqual(0);
    });
    test("the function `tax` produces the expected result using valid input", () => {
        addItem("paper towels", 21.99);
        const result = tax(0.07);
        expect(result).toBe(1.54);
    });
    test("the function `tax` handles case where total is 0", () => {
        deleteItem("paper towels");
        expect(tax(0)).toBe(0);
    });
    test("the function `tax` handles edgecases such as negative numbers as inputs", () => {
        expect(() => {tax(-2)}).toThrow("Function input not valid");
    });
    test("the function `printReceipt` produces the expected result using valid input", () => {
        addItem("slice", 5.99);
        addItem("paper towels", 21.99);
        const taxRate = 0.07;
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        printReceipt(taxRate);
        expect(logSpy).toHaveBeenCalledTimes(7);
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith("slice : $5.99");
        expect(logSpy).toHaveBeenCalledWith("paper towels : $21.99");
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith(`Subtotal: $${String(total())}`);
        expect(logSpy).toHaveBeenCalledWith(`Tax: $${String(taxRate)}`);
        expect(logSpy).toHaveBeenCalledWith(`Total: $${String(tax(taxRate) + total())}`);
    });
    test("the function `printReceipt` handles invalid input or an incorrect value", () => {
        const taxRate = -2;
        expect(() => {printReceipt(taxRate)}).toThrow("Function input not valid");
    });
    test("the function `printReceipt` still prints if there are no values", () => {
        deleteItem("slice");
        deleteItem("paper towels");
        const taxRate = 0;
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        printReceipt(taxRate);
        expect(logSpy).toHaveBeenCalledTimes(5);
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith("************************");
        expect(logSpy).toHaveBeenCalledWith(`Subtotal: $${String(total())}`);
        expect(logSpy).toHaveBeenCalledWith(`Tax: $${String(taxRate)}`);
        expect(logSpy).toHaveBeenCalledWith(`Total: $${String(tax(taxRate) + total())}`);
    });
});
