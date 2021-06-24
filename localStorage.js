/*let showLocal = () => {
  if (JSON.parse(localStorage.getItem("0")) !== null) {
    let element = JSON.parse(localStorage.getItem("0"));
    console.log(element);
     document.querySelector(".localContainer");
    print.innerHTML += `<div class='item' id="div${id}"\
             '><img class='photo pokeImg' src="${image}"><h5 class='card-title pokeItemTitle'>"${name}"\
             </h5><p class='pokeP'>Type: "${type}"\
             </p><button class='pokeButton add${id}' id='${id}' onclick='addToFavs(this)'>Add to favs</button><button\
              class='remove rem${id}' id='${id}' onclick='removeToFavs(this)'>Remove</button></div>`;
  }
};

showLocal();
console.log(localStorage[0]);

Object.keys(localStorage).forEach(function (key) {
  console.log(localStorage.getItem(key));
});*/

for (let poke in localStorage) {
  let arrayLocal = JSON.parse(localStorage.getItem(poke));

  for (let i = 0; i < arrayLocal.length; i++) {
    document.querySelector(".localContainer");
    print.innerHTML += `<div class='item' id="div${arrayLocal[i].id}"\
               '><img class='photo pokeImg' src="${arrayLocal[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayLocal[i].name}"\
               </h5><p class='pokeP'>Type: "${arrayLocal[i].type}"\
               </p><button class='pokeButton add${arrayLocal[i].id}' id='${pokearrayLocal[i].id}' onclick='addToFavs(this)'>Add to favs</button><button\
                class='remove rem${arrayLocal[i].id}' id='${arrayLocal[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;
  }

  //console.log(arraylocal);
}
