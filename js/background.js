const images = ["0.jpeg", "1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor( Math.random() * images.length )];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
const bodyStyle = document.body.style;

bodyStyle.backgroundImage = `url(img/${chosenImage})`

//console.log(document.body.style.backgroundImage); /Users/ujmoon/Desktop/vanila-js-2023