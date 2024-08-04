let urlsheet = "https://sheets.googleapis.com/v4/spreadsheets/1Md14ZRehGKRdGxQhUw5pgEEqHNDcRoIg2OMYj_oY-_0/values/datos?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&key=AIzaSyBR7ArO3cRNRSibA8L3spSwT-imu6hz05M";

function getJsonArrayFromData(data) {
    var obj = {};
    var result = [];
    var headers = data[0];
    var cols = headers.length;
    var row = [];

    for (var i = 1, l = data.length; i < l; i++) {
        // get a row to fill the object
        row = data[i];
        // clear object
        obj = {};
        for (var col = 0; col < cols; col++) {
            // fill object with new values
            obj[headers[col]] = row[col];
        }
        // add object in a final result
        result.push(obj);
    }
    return result;
}

(function ($) {
    $(document).ready(function () {
        $.getJSON(urlsheet,
            function (data) {
                let showData = $('#cards-container');
                const datos = getJsonArrayFromData(data.values);

                // Recorrido de datos para mostrar en tarjetas
                let areasSet = new Set();
                let puestosSet = new Set();

                for (let i = 0; i < datos.length; i++) {
                    areasSet.add(datos[i].area);
                    puestosSet.add(datos[i].perfil);

                    let cardHtml = `
<div class="col-md-4 mb-3">
    <div class="card">
        <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">    
            <div><strong>${datos[i].perfil}</strong></div>
            <div><a href="#" class="btn btn-sm btn-gob">Postularme</a></div>
        </div>
        </div>
        <div class="card-body">
            <p><strong>${datos[i].area}</strong></p>
            <p>ID: ${datos[i].id} | Vacantes: ${datos[i].vacante} | ${datos[i].fecha}</p>
            <hr>
            <small><strong>Estudio:</strong> ${datos[i].estudio}</small>
            <small><strong>Título:</strong> ${datos[i].titulo}</small>
            <small><strong>Informática:</strong> ${datos[i].informatica}</small>
            <br>
            <small><strong>Alcance:</strong> ${datos[i].alcance}</small>
            <br>
            <small><strong>Tareas:</strong> ${datos[i].tareas}</small>
        </div>
    </div>
</div>`;

                    showData.append(cardHtml);
                }

                // Actualizar desplegables de filtro
                let filterAreaSelect = $('#filter-area');
                let filterPuestoSelect = $('#filter-puesto');

                areasSet.forEach(area => {
                    filterAreaSelect.append(`<option value="${area}">${area}</option>`);
                });

                puestosSet.forEach(puesto => {
                    filterPuestoSelect.append(`<option value="${puesto}">${puesto}</option>`);
                });

                // Evento para limpiar filtros
                $('#limpiar-filtros').on('click', function () {
                    $('#search-input').val(''); // Limpiar el campo de búsqueda
                    $('#filter-area').val('');  // Limpiar filtro de área
                    $('#filter-puesto').val(''); // Limpiar filtro de puesto
                    displayCards(); // Actualizar la visualización de las tarjetas
                });

            }
        );
    });
})(jQuery);
