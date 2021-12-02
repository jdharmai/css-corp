var a = 1; var b = 2; var c = 3;
(function firstFunction () {
  var b = 5; var c = 6;

  (function secondFunction () {
    var b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction () {
      var a = 7; var c = 9;

      (function fourthFunction () {
        var a = 1; var c = 8;
      })()
    })()
  })()
})()




var bird = 'Pidgeons';
( function () {
    console.log(bird)
    if ( typeof bird === 'undefined' ){
        bird = 'Rubber Duck';
        console.log('Ernie loves his ' + bird );
    } else {
        console.log('Bert loves his ' + bird );
    }
}() );




const users = [
  { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
  { id: 2, name: 'Virat', gender: 'Male', age: 30},
  { id: 3, name: 'Rohit', gender: 'Male', age: 28},
  { id: 7, name: 'Taimur', gender: 'Male', age: 08},
  { id: 4, name: 'Alia', gender: 'Female', age: 18},
  { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
  { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

// Find the user whoes name start with y

const result1 = users.find(item => item.name.slice(0,1) === 'Y');

console.log(result1);

// Find the index who is male and age 32

const result2 = users.findIndex(item => item.gender === 'Male' && item.age === 32);

console.log(result2);

// check we have user age between 30 and 40

const result3  = users.some(item => item.age >= 30 && item.age <= 40);

console.log(result3);

// if user is male add profession: 'cricketer'

// if user is female add profession:'actor' 

const users2 = users.map(item => {
  if(item.gender==="Male"){
      return {...item,profession: 'cricketer'}       
  }
  if(item.gender==="Female"){
      return {...item,profession: 'actor'}       
  }
  return item
})