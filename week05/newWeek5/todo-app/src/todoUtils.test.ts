//npm test to run "test file"

import { describe, expect, it } from "@jest/globals";
import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";


describe("the function `createTodo`", ()=>{ //test suite 2
    it("creates a todo object with the input string", () => {
        const myTodo = createTodo("BUY SOCKS");
        
        expect(typeof myTodo.id).toBe("number");
        expect(typeof myTodo.text).toBe("string");
        expect(myTodo.done).toBe(false);
        expect(myTodo.text).toBe("BUY SOCKS");
    });
});

describe("the function `addTodo`", ()=>{ //test suite 1
    it("does not add a blank string to the todo list", () => {
        const myList: Todo[] = [];
        const list = addTodo(myList, " ");

        expect(list).toEqual([]);
    });
    it("adds a valid string to the todo list", () => {
        const myList: Todo[] = [];
        const list = addTodo(myList, "BUY MINUTES");

        expect(list).toHaveLength(1);
        expect(list[0].text).toBe("BUY MINUTES");
        expect(list[0].done).toBe(false);
    });
});

describe("the function `countDone`", ()=>{ //test suite 3
    it("returns 0 for an empty todo list", () => { //0 loops
        const myList: Todo[] = [];
        const list = countDone(myList);

        expect(list).toBe(0);
    })
    it("returns 1 for a single finished item on the list", () => { //1 loop
        let myList: Todo[] = [];
        myList = addTodo(myList, "BUY SPAGHETTI");
        myList[0].done = true;
        const list = countDone(myList);

        expect(list).toBe(1);
    })
    it("only counts todos that are done", () => { //multiple loops
        let myList: Todo[] = [];
        myList = addTodo(myList, "BUY SPAGHETTI");
        myList = addTodo(myList, "FILL DUMPSTER");
        myList = addTodo(myList, "BUY MINUTES");
        myList[0].done = true;
        myList[2].done = true;
        const list = countDone(myList);
        expect(list).toBe(2);
    });
});

