//array containing the image paths.
const imagePaths=['./images/dice1.png',
'./images/dice2.png','./images/dice3.png',
'./images/dice4.png','./images/dice5.png',
'./images/dice6.png']


//my function to get a random in multiples of the array length
function getRamdomIdex(array){
    return Math.floor(Math.random()* array.length);
}

//my variable that holds the randomly selected image path
const randomImagePath = imagePaths[getRamdomIdex(imagePaths)];

//my variable2 that holds the randomly selected image path
const randomImagePath2 = imagePaths[getRamdomIdex(imagePaths)];


//assigning the random images to the src of my image 
document.querySelector(".index .img1").src=randomImagePath;

document.querySelector(".index .img2").src=randomImagePath2;


//work unknown

const resultText=document.getElementById("title");

//if statement for player 2

if(randomImagePath < randomImagePath2){
resultText.textContent="Player 2 wins"
}else if(randomImagePath > randomImagePath2){
    resultText.textContent="Player 1 wins"
}else{
    resultText.textContent="Draw"
}


//for my button

function reloadPage(){
    window.location=window.location.href;
}



















