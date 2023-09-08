function buscarPokemon() {
    const pokemonIdOrName = document.getElementById('pokemonId').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName.toLowerCase()}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const nombre = data.name;
            const imagenUrl = data.sprites.front_default;
            const tipos = data.types.map(type => type.type.name).join(', ');
            const habilidades = data.abilities.map(ability => ability.ability.name).join(', ');

            const resultadoHTML = `
                <h2>${nombre}</h2>
                <img src="${imagenUrl}" alt="${nombre}">
                <p><strong>Tipo(s):</strong> ${tipos}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
            `;

            document.getElementById('resultado').innerHTML = resultadoHTML;
        })
        .catch(error => {
            console.error('Error al obtener datos del Pokémon:', error);
            document.getElementById('resultado').innerHTML = 'No se pudo encontrar el Pokémon.';
        });
}

