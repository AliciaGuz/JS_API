async function getDogFact() {
    const factElement = document.getElementById("fact");
    factElement.textContent = "Cargando...";
    try {
        const response = await fetch("https://api.datosperros.com/v1/facts?lang=es");
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        factElement.textContent = data.facts[0];
    } catch (error) {
        factElement.textContent = "No se pudo obtener el dato. Intenta de nuevo.";
    }
}