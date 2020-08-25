
var speakWord = "Good Bye";

function speak(name) {
  console.log(speakWord + " " + name);
}


var speakWord = "Hello";

function speak(name) {
  console.log(speakWord + " " + name);
}


function main () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  // var helloSpeaker;
  // var byeSpeaker;

  var firstLetter = names[i].charAt(0).toLowerCase();


  if (firstLetter === 'j') {
    // console.log("Hello");
    byeSpeaker.speak(names[i]);
  } 
  else {
    helloSpeaker.speak(names[i]);
  }
}

};
