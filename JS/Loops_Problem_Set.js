var num = 0;

console.log("Print all numbers b/w -10 and 19");
num = -10;
while (num <= 19) {
console.log(num)
num ++;
}

for (var i = -10; i < 20; i++) {
  console.log(i);
}


console.log("Print all even numbers between 10 and 40");
num = 0;
// This is better method if don't control what value num starts as:
while (num <=40) {
  if (num % 2 === 0 && num >= 10) {
      console.log(num);
  }
num++;
}
// Better method: only has to run half as often and shorter code
num = 0;
while (num <=40) {
  console.log(num);
  num+=2;
}

for (var i = 10; i <=40 ; i+=2) {
  console.log(i);
}


console.log("Print all odd numbers b/w 300 and 333");
num = 0;
while (num <=333) {
  if (num % 2 !== 0 && num >= 300) { //can also "cheat" and set num = 300 at start
      console.log(num);
  }
num++;
}

for (var i = 301; i < 334; i+=2) {
  console.log(i);
}




console.log("Print all numbers divisible by 5 AND 3, b/w 5 and 50");
num = 5;
while (num <=50) {
  if (num % 5 === 0 && num % 3 === 0) {
      console.log(num);
  }
num++;
}

for (var i = 5; i < 50; i++) {
if (i % 5 === 0 && i % 3 === 0) {
console.log(i);
}
}



var blerb = "ahceclwlxo";
for (var i = 1; i < blerb.length; i+=2) {
console.log(blerb[i]); /* index starts at 0=a, 1=h */
}
// h
// e
// l
// l
// o
