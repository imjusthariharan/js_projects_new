/***** define buttons ****/
const nrm = document.getElementById("normalbtn");
const hxbtn = document.getElementById("hexbtn");
const color_val = document.getElementById("color_value");
var value = "";


/** normal color **/
nrm.addEventListener("click", function() {
  const randomNumber = getRandomNumber(normal_colors);
  value = normal_colors[randomNumber];

});


/** hex color **/
hxbtn.addEventListener("click", function(){
let hexClr = "#";

for (let i = 0; i < 6 ; i++){

  hexClr += hex_colors [getRandomNumber(hex_colors)];
  value = hexClr;


}




});

/**** change bg and inner html ****/
document.body.style.backgroundColor = value;
color_val.innerHTML = value;


/**** define color arrays ****/
const normal_colors = ["blue", "green", "red", "violet", "yellow"];
const hex_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



/**** create random function ****/
function getRandomNumber(const_var) {
  return Math.floor(Math.random() * const_var.length);
}



// const btn = document.getElementById("normalbtn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }