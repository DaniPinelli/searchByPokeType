let arrayPoke = [];
let myFavs = [];

let addToFavs = (addBtn) => {

    addBtn.style.display = "none";
    let id = addBtn.id;
    let btnRemove = document.getElementsByClassName(`rem${id}`);
    btnRemove[0].style.display = "inline-block";

    localStorage.setItem('myFavs', JSON.stringify(myFavs));
    let arrayLocal = localStorage.getItem('myFavs');
    arrayLocal = arrayLocal ? arrayLocal.split(',') : [];
    arrayLocal(arrayPoke[id]);
    localStorage.setItem('myFavs', arrayLocal.toString());
}

let removeToFavs = (remBtn) => {
    remBtn.style.display = "none";
    let id = remBtn.id;
    let btnAdd = document.getElementsByClassName(`add${id}`);
    btnAdd[0].style.display = "inline-block";
}

let showPoke = async () => {
    for (let i = 1; i < 13; i++) {

        let pokesData = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        const poke = await pokesData.json();

        let pokemon = {
            name: poke.name,
            id: poke.id,
            image: poke.sprites.front_default,
            type: poke.types[0].type.name
        };

        if (poke.types.length > 1) {
            pokemon.type = (`${poke.types[0].type.name}, ${poke.types[1].type.name}`)
        } else {
            pokemon.type = poke.types[0].type.name
        };

        arrayPoke.push(pokemon);
    }

    let print = () => {
        for (let i = 0; i < arrayPoke.length; i++) {
            let print = document.querySelector(".pokeSubContainer");
            print.innerHTML += `<div class='item' id="div${arrayPoke[i].id}"\
               '><img class='photo pokeImg' src="${arrayPoke[i].image}"><h5 class='card-title pokeItemTitle'>"${arrayPoke[i].name}"\
               </h5><p class='pokeP'>Type: "${arrayPoke[i].type}"\
               </p><button class='pokeButton add${arrayPoke[i].id}' id='${arrayPoke[i].id}' onclick='addToFavs(this)'>Add to favs</button><button\
                class='remove rem${arrayPoke[i].id}' id='${arrayPoke[i].id}' onclick='removeToFavs(this)'>Remove</button></div>`

        }
    }

    print();

    let search = () => {


        for (let i = 0; i < arrayPoke.length; i++) {
            let card = document.getElementById("div" + (i + 1));
            card.style.display = 'none';
            let searchField = document.getElementById('input');
            let typeSearched = searchField.value.toLowerCase().trim();
            if (arrayPoke[i].name.includes(typeSearched)) {
                card.style.display = 'block';
            }
        }
        searchBtn.removeEventListener('click', search);
    }

    let searchBtn = document.getElementById('button');
    searchBtn.addEventListener('click', search);

    window.addEventListener('keyup', () => {
        if (document.getElementById('input').value == "") {
            searchBtn = document.getElementById('button');
            searchBtn.addEventListener('click', search);
            for (let i = 0; i < arrayPoke.length; i++) {
                let card = document.getElementById("div" + (i + 1));
                card.style.display = 'block';
            }
        }

    });

}


showPoke();