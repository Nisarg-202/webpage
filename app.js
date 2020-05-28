
var i = 0;

setInterval( function() {
  if(i < 6844) {
    setDigit1();
  }
}, 4);


function setDigit1() {
i++;
$(".h1").text(i);
}

var j=0;

setInterval( function() {
  if(j < 4000) {
    setDigit2();
  }
}, 4);


function setDigit2() {
j++;
$(".h2").text(j);
}


var k=0;

setInterval( function() {
  if(k < 10000) {
    setDigit3();
  }
}, 4);


function setDigit3() {
k++;
$(".h3").text(k);
}
