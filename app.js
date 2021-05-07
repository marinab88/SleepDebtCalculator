//Determine how many hours of sleep I got each night of the week
let getSleepHours = day => {
  if (day==='monday') {
    return 9;
  } else if (day==='tuesday') {
    return 7;
  } else if (day==='wednesday') {
    return 6;
  } else if (day==='thursday') {
    return 6;
  } else if (day==='friday') {
    return 6;
  } else if (day==='saturday') {
    return 7;
  } else if (day==='sunday') {
    return 9;
  } else {
    return console.log('Error!!! is not a day of the week!!!');
  }
};
//console.log(getSleepHours('monday'));


//Get total sleep hours that I actual slept
let getActualSleepHours = () => {
  let sum=getSleepHours('monday') +
          getSleepHours('tuesday') +
          getSleepHours('wednesday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday');

  return sum;

};
//console.log(getActualSleepHours());

/*
//      *****Extra practice****
let getActualSleepHours = () => {
  return 9+7+6+6+6+7+9;
};
console.log(getActualSleepHours());
*/

//Get the ideal sleep hours that I prefer
const getIdealSleepHours = () => {
  let idealHours=9;
  return idealHours*7;
};
//console.log(getIdealSleepHours());

/*
//      *****Extra practice****
const getIdealSleepHours = idealHours => {
     return idealHours*7;
};
//console.log(getIdealSleepHours(8));
*/

//Calculate the sleep debt
let calculateSleepDebt = () => {
  let actualSleepHours=getActualSleepHours();
  let idealSleepHours=getIdealSleepHours();

 // let idealSleepHours=getIdealSleepHours(8); //Worked for extra practice

  if (actualSleepHours===idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours>idealSleepHours) {
    console.log(`You got more sleep then needed with ${actualSleepHours-idealSleepHours} hour/s.`);
  } else if (actualSleepHours<idealSleepHours) {
    console.log(`You should get some rest. You need to sleep more with ${idealSleepHours-actualSleepHours} hour/s.`);
  } else {
    console.log("Error!!! Something went wrong!");
  } 
};
calculateSleepDebt();