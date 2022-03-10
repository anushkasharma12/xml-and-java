const timeout = (ms = 3000) =>
new Promise((resolve) => setTimeout(resolve,ms));

/*function inc(a) {
  timeout()
  return a + 1;
} */
const inc = (a) => {
  return new Promise ((resolve) => timeout().then(()=> resolve(a+1)));
}

const sum = function (a, b) {
  return new Promise(resolve => {
    timeout().then(() => { resolve(a+1)});
  })
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {

    return new Promise(resolve=> {
      timeout().then(()=>sum(a,b)).then((s)=> {  resolve(s/2)});
    })
};

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise(resolve=> {
      timeout().then(()=> {resolve(this.name.split(sep))});
    });
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static async of(name) {
    return new Person(name);
  }

  async split(sep = " ") {
    return new Promise(resolve=>{
      timeout().then(()=> {resolve(this.name.split(sep))});
    });
  }
}
const main = async () => {

try{
const person = Person.of("Marcus Aurelius");
console.log("inc(5) =", await inc(5));
console.log("sum(1, 3) =",await sum(1, 3));
console.log("max(8, 6) =", await max(8, 6));
console.log("avg(8, 6) =",await avg(8, 6));
console.log("obj.split() =",await obj.split());
console.log("person.split() =", await person.split());

}catch(error) {}

};
main();