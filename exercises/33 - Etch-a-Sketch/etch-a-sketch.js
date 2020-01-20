const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('#shakeBtn');

const LINE_WIDTH = 20;
const MOVE_STEPS = 15
;
console.log(canvas, ctx);

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = LINE_WIDTH;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(key) {

    const hue = Math.floor(Math.random() * 360).toString();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            if (y > 0) {
                y -= MOVE_STEPS;
            }
            break;
        case 'ArrowDown':
            if(y < height) {
                y += MOVE_STEPS;
            }
            break;
        case 'ArrowLeft':
            if (x > 0) {
                x -= MOVE_STEPS;
            }
            break;
        case 'ArrowRight':
            if (x < width){
                x += MOVE_STEPS;
            }
            break;
        default:
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}

const handleKeyDown = (e) => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw(e.key)
    }
}

const handleCanvasShake = (e) => {
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    }, {once: true});
    ctx.clearRect(0, 0, width, height);
}

window.addEventListener('keydown', handleKeyDown);
shakeBtn.addEventListener('click', handleCanvasShake);


function training(wod) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {resolve(`After a lot of effort you finished the ${wod} wod`)}, 3000)
    })
}

training('Cindy')
    .then(msg => console.log(msg));


async function getUserInfo(user) {
    const url = `https://api.github.com/users/${user}`;
    const userInfo = await (await fetch(url)).json();
    console.log(userInfo);
}

getUserInfo();
