var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay")
var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    resetButton.textContent = "New Colors";
    h1.style.background = "#d9d9d9";
    assignColors(); //assigns new random colors
    pickColor(); // picks the new answer color
    setColors();
})

// creates 6 random colors in the colors array
/*for(let i =0; i<squares.length; i++){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    colors[i] = "rgb("+ r +", "+ g +", "+ b +")";
} */
assignColors();
// sets the answer color
pickColor();
setColors();

function setColors(){
    resetButton.textContent = "New Colors"
    for (let i = 0; i < squares.length; i++){
        // give each square a color
        squares[i].style.backgroundColor = colors[i];
        // add event listeners to the squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor){
                h1.style.background = pickedColor;
                messageDisplay.textContent = "Correct"
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
            } else {
                this.style.backgroundColor = "#d9d9d9";
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}
function changeColors(color){
    //loop through all squares to match a given color
    for(var s of squares){
        s.style.backgroundColor = color;
    }
}
//randomly picks a color to be the answer
function pickColor(){
    let ranIndex = Math.floor(Math.random() * squares.length)
    pickedColor = colors[ranIndex]
    colorDisplay.textContent = colors[ranIndex];

}
// assigns random colors to each element in the global array
function assignColors(){
    for(let i =0; i<squares.length; i++){
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
