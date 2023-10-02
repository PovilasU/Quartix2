function greetSimple(name) {
  console.log("Hi" + " " + name);
}

// greetSimple("Marcus Aurelius");
//function
export function greet(name, cb) {
  console.log("hi " + " " + name);
  cb();
}

//calback fnction
export function callMe() {
  console.log("I am calback function");
}

greet("Epictetus", callMe);
