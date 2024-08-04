document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const filterArea = document.getElementById("filter-area");
    const filterPuesto = document.getElementById("filter-puesto");
    const cardsContainer = document.getElementById("cards-container");
    const cards = Array.from(cardsContainer.getElementsByClassName("col-md-4"));

    function filterCards() {
        const searchText = searchInput.value.toLowerCase();
        const selectedArea = filterArea.value;
        const selectedPuesto = filterPuesto.value;

        cards.forEach(card => {
            const puestoText = card.querySelector(".card-header").textContent.toLowerCase();
            const areaText = card.querySelector(".card-body p:nth-child(1)").textContent.toLowerCase();
            const matchText = puestoText.includes(searchText) || areaText.includes(searchText);
            const matchArea = selectedArea === "" || areaText.includes(selectedArea.toLowerCase());
            const matchPuesto = selectedPuesto === "" || puestoText.includes(selectedPuesto.toLowerCase());

            if (matchText && matchArea && matchPuesto) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterCards);
    filterArea.addEventListener("change", filterCards);
    filterPuesto.addEventListener("change", filterCards);
    filterPuesto.addEventListener("change", filterCards);
});
