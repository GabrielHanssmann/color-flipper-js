const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
   // get random number in the array between 0 -3
    const randonNumber = getRandonNumber();
    console.log(randonNumber);

    document.body.style.backgroundColor = colors[randonNumber]
    color.textContent = colors[randonNumber]
});

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length);
};