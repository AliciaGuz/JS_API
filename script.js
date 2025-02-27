document.getElementById('fetchCatDataButton').addEventListener('click', fetchCatData);

async function fetchCatData() {
    const factContainer = document.getElementById('catFactContainer');
    const catImage = document.getElementById('catImage');

    factContainer.textContent = 'Cargando...';
    catImage.style.display = 'none';  // Ocultamos la imagen mientras se carga

    try {
        // Obtener un dato curioso de gatos
        const factResponse = await fetch('https://catfact.ninja/fact');
        if (!factResponse.ok) throw new Error('Error obteniendo el dato curioso');
        const factData = await factResponse.json();
        
        // Obtener una imagen aleatoria de gato
        const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!imageResponse.ok) throw new Error('Error obteniendo la imagen');
        const imageData = await imageResponse.json();

        // Mostrar el dato y la imagen
        factContainer.textContent = factData.fact;
        catImage.src = imageData[0].url;
        catImage.style.display = 'block';  // Mostrar la imagen

    } catch (error) {
        factContainer.textContent = `Ocurrió un error: ${error.message}`;
    }
}
