const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

console.log(canvas);
console.log(ctx);

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50);

for (var i = 1; i < 600; i++) {
    
    ctx.clearRect(0, 0, 650, 500)
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, i, 50);
}