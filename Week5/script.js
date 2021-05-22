let list = [];
let done = [];
let isOk = "y";
while (isOk == "y") {
    isOk = prompt("do you want to add work: y/n");
    if (isOk == "y") {
        let work = prompt("enter a work");
        list.push(work);
    }
};
for (let x of list) {
    console.log(x);
    let isDone = prompt(x + " is done : y/n");
    if (isDone == "y") {
        done.push(x);
    }
}
for (let x of done) {
    console.log(x);
}