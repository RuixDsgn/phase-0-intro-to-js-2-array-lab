// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
   const newCats = [...cats.slice(0, cats.length), name];
    return newCats;
}

function prependCat(name) {
    const addCats = [name, ...cats];
     return addCats;
 }

 function removeLastCat(name) {
    const removeCats = cats.slice(0, -1);
     return removeCats;
 }

 function removeFirstCat(name) {
    const removeCat = cats.slice(1);
    return removeCat;
 }
