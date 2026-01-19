function navigator(url) {
    window.location.href = url
}
var card = ""
fetch("./search.json")
    .then(Response => Response.json())
    .then(items => {
        for (const i of items) {
            card += `  <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                        <div class="card row" style="background:${i.color};" onclick="navigator('${i.webpage}')">
                            <h3 class="name col-9">${i.name}</h3>
                            <div class="image col-2"><img src="${i.image}" class="img-fluid" alt=""></div>
                            
                        </div>
                    </div>`

        }
        document.querySelector(".cards").innerHTML = card
    })