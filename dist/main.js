import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
mostrarSeries(series);
calcularPromedio(series);
function mostrarSeries(sers) {
    sers.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td><b>".concat(serie.id, "</b></td>\n      <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        trElement.addEventListener("click", function () { return mostrarDetalleSerie(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function mostrarDetalleSerie(serie) {
    var cardContainer = document.getElementById("series-card");
    cardContainer.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" class=\"card-link\" target=\"_blank\">").concat(serie.link, "</a>\n      </div>\n    </div>\n  ");
}
function calcularPromedio(series) {
    var total = 0;
    for (var i = 0; i < series.length; i++) {
        total += series[i].seasons;
    }
    return total / series.length;
}
var averageElement = document.getElementById("Promedio de temporadas");
averageElement.innerHTML = "<strong>Promedio de temporadas:</strong> ".concat(calcularPromedio(series));
