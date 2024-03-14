// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
// console.log(isSum50)
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



const isDiv5 = (n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5) === 0;

console.log(`The result is ${isDiv5}`)

const firstLarger = n1 > n4 ;

console.log(`The result is ${firstLarger}`)

const result = ((n1 - n2) * n3 ) % n4;

  console.log(`The result is ${result}`);


  const isNotOver25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;

  console.log(`The result is ${isNotOver25}`);


  const gall55 = (1500 / 30);
  const gall60 = (1500 / 28);
  const gall75 = (1500 / 23);

  const budget = 175;

  const average = 3;

  const fuel_ex55 = (gall55 * average) <= budget;

  const fuel_ex60 = (gall60 * average) <= budget;

  const fuel_ex75 = (gall75 * average) <= budget;

  const total_trip_duration55 = (1500 / 55);

  const total_trip_duration60 = (1500 / 60);

  const total_trip_duration75 = (1500 / 75);

  console.log(`At 55 mph you will need ${gall55} gallons of gas. Are we within our budget of 175? ${fuel_ex55}. And it will take ${total_trip_duration55} hours`)

  console.log(`At 60 mph you will need ${gall60} gallons of gas. Are we within our budget of 175? ${fuel_ex60}. And it will take ${total_trip_duration60} hours`)

  console.log(`At 75 mph you will need ${gall75} gallons of gas. Are we within our budget of 175? ${fuel_ex75}. And it will take ${total_trip_duration75} hours`)

