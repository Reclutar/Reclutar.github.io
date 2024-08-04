document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const filterArea = document.getElementById("filter-area");
    const filterPuesto = document.getElementById("filter-puesto");
    const cardsContainer = document.getElementById("cards-container");
    let cards = []; // Array para almacenar las tarjetas dinámicamente generadas

    function updateCardsArray() {
        cards = Array.from(cardsContainer.getElementsByClassName("col-md-4"));
    }

    function displayCards() {
        updateCardsArray();

        const searchText = searchInput.value.toLowerCase();
        const selectedArea = filterArea.value;
        const selectedPuesto = filterPuesto.value;

        cards.forEach(card => {
            const puestoText = card.querySelector(".card-header").textContent.toLowerCase();
            const areaText = card.querySelector(".card-body p:nth-child(1)").textContent.toLowerCase();

            const matchText = puestoText.includes(searchText) || areaText.includes(searchText);
            const matchArea = selectedArea === "" || areaText.includes(selectedArea.toLowerCase());
            const matchPuesto = selectedPuesto === "" || puestoText.includes(selectedPuesto.toLowerCase());


            const isVisible = matchText && matchArea && matchPuesto;
            card.style.display = isVisible ? "" : "none";
        });
    }

    // Llamar a displayCards() después de cargar completamente la página
    displayCards();

    // Escuchar eventos de cambios en el filtro y búsqueda
    searchInput.addEventListener("input", displayCards);
    filterArea.addEventListener("change", displayCards);
    filterPuesto.addEventListener("change", displayCards);
});
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const filterArea = document.getElementById("filter-area");
    const filterPuesto = document.getElementById("filter-puesto");
    const cardsContainer = document.getElementById("cards-container");
    let cards = []; // Array para almacenar las tarjetas dinámicamente generadas

    function updateCardsArray() {
        cards = Array.from(cardsContainer.getElementsByClassName("col-md-4"));
    }

    function displayCards() {
        updateCardsArray();

        const searchText = searchInput.value.toLowerCase();
        const selectedArea = filterArea.value;
        const selectedPuesto = filterPuesto.value;

        cards.forEach(card => {
            const puestoText = card.querySelector(".card-header").textContent.toLowerCase();
            const areaText = card.querySelector(".card-body p:nth-child(1)").textContent.toLowerCase();

            const matchText = puestoText.includes(searchText) || areaText.includes(searchText);
            const matchArea = selectedArea === "" || areaText.includes(selectedArea.toLowerCase());
            const matchPuesto = selectedPuesto === "" || puestoText.includes(selectedPuesto.toLowerCase());

            const isVisible = matchText && matchArea && matchPuesto;
            card.style.display = isVisible ? "" : "none";
        });
    }

    // Llamar a displayCards() después de cargar completamente la página
    displayCards();

    // Escuchar eventos de cambios en el filtro y búsqueda
    searchInput.addEventListener("input", displayCards);
    filterArea.addEventListener("change", displayCards);
    filterPuesto.addEventListener("change", displayCards);
});
