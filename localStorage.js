let arrayLocal = JSON.parse(localStorage.getItem("myFavs"));
let localFavs = document.querySelector(".localContainer");

let printFavs = () => {
  for (let i = 0; i < arrayLocal.length; i++) {
    localFavs.innerHTML += `<div class='item' id="div${arrayLocal[i].id}"><img class='photo pokeImg' src="${arrayLocal[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayLocal[i].name}"\
                 </h5><p class='pokeP'>Type: "${arrayLocal[i].type}"\
                 </p><button\
                  class='removeFavs rem${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;
  }
};

let printLocal = () => {
  arrayLocal = JSON.parse(localStorage.getItem("myFavs"));
  for (let i = 0; i < arrayLocal.length; i++) {
    localFavs = document.querySelector(".localContainer");
    localFavs.innerHTML += `<div><div class='item' id="div${arrayLocal[i].id}"><img class='photo pokeImg' src="${arrayLocal[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayLocal[i].name}"\
                 </h5><p class='pokeP'>Type: "${arrayLocal[i].type}"\
                 </p><button\
                  class='removeFavs rem${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;
  }
};

let removeToFavs = (remBtn) => {
  let idPoke = remBtn.id;
  let myFavsArray = JSON.parse(localStorage.getItem("myFavs"));
  let pokeIndex = myFavsArray.findIndex((pokemon) => pokemon.id == idPoke);
  myFavsArray.splice(pokeIndex, 1);
  let pokeArrayJSON = JSON.stringify(myFavsArray);
  localStorage.setItem("myFavs", pokeArrayJSON);
  localFavs.innerHTML = "";
  printLocal();
};

printFavs();
