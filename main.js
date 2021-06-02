window.onload = () => {



    let showAll = () => {
        for (let i = 1; i < 13; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + i;
            const arrayPoke = fetch(url)
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

                    document.querySelector(".pokeSubContainer").innerHTML += "<div class='item\
                 '><img class='photo pokeImg' src=" + pokemon.image + "><h5 class='card-title pokeItemTitle'>" + pokemon.name + "\
                 </h5><p class='pokeP'>Type: " + pokemon.type + "\
                 </p><button class='pokeButton'>Add to favs</button></div>"
                })

        }

    }



    let search = () => {

        for (let i = 1; i < 13; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + i;
            const arrayPoke = fetch(url)
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
                        document.querySelector(".pokeSubContainerSearch").innerHTML += "<div class='item\
                                    '><img class='photo pokeImg' src=" + pokemon.image + "><h5 class='card-title pokeItemTitle'>\
                                    " + pokemon.name + "\
                                     </h5><p class='pokeP'>Type: " + pokemon.type + "\
                                     </p><button class='pokeButton'>Add to favs</button></div>"

                        searchBtn.removeEventListener('click', search);

                    }


                })
                .catch(err => (console.log(err)));
        }
    }

    /*window.addEventListener('keydown', () => {
     if (searchField = "") {
         showAll();
         searchBtn.addEventListener('click', search);
     }

});*/

    let searchBtn = document.getElementById('button');
    searchBtn.addEventListener('click', search);
    showAll();
}