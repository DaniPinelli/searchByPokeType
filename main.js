let addToFavs = (pokBtn) => {
    let id = pokBtn.id;
    let btnSearched = document.getElementById(id);
    btnSearched.style.display = "none";


    console.log(btnSearched);

}

let showAll = () => {
    for (let i = 1; i < 13; i++) {
        let url = "https://pokeapi.co/api/v2/pokemon/" + i;
        fetch(url)
            .then(response => response.json())
            .then(data => {

                let pokemon = {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.front_default,
                    type: data.types[0].type.name
                };

                if (data.types.length > 1) {
                    pokemon.type = (`${data.types[0].type.name}, ${data.types[1].type.name}`)
                } else {
                    pokemon.type = data.types[0].type.name
                };

                let print = document.querySelector(".pokeSubContainer");
                print.innerHTML += `<div class='item\
                   '><img class='photo pokeImg' src="${pokemon.image}"><h5 class='card-title pokeItemTitle'>"${pokemon.name}"\
                   </h5><p class='pokeP'>Type: "${pokemon.type}"\
                   </p><button class='pokeButton' id="${pokemon.id}" onclick='addToFavs(this)'>Add to favs</button><button\
                    class='remove' id="${pokemon.id}" onclick='removeToFavs(this)'>Remove</button></div>`


            })

            .catch(err => (console.log(err)));


    }

}



let search = () => {

    for (let i = 1; i < 13; i++) {
        let url = "https://pokeapi.co/api/v2/pokemon/" + i;
        fetch(url)
            .then(response => response.json())
            .then(data => {



                let pokemon = {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.front_default,
                    type: data.types[0].type.name
                };

                if (data.types.length > 1) {
                    pokemon.type = (`${data.types[0].type.name}, ${data.types[1].type.name}`)
                } else {
                    pokemon.type = data.types[0].type.name
                };

                let searchField = document.getElementById('input');
                let typeSearched = searchField.value.toLowerCase().trim();

                if (pokemon.name.includes(typeSearched)) {



                    document.getElementById("pokeSubContainer").style.display = 'none';

                    let print = document.querySelector(".pokeSubContainerSearch");
                    print.innerHTML += `<div class='item\
                                    '><img class='photo pokeImg' src="${pokemon.image}"><h5 class='card-title pokeItemTitle'>\
                                    "${pokemon.name}"\
                                     </h5><p class='pokeP'>Type: "${pokemon.type}"\
                                     </p><button class='pokeButton' id="${pokemon.id}" onclick='addToFavs(this)'>Add to favs<\
                                     /button><button class='remove' id="${pokemon.id}" onclick='removeToFavs(this)'>Remove</button></div>`

                    searchBtn.removeEventListener('click', search);

                }

            })
            .catch(err => (console.log(err)));
    }
}





window.addEventListener('keyup', () => {
    if (document.getElementById('input').value == "") {
        document.getElementById("pokeSubContainer").style.display = 'flex';
        searchBtn = document.getElementById('button');
        searchBtn.addEventListener('click', search);
        document.querySelector(".pokeSubContainerSearch").innerHTML = "<div></div>"
    }

});



let searchBtn = document.getElementById('button');
searchBtn.addEventListener('click', search);


showAll();