// myFunction
//		1) Generate Random Number onLoad of Page
//		2) Insert random number into num Array, and refer to this for guessing game.
//      3) Print Number onLoad of Page (FOR TESTING PURPOSES ONLY)

function randomNumGen() {
   var element =  document.getElementById("demo")
   element.innerHTML = Math.floor((Math.random() * 100) + 1);
   num = []
   num.push[element.innerHTML]
   num
}