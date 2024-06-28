const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = canvas.height / 2;
let dx = 2;  // Hareket hızını belirten değişken
let cindex = 0;

let colors = ['red', 'green', 'yellow', 'purple'];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fillStyle = colors[cindex];
    ctx.fill();

    // x koordinatını güncelle
    x += dx;

    // Duvara çarpınca yön değiştir ve renk değiştir
    if (x > canvas.width - 30 || x < 0) {
        dx = -dx;
        // Renk indeksini güncelle ve sınırları kontrol et
        cindex = (cindex + 1) % colors.length;
    }

    requestAnimationFrame(animate);
}

animate();
