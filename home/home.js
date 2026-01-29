// js for play button
let playbtn = document.querySelectorAll(".play-btn");
let audios = document.querySelectorAll(".audio");

playbtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        audios.forEach((audio, i) => {
            if (i !== index) {
                audio.pause();
                playbtn[i].textContent = "▶";
            }
        });

        let currentAudio = audios[index];

        if (currentAudio.paused) {
            currentAudio.play();
            btn.textContent = "⏸";
        } else {
            currentAudio.pause();
            btn.textContent = "▶";
        }
        currentAudio.onended = () => {
            btn.textContent = "▶";
        }
    });
});
