// popup js
let instrument1 = document.getElementsByClassName('instrument-card ')[0];
                let instrument2 = document.getElementsByClassName('instrument-card ')[1];
                let instrument3 = document.getElementsByClassName('instrument-card ')[2];
                let popup = document.querySelector(".popup");
                let popupimg = document.querySelector(".popup-img");
                let popupname = document.querySelector(".popup-name");
                let popupdesc = document.querySelector(".popup-desc");
                instrument1.addEventListener("click", () => {
                    popupimg.src = "./traditional-jazz(1)/instrumwnt1.jpg";
                    popupname.innerHTML = "Trumpet";
                    popupdesc.innerHTML = `The trumpet is a bright, powerful brass instrument central to traditional jazz sound. It often carries the main melody and delivers expressive solos. Trumpet players use buzzing lips into a mouthpiece to create sound, and techniques like mutes can change its tone.`;
                    popup.style.display = "flex";
                })
                instrument2.addEventListener("click", () => {
                    popupimg.src = "../traditional-jazz(1)/instrument2.jpg";
                    popupname.innerHTML = "Clarinet";
                    popupdesc.innerHTML = `The clarinet is a woodwind instrument with a smooth, flexible tone that fits perfectly in early jazz groups. Played by blowing air through a single reed, the clarinet can produce warm lows and sparkling highs. It often plays fast, flowing runs and counter-melodies in traditional jazz, adding color and complexity.`;
                    popup.style.display = "flex";
                })
                instrument3.addEventListener("click", () => {
                    popupimg.src = "../traditional-jazz(1)/instrument3.jpg";
                    popupname.innerHTML = "Trombone";
                    popupdesc.innerHTML = `The trombone is a brass instrument with a sliding mechanism that allows distinctive gliding notes. In traditional jazz, the trombone provides rich harmonies, rhythmic support, and lively solos.`;
                    popup.style.display = "flex";
                })
                let closebtn=document.querySelector('.close-btn');
                closebtn.addEventListener("click",()=>{
                    popup.style.display="none"
                })