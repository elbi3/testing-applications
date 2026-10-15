import { listingTitleLength } from "./listingTitleLength.js";
import { test, expect } from "@jest/globals";

//TC01: "Given listing title is less than 5 characters long, when input "hip" is entered ,it throws an error
test("TC01: when listing title is less than 5 characters long, it throws an error", () => {
    expect(listingTitleLength("hip")).toThrow("hip is an invalid title length");
});
//TC02: "Given listing title is less than 5 to 50 characters long (inclusively), when input "very comfy" is entered, it is accepted
test("TC02: when listing title is less than 5 to 50 characters long (inclusively), it is accepted", () => {
    expect(listingTitleLength("very comfy")).toEqual("very comfy");
});
//TC03: "Given listing title is greater than 50 characters long, when input is (very log), it throws an error"
test("TC03: when listing title is greater than 50 characters long, it throws an error", () => {
    expect(listingTitleLength("hungry for hippos in every possible way I will shiskabob them stew them cider them burger them pile them 10 miles deep in a thousand tonnes of katsup and invite all the farm animals to feast")).toThrow("hungry for hippos in every possible way I will shiskabob them stew them cider them burger them pile them 10 miles deep in a thousand tonnes of katsup and invite all the farm animals to feast is an invalid title length");
});