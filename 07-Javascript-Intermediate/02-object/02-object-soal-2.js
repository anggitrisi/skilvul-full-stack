function getObjectValue(obj,path,delimiter=".") {
  const paths = path.split(delimiter);
  const result = paths.reduce(function(acc,curr){
    if(acc === null){
      return null;
    }
    const recursiveObj = acc[curr];
    if(recursiveObj !== undefined){
      return recursiveObj;
    }
    return null
  },obj); 
  return result;
 }

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)
