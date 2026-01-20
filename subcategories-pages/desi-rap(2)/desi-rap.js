// popup js
let instrument1 = document.getElementsByClassName('instrument-card ')[0];
                let instrument2 = document.getElementsByClassName('instrument-card ')[1];
                let instrument3 = document.getElementsByClassName('instrument-card ')[2];
                let popup = document.querySelector(".popup");
                let popupimg = document.querySelector(".popup-img");
                let popupname = document.querySelector(".popup-name");
                let popupdesc = document.querySelector(".popup-desc");
                instrument1.addEventListener("click", () => {
                    popupimg.src = "../desi-rap(2)/instrument1.jpg";
                    popupname.innerHTML = "Dhol";
                    popupdesc.innerHTML = `The dhol is a traditional double-headed drum from South Asia that delivers deep, punchy rhythms. In desi rap, producers often sample its beats to give tracks an earthy, cultural feel rooted in folk music traditions. Its bold hits and resonant tones add energetic momentum, especially in dance-heavy or celebratory songs`;
                    popup.style.display = "flex";
                })
                instrument2.addEventListener("click", () => {
                    popupimg.src = "../desi-rap(2)/instrument2.jpg";
                    popupname.innerHTML = "Tabla";
                    popupdesc.innerHTML = `The tabla consists of two small hand drums that produce a wide range of tones. In desi-rap, tabla sounds are either sampled or live-recorded to infuse rhythmic complexity and texture. Its crisp, articulate beats contrast beautifully with bass-heavy hip-hop, adding a distinct South Asian flair.`;
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