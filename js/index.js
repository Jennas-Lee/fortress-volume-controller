let btn = document.getElementById('volume-btn');
let volume = document.getElementById('volume');
let icon = document.getElementById('volume-icon');
let dot = document.getElementById('volume-dot');
let count = 0;
let pressed = false;

icon.addEventListener('mouseup', (event) => {
    pressed = false;
    volume.innerText = count;
    dot.style.display = 'block';
    icon.style.transform = 'none';
    launch(count);
    count = 0;
});

icon.addEventListener('mousedown', (event) => {
    pressed = true;
    interval();
});

let launch = (count) => {
    let angle = 180;

    let draw = setInterval(() => {
        if (angle < 0) {
            clearInterval(draw);
        } else {
            let radian = angle * Math.PI / 180;

            dot.style.left = ((120 + count * 2.5 - 15) + Math.cos(radian) * count * 2.5) + 'px';
            dot.style.top = (48.5 + Math.sin(radian) * count * 2.5 * -1) + 'px';

            angle--;
        }
    }, 1);
}

let interval = () => {
    if (pressed) {
        dot.style.display = 'none';
        if (count < 100) {
            count++;
            icon.style.transform = 'rotate(' + (-count * 0.9) + 'deg)';
        }
    }

    setTimeout(() => {
        interval();
    }, 40);
}