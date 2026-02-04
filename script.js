/* ================================
   PRO SCRIPT.JS
   Clean • Smooth • Professional
================================ */


/* ================================
   Typing Animation (Intro)
================================ */

function startTyping(titleId, subId, text1, text2) {

    const tEl = document.getElementById(titleId);
    const sEl = document.getElementById(subId);

    if (!tEl || !sEl) return;

    let i = 0, j = 0;

    function typeTitle() {
        if (i < text1.length) {
            tEl.innerHTML += text1[i++];
            setTimeout(typeTitle, 70);
        } else {
            setTimeout(typeSub, 350);
        }
    }

    function typeSub() {
        if (j < text2.length) {
            sEl.innerHTML += text2[j++];
            setTimeout(typeSub, 35);
        }
    }

    typeTitle();
}


/* run typing only if intro page exists */
startTyping(
    "type",
    "sub",
    "Hey Ishu ❤️",
    "I made something just for you..."
);




/* ================================
   Floating Hearts (Smooth + Pro)
================================ */

function startHearts() {

    const container = document.querySelector(".hearts");
    if (!container) return;

    function createHeart() {

        const h = document.createElement("div");
        h.className = "heart";
        h.innerText = "❤️";

        const size = 14 + Math.random() * 26;
        const left = Math.random() * window.innerWidth;

        h.style.fontSize = size + "px";
        h.style.left = left + "px";
        h.style.bottom = "-30px";
        h.style.opacity = 0.9;

        container.appendChild(h);

        let pos = -30;
        let speed = 1 + Math.random() * 2;

        function animate() {
            pos += speed;

            h.style.bottom = pos + "px";
            h.style.opacity = 1 - pos / 650;

            if (pos < 650) {
                requestAnimationFrame(animate);
            } else {
                h.remove();
            }
        }

        requestAnimationFrame(animate);
    }

    setInterval(createHeart, 350);
}

startHearts();




/* ================================
   Background Music Autoplay Fix
   (Chrome safe)
================================ */

const bgm = document.querySelector("audio");

if (bgm) {

    // try autoplay
    bgm.play().catch(() => {

        // play after first click
        document.body.addEventListener("click", () => {
            bgm.play();
        }, { once: true });

    });
}
