let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
};
rabbit.shout = function (lines) {
    console.log(`The rabbit shouts '${lines}'`);
};

rabbit.speak("I'm alive.")
rabbit.shout("I'm Shoutingggggg!!!!")

console.log();
function speaks(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "White", speaks};
let hungryRabbit = {type: "hungry", speaks};

whiteRabbit.speaks("Oh my ears and whiskers, " + "how late it's getting!");

hungryRabbit.speaks("I could use a carrot right now.");