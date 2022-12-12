const colors = ["red", "blue", "green"];
let colorIndex = 0;
const body = document.getElementsByTagName('body')[0];
const change = () => {
    // if(colorIndex >=3){
    //     colorIndex = 0;
    // }
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${red},${blue},${grenn})`;
    // body.style = `background-color: ${colors[colorIndex]}`;
    // colorIndex++;
};
btm.addEventListener("click", change);