let arrayLocal = JSON.parse(localStorage.getItem("myFavs"));

//console.log(arrayLocal);

for (let i = 0; i < arrayLocal.length; i++) {
  document.querySelector(".localContainer");
  print.innerHTML += `<div><img class='photo pokeImg' src="${arrayLocal[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayLocal[i].name}"\
               </h5><p class='pokeP'>Type: "${arrayLocal[i].type}"\
               </p><button class='pokeButton add${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='addToFavs(this)'>Add to favs</button><button\
                class='remove rem${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;

  console.log("ok");
}
