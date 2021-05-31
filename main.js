window.onload = () => {

    for (let i = 1; i < 12; i++) {
        let url = "https://pokeapi.co/api/v2/pokemon/" + i;
        const arrayPoke = fetch(url)
            .then(response => response.json())
            .then(data => {



                let pokemon = {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.front_default,
                    type: [data.types[0].type.name]
                };

                if (data.types[1].type.name != undefined) {
                    pokemon.type.push(" " + data.types[1].type.name);
                }



                document.querySelector("div").innerHTML += " <div class='row'><div class='col-lg-4'><div class='card w-50'><div class='card-body\
                '><img class='photo' src=" + pokemon.image + "><h5 class='card-title'>" + pokemon.name + "\
                </h5><p class='card-text'>Type: " + pokemon.type + "\
                </p><button class='btn btn-primary'>Add to favs</button></div></div></div></div>"

            })





            .catch(err => (console.log(err)));
    }
}