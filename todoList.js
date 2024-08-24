const prompt = require('prompt-sync')();
const todos = ["Galatasaray"];
let input = prompt("What would you like to do");
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`);
        }

    } else if (input === "new") {
        const newToDo = prompt("Ok , what is the new to do ");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`)
    } else if (input === "delete") {
        const index = parseInt(prompt("ok , enter an index to delete: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok , deleted:  ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }

    }
    input = prompt("What would you like to do");

}
console.log("OK , QUIT THE APP");



