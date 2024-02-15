// function Rabbit(type) {
// this.type = type;
// }
// let weirdRabbit = new Rabbit("weird");
// console.log(weirdRabbit);

let okIterator = "OKs"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());