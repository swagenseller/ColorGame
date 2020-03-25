var colors = [];
var pickedColor;
var difficulty = 6;

var colorDisplay = document.getElementById("colorDisplay")
var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBt");
var hardBtn = document.querySelector("#hardBt");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    h1.style.background = "#d9d9d9";
    difficulty = 3
    assignColors(difficulty);
    pickColor(difficulty);
    setColors(difficulty);
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    h1.style.background = "#d9d9d9";
    difficulty = 6;
    assignColors(difficulty);
    pickColor(difficulty);
    setColors(difficulty);
})


resetButton.addEventListener("click", function(){
    resetButton.textContent = "New Colors";
    h1.style.background = "#d9d9d9";
    assignColors(difficulty); //assigns new random colors
    pickColor(difficulty); // picks the new answer color
    setColors(difficulty);
})

// creates 6 random colors in the colors array
/*for(let i =0; i<squares.length; i++){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    colors[i] = "rgb("+ r +", "+ g +", "+ b +")";
} */
assignColors(6);
// sets the answer color
pickColor(6);
setColors(6);

function setColors(diff){
    resetButton.textContent = "New Colors"
    for (var i = 0; i < diff; i++){
        squares[i].style.display = "inline";
        // give each square a color
        squares[i].style.backgroundColor = colors[i];
        // add event listeners to the squares
        squares[i].addEventListener("click", function(){

            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor){
                h1.style.background = pickedColor;
                messageDisplay.textContent = "Correct"
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor, diff);
            } else {
                this.style.backgroundColor = "#d9d9d9";
                messageDisplay.textContent = "Try Again"
            }
        })
    }
    while(i < squares.length){
        squares[i].style.display = "none";
        i++;
    }
}
function changeColors(color, diff){
    //loop through all squares to match a given color
    for(var i = 0; i < diff; i++){
        squares[i].style.backgroundColor = color;
    }
}
//randomly picks a color to be the answer
function pickColor(num){
    let ranIndex = Math.floor(Math.random() * num)
    pickedColor = colors[ranIndex]
    colorDisplay.textContent = colors[ranIndex];

}
// assigns random colors to each element in the global array
function assignColors(num){
    for(let i =0; i<num; i++){
        colors[i] = ranColor();
    }
}


// returns a string based on a random color
function ranColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb("+ r +", "+ g +", "+ b +")";
}
