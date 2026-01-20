// popup js
let instrument1 = document.getElementsByClassName('instrument-card ')[0];
                let instrument2 = document.getElementsByClassName('instrument-card ')[1];
                let instrument3 = document.getElementsByClassName('instrument-card ')[2];
                let popup = document.querySelector(".popup");
                let popupimg = document.querySelector(".popup-img");
                let popupname = document.querySelector(".popup-name");
                let popupdesc = document.querySelector(".popup-desc");
                instrument1.addEventListener("click", () => {
                    popupimg.src = "../conscious-rap(3)/instrument1.jpg";
                    popupname.innerHTML = "Piano";
                    popupdesc.innerHTML = `The piano or keyboard is often used in conscious rap to craft melodic, soulful backdrops that support deep, message-driven lyrics. Its rich chords and gentle harmonies can enhance emotional expression and set a reflective mood. Producers use it to balance rhythm with melody, making the music feel more introspective and thoughtful.`;
                    popup.style.display = "flex";
                })
                instrument2.addEventListener("click", () => {
                    popupimg.src = "../hard-rock(1)/instrument2.jpg";
                    popupname.innerHTML = "Drum Kit";
                    popupdesc.innerHTML = `A drum kit is a collection of drums and cymbals played together to create rhythm and timing in music.
It provides the beat and energy that drives a song forward.`;
                    popup.style.display = "flex";
                })
                instrument3.addEventListener("click", () => {
                    popupimg.src = "../hard-rock(1)/instrument3.webp";
                    popupname.innerHTML = "Bass Guitar ";
                    popupdesc.innerHTML = `A bass guitar produces low-pitched sounds that support the rhythm and harmony.`;
                    popup.style.display = "flex";
                })
                let closebtn=document.querySelector('.close-btn');
                closebtn.addEventListener("click",()=>{
                    popup.style.display="none"
                })