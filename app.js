

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

setInterval( function() {
  if(i < 4000) {
    setDigit2();
  }
}, 4);


function setDigit2() {
i++;
$(".h2").text(i);
}

setInterval( function() {
  if(i < 10000) {
    setDigit3();
  }
}, 4);


function setDigit3() {
i++;
$(".h3").text(i);
}
