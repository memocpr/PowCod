// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen / console like so: "You will be a X in Y, and married to Z with N kids."

let numChild,
    partner,
    myLocation,
    job,
    fortune,



    function tellMeFortune() {

        numChild = 2,
            partner = "April",
            myLocation = "UK",
            job = "Sofware Engineer",
            fortune = "";

        fortune = `You ll be a ${job} in ${myLocation} and married to ${partner} with ${numChild} children`;

        return fortune;

    }

console.log(tellMeFortune());