///////////// Q1a /////////////
var arr = ['dog', 'cat', 'deer'];
var result = arr[0] + arr[2];
console.log(result);
// What is the value of result?
// A. dogdeer

///////////// Q1b /////////////
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var children = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
document.getElementById("demo").innerHTML = children;
</script>

<body>
</html>

///////////// Q1c /////////////
var arr = [ 20, 30 ];
for (var i = arr.length; i < 5; i += 1){
  arr[i] = Math.pow(i,2);
}
console.log(arr[i]);
// Will the above for loop execute without error?
// A. execute without error

// If it does execute, what will be contained in the array array
// after the loop terminates ?
// A. 16

///////////// Q1d /////////////
var arr = [ 10, 20, 30, 40, 50, 60, 70, 90 ];
var sum = 0;

for (var i = 1; i < 7; i += 1){
  sum = sum + arr[i];
}
console.log(sum);
// What is the value sum when the loop terminates?
// A. 270

var arr = [ 10, 20, 30, 40, 50, 60, 170, 90 ];
var sum = 0;

for (var i = 1; i < 7; i += 1){
  sum = sum + arr[i];
}
console.log(sum);
// The sum after the loop terminates should be 370.
// Fix the necessary statements to ensure sum is 370.
// A. 370

///////////// Q1e /////////////
var DL = 5;
var d = [25,0,9.0,10.0,25.0,15.0];
var mi = 0;
var m = d[mi];
for (var i = 1; i < DL; i++){
  if (d[i] < m){
    mi = i;
    m = d[mi];
    console.log(m);
  }
}
console.log("mi=",mi,"m=",m);
// A. mi=,0, m=,25

///////////// Q2 /////////////
function sumArray(arr){
  var sum = 0;
  for (i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([15, 20, 25, 30, 35]));
