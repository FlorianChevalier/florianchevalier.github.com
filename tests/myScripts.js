
document.write("Random loop <br/>");
var n;
for (n= 0; n<9; n++){
  var ans= Math.random();
  document.write("random:" + ans + "<br/>");
}
document.write("Square loop <br/>");
var p;
for(p= 2; p<10; p++){
  var ans = Math.sqrt(p);
  document.write("the square is:" + ans + "<br/>");
}

function myFunction() {

var start = document.getElementById("start").value;
var end= document.getElementById("end").value;
var jump= document.getElementById("jump").value;
jump = Number(jump);
start = Number(start);
end = Number(end);
console.log(typeof jump);
console.log(typeof start);  
console.log(typeof end);
  for (var i = start; i <= end; i+=jump) {
    
    
    document.write( '<p>' + i + '</p>');
  // document.write(jump);
  // console.log(i);
}
}
