const contenedorHtml = document.querySelector('.contenedorCards')

const url = 'https://rickandmortyapi.com/api/character'
    fetch(url)
    .then((resp) => resp.json())
    .then(data => {
        const personajes = data.results
        console.log(data);

        personajes.forEach(personaje => {
            
            const contenedor = document.createElement('div')
            contenedor.classList='card'
            contenedor.innerHTML = `
            <img class="img-card" src="${personaje.image}" alt="${personaje.name}">
                <div class="datos-card">
                    <h2> ${personaje.name}</h2>
                    <p>Genero: ${personaje.gender}</p>
                    <p>Especie: ${personaje.species}</p>
                    <p>Lugar: ${personaje.location.name}</p>
                </div>
            `
            contenedorHtml.appendChild(contenedor)
        });
    })