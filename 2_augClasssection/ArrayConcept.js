let oriDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("tommy", "Beauty");
let Birds = new Array("Sweet", "Bulbul","skybeauty");

// Array Copy Elements

let sliceDogs = oriDogs.slice(1,2);
let copyDogs = [... oriDogs];
let dogs = oriDogs.slice(0);

//Stack Function(Lifo) push and Popnpm
let pushDog = dogs.push("Golden Tetriver");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

// And and remove from first
let addFirst = dogs.unshift("Golden Retriver");
let shifDog = dogs.shift();

// atomic add and remove elements(where, how many to remove, element list)
dogs.slice(2,1, "pug","Boxer");

// Array Function - concat, spread, slice and sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second])
{ 
    console.log("scan : " + first + " " + second);
}
scanArray(animals); 
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animals of animals) allAnimals+= animals + " ";
