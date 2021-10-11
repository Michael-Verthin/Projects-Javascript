// this function return the number of "likes" people give, like facebook
// if no one lies it  --> 'no one likes this'
// if 1 person likes it --> '<name> likes it'
// if 2 people likes it --> '<name> and <name> likes it'
// if 3 people likes it --> '<name>,<name> and <name> likes it'
// if 4+ people likes it --> '<name>,<name> and 2 others like it'
function likes(names) {
    switch (names.length){
        case 0 : return `no one likes this`;
        break;
        case 1 : return `${names[0]} likes it`;
        break;
        case 2 : return `${names[0]} and ${names[1]} likes it`;
        break;
        case 3 : return `${names[0]},${names[1]} and ${names[2]} likes it`;
        break;
        default : 
        return `${names[0]},${names[1]} and ${names.length-2} others like it`;
    }
}
/*
console.log(likes([]));
console.log(likes(["peter"]));
console.log(likes(["peter", "michael"]));
console.log(likes(["peter", "michael", "alice"]));
console.log(likes(["peter", "michael", "alice", "david"]));
console.log(likes(["peter", "michael", "alice", "david", "peter", "michael", "alice", "david"]));
*/


//this function checkes the missing num in the arithmic progress arrey:
var findMissing = function (list) {
    var step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}
/*
  console.log(findMissing([3, 5, 6]));  // missing 4 
  console.log(findMissing([1, 3, 4]));  // missing 2
  console.log(findMissing([1, 3, 5, 9, 11]));  // missing 7
  console.log(findMissing([4, 7, 10, 13, 19, 22]));  // missing 16
*/


// this kata gave me:
// starting populatioin
// parcent of growth for a year
// added number of people that came to taht town
// the 'p' is the number that this function is checking when the town will surpass that number
function nbYear(p0, percent, aug, p) {
    let outCome = p0 + (p0 * percent/100) + aug;
    let count=1;
    while (outCome<=p){
        console.log(`outCome is: ${outCome}`);
      outCome=outCome + (outCome * percent/100) + aug;
      count++;
    }
      return count;
  }
/*
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
*/  

