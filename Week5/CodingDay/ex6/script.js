let arr = [1, 4, 8];

let arrD = [];

for (x of arr) {
    switch (x) {

        case 1:
            arrD.push("Monday");
            break;

        case 2:
            arrD.push("Tuesday");
            break;

        case 3:
            arrD.push("Wednesday");
            break;

        case 4:
            arrD.push("Thursday");
            break;

        case 5:
            arrD.push("Friday");
            break;

        case 6:
            arrD.push("Saturday");
            break;

        case 7:
            arrD.push("Sunday");
            break;

        default:
            console.log("invalid");
    }

}

for (y of arrD) {
    console.log(y);
}