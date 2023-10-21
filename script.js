const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.map(function (el) {
  return (el.recommendedFood = Math.trunc(el.weight ** 0.75 * 28));
});
console.log(dogs);

let ownersEatTooMuch = [];

let ownersEatTooLittle = [];

for (const dog of dogs) {
  const recMin = dog.curFood < dog.recommendedFood - dog.recommendedFood / 10;
  const recMax = dog.curFood > dog.recommendedFood + dog.recommendedFood / 10;

  const dogsOwners = dog.owners.some(function (el) {
    return el === "Sarah";
  });
  if (dogsOwners) {
    if (recMin) {
      console.log("мало");
    } else if (recMax) {
      console.log("много");
    } else {
      console.log("нормально");
    }
  }
  if (recMin) {
    ownersEatTooLittle.push(dog.owners);
  } else if (recMax) {
    ownersEatTooMuch.push(dog.owners);
  }

  ownersEatTooLittle = ownersEatTooLittle.flat();
  ownersEatTooMuch = ownersEatTooMuch.flat();
}

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

console.log(ownersEatTooLittle.join(" "), "собаки едят слишком мало");
console.log(ownersEatTooMuch.join(" "), "собаки едят слишком много");

const trueOrFalse = [];
const trueOrFalse2 = [];

for (const dog of dogs) {
  if (dog.curFood === dog.recommendedFood) {
    trueOrFalse.push(true);
  } else {
    trueOrFalse.push(false);
  }
}
const onceTrueOrFalse = trueOrFalse.some(function (el) {
  return el === true;
});

console.log(onceTrueOrFalse);

for (const dog of dogs) {
  const recMin = dog.curFood > dog.recommendedFood - dog.recommendedFood / 10;
  const recMax = dog.curFood < dog.recommendedFood + dog.recommendedFood / 10;

  if (recMin && recMax) {
    trueOrFalse2.push(true);
    console.log(dog.owners);
    // console.log(dog);
  } else {
    trueOrFalse2.push(false);
  }
}
const onceTrueOrFalse2 = trueOrFalse2.some(function (el) {
  return el === true;
});

console.log(onceTrueOrFalse2);

const dogsCopy = new Array(0);

const x = [];
console.log(dogsCopy);
for (let i = 0; i < dogs.length; i++) {
  x.push(dogs[i].curFood);
}
const y = x.sort(function (a, b) {
  return a - b;
});
console.log(y);

for (let i = 0; dogsCopy.length !== dogs.length; i++) {
  for (const dog of dogs) {
    if (dog.curFood === y[i]) {
      dogsCopy.push(dog);
    } else {
      continue;
    }
  }
}
console.log(dogsCopy);
