var x = 0

if (x > 2){
    console.log("x is greater than 2") // this block runs if the condition is true
}else{
    console.log("x is not greater than 2")
}

var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");

button.onclick = function(){
    text.innerHTML = input.value;};

//Challenge: Add two other inputs to get values and calculate the sum of those values 
//and show it in on a heading when a button is clicked.