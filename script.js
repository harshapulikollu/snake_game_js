let direction  = {x:0, y:1};

let snake = [{x:13, y:6}];

let food = {x:10, y:10};

let lastPaintedTime = 0;

let speed = 2;

let score = 0;

function main(cTime){
    window.requestAnimationFrame(main);
    if((cTime- lastPaintedTime)/1000 < 1/speed){
        return;
    }
    lastPaintedTime = cTime;
    gameEngine();
}


function isSnakeCollided(sArr){
    for(let i =1; i< sArr.length; i++){
        if(sArr[i].x === snake[0].x && sArr[i].y === snake[0].y){
            return true;
        }
    }

    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 20 || snake[0].y <= 0){
        return true;
    }

    return false;
}


function resetGame(e) {

    gameOverModal.style.display = "none";

    score = 0;

    scoreElement.innerHTML = "Score: "+ score;

    direction  = {x:0, y:1};

    snake = [{x:13, y:6}];

    food = {x:10, y:10};



}

function gameEngine(){

    if(isSnakeCollided(snake)){
        //gameover
        gameOverModal.style.display = "block";

        gameOverScore.innerHTML = "Your score is "+score;

    }else{
        //checking if snake ate food
        if(snake[0].x === food.x && snake[0].y === food.y){
            //increase the snake length
            snake.unshift({x : snake[0].x + direction.x, y: snake[0].y +direction.y});
            //randomize the food
            food = {x: Math.round(1+(18-1)* Math.random()), y: Math.round(1+(18-1)* Math.random())};

            score += 1;

            scoreElement.innerHTML = "Score: "+score;
        }

        //moving th snake
        for(let i = snake.length-2; i>=0; i--){
            snake[i+1] = {...snake[i]};
        }

        snake[0].x += direction.x;
        snake[0].y += direction.y;
    }


    const board =  document.getElementById("board");
    board.innerHTML = "";

    snake.forEach((e, index) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        snakeElement.classList.add("snake");
        board.appendChild(snakeElement);
    });

    const foodElement = document.createElement("div");
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;

        foodElement.classList.add("food");
        board.appendChild(foodElement);
}


function listener(e){
    switch (e.key) {
        case "ArrowUp":
            direction.x = 0;
            direction.y = -1;
            break;
        case "ArrowDown":
            direction.x = 0;
            direction.y = 1;
            break;
        case "ArrowLeft":
            direction.x = -1;
            direction.y = 0;
            break; 
        case "ArrowRight":
            direction.x = 1;
            direction.y = 0;
            break;
        default:
            break;
    }
}


window.requestAnimationFrame(main);

window.addEventListener("keydown", listener);

const scoreElement = document.getElementById("score");

const gameOverModal = document.getElementById("gameOverModal");
const gameOverScore = document.getElementById("gameOverScore");
const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", resetGame);











































// let direction = {x:0, y:0};
// let lastUpdateTime = 0;
// let speed = 2;
// let snakeArr = [{x:13, y:15}];
// let food = {x:2, y:7};

// function main(cTime) {
//     window.requestAnimationFrame(main);
//     if((cTime - lastUpdateTime)/1000 < 1/speed){
//         return;
//     }
//     lastUpdateTime = cTime;
//     console.log(cTime);

//     gameEngine();
// }

// function listener(e) {
//     switch (e.key) {
//         case 'ArrowUp':
//             direction.x = 0;
//             direction.y = -1;
//             break;
//         case 'ArrowDown':
//             direction.x = 0;
//             direction.y = 1;
//             break;
//         case 'ArrowLeft':
//             direction.x = -1;
//             direction.y = 0;
//             break;   
//         case 'ArrowRight':
//             direction.x = 1;
//             direction.y = 0;
//             break; 
//         default:
//             break;
//     }
// }

// function isSnakeCollided(arr){
//     for(let i=1; i < arr.length; i++) {
//         if(arr[i].x === snakeArr[0].x && arr[i].y === snakeArr[0].y){
//             return true;
//         }
//     }
//     if(snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 20 || snakeArr[0].y <=0){
//         return true;
//     }
//     return false;
// }


// function gameEngine(){

//     //if snake collide
//     if(isSnakeCollided(snakeArr)){
//         alert("game over");
//     }else{
//         //if food ate by snake
//         //increment the snake length and randomize the food
//         if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
//             snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y});
//             food = {x: Math.round(1 +(18-1)* Math.random()), y : Math.round(1 +(20-1)* Math.random()) }
//         }

//         //moving the snake ahead
//         for(let i= snakeArr.length-2; i>=0; i--){
//             snakeArr[i+1] = {...snakeArr[i]};
//         }
//         snakeArr[0].x += direction.x;
//         snakeArr[0].y += direction.y;
//     }

//     const board = document.getElementById("board");
//     board.innerHTML = "";

//     //displaying the snake
//     snakeArr.forEach((e, index) => {
//       const snakeElement = document.createElement("snake");
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;

//         snakeElement.classList.add("snake");
//         board.appendChild(snakeElement);
//     });

//     //displaying the food
//     const foodElement = document.createElement("food");
//         foodElement.style.gridRowStart = food.y;
//         foodElement.style.gridColumnStart = food.x;

//         foodElement.classList.add("food");
//         board.appendChild(foodElement);

// }

// //first step
// window.requestAnimationFrame(main);

// //adding keydown listener
// window.addEventListener("keydown", listener);

// window.onload = () => direction = {x:0, y:-1};
