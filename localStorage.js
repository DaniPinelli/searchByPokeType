let arrayLocal = JSON.parse(localStorage.getItem("myFavs"));

let printFavs = () => {
  for (let i = 0; i < arrayLocal.length; i++) {
    let localFavs = document.querySelector(".localContainer");
    localFavs.innerHTML += `<div class='item' id="div${arrayLocal[i].id}"><img class='photo pokeImg' src="${arrayLocal[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayLocal[i].name}"\
                 </h5><p class='pokeP'>Type: "${arrayLocal[i].type}"\
                 </p><button\
                  class='removeFavs rem${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;
  }
};

printFavs();
