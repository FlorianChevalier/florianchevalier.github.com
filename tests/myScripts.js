
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
function myLoop(){
var end = document.getElementById("end").value;
for(var i =0;i <= end; i++)
  {
    document.write('</p>' + i + '</p>');
  }
