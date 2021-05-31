window.onload = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1 "

    const arrayUsers = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.types[2].type.name)


                // document.querySelector("row").innerHTML += " <div class='row'><div class='col-lg-4'><div class='card w-50'><div class='card-body'><h5 class='card-title'>Name</h5><p class='card-text'>Type</p><button class='btn btn-primary'>Add to favs</button></div></div></div></div>"

                .catch(err => (console.log(err)));

        });

}