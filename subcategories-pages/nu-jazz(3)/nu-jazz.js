// popup js
let instrument1 = document.getElementsByClassName('instrument-card ')[0];
                let instrument2 = document.getElementsByClassName('instrument-card ')[1];
                let instrument3 = document.getElementsByClassName('instrument-card ')[2];
                let popup = document.querySelector(".popup");
                let popupimg = document.querySelector(".popup-img");
                let popupname = document.querySelector(".popup-name");
                let popupdesc = document.querySelector(".popup-desc");
                instrument1.addEventListener("click", () => {
                    popupimg.src = "../hard-rock(1)/instrument3.webp";
                    popupname.innerHTML = "bass Guitar";
                    popupdesc.innerHTML = `A bass guitar produces low-pitched sounds that support the rhythm and harmony.`;
                    popup.style.display = "flex";
                })
                instrument2.addEventListener("click", () => {
                    popupimg.src = "../k-pop(1)/instrument2.jpg";
                    popupname.innerHTML = "Drum Machine";
                    popupdesc.innerHTML = `A drum machine is an electronic device that produces percussive sounds used to make rhythms and beats. In pop music, it provides the backbone groove, from punchy pop beats to trap and hip‑hop rhythms..`;
                    popup.style.display = "flex";
                })
                instrument3.addEventListener("click", () => {
                    popupimg.src = "../k-pop(1)/instrument3.jpg";
                    popupname.innerHTML = "Synthesizer ";
                    popupdesc.innerHTML = `A synthesizer is an electronic keyboard instrument that creates a wide variety of sounds by generating and blending electronic signals. It’s a core tool in pop music production, shaping catchy hooks and atmospheric layers. Producers use it to craft pop, EDM, and experimental sounds that define modern pop tracks.`;
                    popup.style.display = "flex";
                })
                let closebtn=document.querySelector('.close-btn');
                closebtn.addEventListener("click",()=>{
                    popup.style.display="none"
                })