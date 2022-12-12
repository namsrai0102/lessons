const colors = ["red", "blue", "green"];
let colorIndex = 0;
const tan = document.querySelector(".tab");
const change = () => {
    // if(colorIndex >=3){
    //     colorIndex = 0;
    // }
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    tan.style.backgroundColor = `rgb(${red},${blue},${green})`;
    // body.style = `background-color: ${colors[colorIndex]}`;
    // colorIndex++;
    console.log(tab)
};
btm.addEventListener("click", change);