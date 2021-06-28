let arrayPoke = [];

let addToFavs = (addBtn) => {
  addBtn.style.display = "none";
  let idPoke = addBtn.id;
  let btnRemove = document.getElementsByClassName(`rem${idPoke}`);
  btnRemove[0].style.display = "inline-block";

  let idLessOne = idPoke - 1;

  if (JSON.parse(localStorage.getItem("myFavs")) !== null) {
    myFavs = JSON.parse(localStorage.getItem("myFavs"));
  } else {
    myFavs = [];
  }

  let pokemon = arrayPoke[idLessOne];
  myFavs.push(pokemon);
  let myFavsJSON = JSON.stringify(myFavs);
  localStorage.setItem("myFavs", myFavsJSON);
};

let removeToFavs = (remBtn) => {
  remBtn.style.display = "none";
  let idPoke = remBtn.id;
  let btnAdd = document.getElementsByClassName(`add${idPoke}`);
  btnAdd[0].style.display = "inline-block";

  let myFavsArray = JSON.parse(localStorage.getItem("myFavs"));
  let pokeIndex = myFavsArray.findIndex((pokemon) => pokemon.id == idPoke);
  myFavsArray.splice(pokeIndex, 1);
  let pokeArrayJSON = JSON.stringify(myFavsArray);
  localStorage.setItem("myFavs", pokeArrayJSON);
};

let showPoke = async () => {
  for (let i = 1; i < 13; i++) {
    let pokesData = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    const poke = await pokesData.json();

    let pokemon = {
      name: poke.name,
      id: poke.id,
      image: poke.sprites.front_default,
      type: poke.types[0].type.name,
    };

    if (poke.types.length > 1) {
      pokemon.type = `${poke.types[0].type.name}, ${poke.types[1].type.name}`;
    } else {
      pokemon.type = poke.types[0].type.name;
    }

    arrayPoke.push(pokemon);
  }

  let print = () => {
    for (let i = 0; i < arrayPoke.length; i++) {
      let print = document.querySelector(".pokeSubContainer");
      print.innerHTML += `<div class='item' id="div${arrayPoke[i].id}"\
                     '><img class='photo pokeImg' src="${arrayPoke[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayPoke[i].name}"\
                     </h5><p class='pokeP'>Type: "${arrayPoke[i].type}"\
                     </p><button class='pokeButton add${arrayPoke[i].id}' id='${arrayPoke[i].id}' onclick='addToFavs(this)'>Add to favs</button><button\
                      class='remove rem${arrayPoke[i].id}' id='${arrayPoke[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`;
    }
  };
  print();

  let initialArray = JSON.parse(localStorage.getItem("myFavs"));
  if (initialArray.length !== 0) {
    for (let i = 0; i < initialArray.length; i++) {
      let btnAddLocal = await document.getElementsByClassName(
        `add${initialArray[i].id}`
      );
      let btnRemLocal = await document.getElementsByClassName(
        `rem${initialArray[i].id}`
      );
      btnAddLocal[0].classList.add("disappear");
      btnRemLocal[0].classList.add("showRemove");
      //console.log(btnAddLocal[0]);
    }
  }
};

let search = () => {
  for (let i = 0; i < arrayPoke.length; i++) {
    let card = document.getElementById("div" + (i + 1));
    card.style.display = "none";
    let searchField = document.getElementById("input");
    let typeSearched = searchField.value.toLowerCase().trim();
    if (arrayPoke[i].name.includes(typeSearched)) {
      card.style.display = "block";
    }
  }
  searchBtn.removeEventListener("click", search);
};

let searchBtn = document.getElementById("button");
searchBtn.addEventListener("click", search);

window.addEventListener("keyup", () => {
  if (document.getElementById("input").value == "") {
    searchBtn = document.getElementById("button");
    searchBtn.addEventListener("click", search);
    for (let i = 0; i < arrayPoke.length; i++) {
      let card = document.getElementById("div" + (i + 1));
      card.style.display = "block";
    }
  }
});

showPoke();
