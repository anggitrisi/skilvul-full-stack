export default function sayHello() {
  console.log("Hello");
}

export function greeting(name){
  const message = `Hello, ${name}`
  return message;
}
