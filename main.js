window.onload = () => {

    let search = () => {



        for (let i = 1; i < 13; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + i;
            const arrayPoke = fetch(url)
                .then(response => response.json())
                .then(data => {

                    let searchField = document.getElementById('input');
                    let typeSearched = searchField.value.toLowerCase().trim();

                    let pokemon = {
                        name: data.name,
                        id: data.id,
                        image: data.sprites.front_default,
                        // type: data.types[0].type.name

                    };

                    if (data.types.length > 1) {
                        pokemon.type = (`${data.types[0].type.name}, ${data.types[1].type.name}`)
                    } else {
                        pokemon.type = data.types[0].type.name
                    }


                    if (typeSearched === data.types[0].type.name || typeSearched === data.types[1].type.name) {
                        document.querySelector(".pokeSubContainer").innerHTML += "<div class='item\
                '><img class='photo pokeImg' src=" + pokemon[i].image + "><h5 class='card-title pokeItemTitle'>" + pokemon[i].name + "\
                </h5><p class='pokeP'>Type: " + pokemon[i].type + "\
                </p><button class='pokeButton'>Add to favs</button></div>"

                    } else {
                        document.querySelector(".pokeSubContainer").innerHTML += "<div class='item\
                    '><img class='photo pokeImg' src=" + pokemon.image + "><h5 class='card-title pokeItemTitle'>" + pokemon.name + "\
                    </h5><p class='pokeP'>Type: " + pokemon.type + "\
                    </p><button class='pokeButton'>Add to favs</button></div>"
                    }



                })

                .catch(err => (console.log(err)));
        }
    }

    let searchBtn = document.getElementById('button');
    searchBtn.addEventListener('click', search);
    search();
}