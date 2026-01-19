// popup js
let instrument1 = document.getElementsByClassName('instrument-card ')[0];
                let instrument2 = document.getElementsByClassName('instrument-card ')[1];
                let instrument3 = document.getElementsByClassName('instrument-card ')[2];
                let popup = document.querySelector(".popup");
                let popupimg = document.querySelector(".popup-img");
                let popupname = document.querySelector(".popup-name");
                let popupdesc = document.querySelector(".popup-desc");
                instrument1.addEventListener("click", () => {
                    popupimg.src = "../historic-classic(1)/instrument1.jpg";
                    popupname.innerHTML = "Classical Bassoon";
                    popupdesc.innerHTML = `The bassoon in the Classical period had fewer keys than modern versions but provided a rich, reedy tone that blended well with winds and strings. It often played bass lines in chamber music and symphonies, adding character and depth.`;
                    popup.style.display = "flex";
                })
                instrument2.addEventListener("click", () => {
                    popupimg.src = "../historic-classic(1)/instrument2.jpg";
                    popupname.innerHTML = "Fortepiano";
                    popupdesc.innerHTML = `The fortepiano is the early ancestor of the modern piano used during the Classical era (late 18th–early 19th century). It has lighter hammers and a more transparent, expressive tone than later pianos.`;
                    popup.style.display = "flex";
                })
                instrument3.addEventListener("click", () => {
                    popupimg.src = "../historic-classic(1)/instrument3.jpg";
                    popupname.innerHTML = "Classical Violin";
                    popupdesc.innerHTML = `The Classical violin is similar to the modern violin but played with Classical‑era techniques favoring clear articulation and elegant phrasing. It was crucial in symphonies, string quartets, and concertos of Haydn, Mozart, and Beethoven.`;
                    popup.style.display = "flex";
                })
                let closebtn=document.querySelector('.close-btn');
                closebtn.addEventListener("click",()=>{
                    popup.style.display="none"
                })