const pixel = document.querySelectorAll('.fill');


bubbleOne = new Audio("./assets/sounds/hefty-bubble.mp3");
bubbleTwo = new Audio("./assets/sounds/multiple-bubbles.mp3");
bubbleThree = new Audio("./assets/sounds/popping-bubbles.mp3");
bubbleFour = new Audio("./assets/sounds/shallow-bubble.mp3");
bubbleFive = new Audio("./assets/sounds/simple-bubble.mp3");


let Bubbles = [bubbleOne, bubbleTwo, bubbleThree, bubbleFour, bubbleFive];

function playSound(){
        pixel.forEach((element) => {
                
        element.addEventListener("mouseover", () => {
        let Bubbles = [bubbleOne, bubbleTwo, bubbleThree, bubbleFour, bubbleFive];
        let i = Math.floor(Math.random() * Bubbles.length); //gets a random number between 0 and 1 and multiplies it by the length of the array, to get a random index in the array
        let randomBubble = Bubbles[i];
        randomBubble.play();
        });
  });   
}

function changeOpacity(){
        pixel.forEach((element) => {
            element.addEventListener("mousemove", () => {
                element.classList.add("hover");
                element.style.opacity = Math.random().toString(); // Ensure opacity is a string
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 1000);
            });
       });
}

function rotatePixel(){
        pixel.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                element.classList.add("rotate");
                setTimeout(() => {
                        element.classList.remove("rotate");
                }, 1000);
            });
       });
}

let isMuted = true; //set value to false to start with sound on
const volumeButton = document.getElementById("volume");
const volumeIcon = document.getElementById("volume-icon");


// Sync initial audio state
Bubbles.forEach(audio => audio.muted = isMuted);

volumeButton.addEventListener("click", () => {
    // pixel.style.backgroundColor = "violet"; // Change background color on click
    isMuted = !isMuted;

    Bubbles.forEach(audio => {
        audio.muted = isMuted;
    });

    volumeButton.classList.toggle("muted", isMuted); //forces class to match the state 

    // console.log(`Sound is now ${isMuted ? "muted" : "unmuted"}`);
});






changeOpacity(); // Ensure the function is called to attach event listeners
rotatePixel();
playSound(); // Ensure the function is called to attach event listeners
