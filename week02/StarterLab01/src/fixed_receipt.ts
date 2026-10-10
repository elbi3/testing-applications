// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

export const ITEMS: { name: string, price: number }[] = [
    { name: "paper towels", price: 21.99 },
    { name: "sandwich", price: 8.75 },
    { name: "eggs", price: 6.75 },
    { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
    if(!name || price < 0) throw new Error("Function input not valid");
    if(typeof name !== "string") throw new Error("Function input not valid");
    if(Number.isFinite(name)) throw new Error("Function input not valid");
    const newItem = { "name" : name, "price" : price };
    ITEMS.push(newItem);
    return ITEMS;
}

export function deleteItem(name: string) {
    if(!name) throw new Error("Function input not valid");
    const idx = ITEMS.findIndex(item => item.name === name);
    const removed = ITEMS.splice(idx, 1);
    console.log(`Removing item: ${removed[0].name}`);
    return ITEMS;
}

export function total() {

    let total = 0;
    for (const item of ITEMS) {
        total += item.price;
    }
//call tax here?
    return total;
}

export function tax(taxRate: number) {
    if(taxRate < 0) throw new Error("Function input not valid");
    const tax = total() * taxRate;
    return tax.toFixed(2);
}

export function printReceipt(taxRate: number) {
    if(taxRate < 0) throw new Error("Function input not valid");
    console.log("************************");

    for (const item of ITEMS) {
        console.log(`${item.name} : $${item.price}}`);
    }

    console.log("************************");
    console.log(`Subtotal: $${String(total())}`);
    console.log(`Tax: $${String(taxRate)}`);
    console.log(`Total: $${String(tax(taxRate))}`);
}

// AI transparency: AI was used to clean up this code.

// addItem("pickles", 3.33);
// console.log("ITEMS WITH PICKLES??", ITEMS);
// deleteItem("eggs");
// console.log("ITEMS NO EGGS??", ITEMS);
// console.log("total: ", total());
// printReceipt(.07);