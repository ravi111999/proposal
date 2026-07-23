// ---------------------------
// Floating Hearts
// ---------------------------

function createHeart() {

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

// ---------------------------
// Fake Loading
// ---------------------------

function startLoading() {

    const text = document.getElementById("loadingText");

    if (!text) return;

    let messages = [
        "Connecting to Love Server...",
        "Checking Heart Database...",
        "Finding the Most Beautiful Girl...",
        "Almost Done...",
        "Result Found ❤️"
    ];

    let index = 0;

    const interval = setInterval(() => {

        text.innerHTML = messages[index];

        index++;

        if (index === messages.length) {

            clearInterval(interval);

            setTimeout(() => {

                window.location.href = "/reveal";

            }, 1500);

        }

    }, 1000);

}

// ---------------------------
// Proposal Buttons
// ---------------------------

function moveNoButton() {

    const btn = document.getElementById("noBtn");

    if (!btn) return;

    btn.style.position = "fixed";

    let x = Math.random() * (window.innerWidth - btn.offsetWidth);

    let y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = x + "px";
    btn.style.top = y + "px";

}

// ---------------------------
// YES Button
// ---------------------------

function accepted() {

    window.location.href = "/success";

}

// ---------------------------
// Confetti
// ---------------------------

function confetti() {

    for (let i = 0; i < 120; i++) {

        let conf = document.createElement("div");

        conf.style.position = "fixed";
        conf.style.width = "10px";
        conf.style.height = "10px";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.top = "-20px";
        conf.style.background =
            "hsl(" + Math.random() * 360 + ",100%,50%)";

        conf.style.borderRadius = "50%";

        conf.style.transition = "4s linear";

        document.body.appendChild(conf);

        setTimeout(() => {

            conf.style.top = window.innerHeight + "px";

        }, 100);

        setTimeout(() => {

            conf.remove();

        }, 4500);

    }

}