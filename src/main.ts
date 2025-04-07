import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
mostrarSeries(series);
calcularPromedio(series);
function mostrarSeries(sers: Serie[]): void {
  sers.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td><b>${serie.id}</b></td>
      <td><a href="#" class="serie-link">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    trElement.addEventListener("click", () => mostrarDetalleSerie(serie));
    seriesTbody.appendChild(trElement);
  });
}

function mostrarDetalleSerie(serie: Serie): void {
  const cardContainer = document.getElementById("series-card")!;
  cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" class="card-link" target="_blank">${serie.link}</a>
      </div>
    </div>
  `;
}
function calcularPromedio(series: Serie[]): number {
    let total = 0;
    for (let i = 0; i < series.length; i++) {
      total += series[i].seasons;
    }
    return total / series.length;
  }
  
  const averageElement = document.getElementById("Promedio de temporadas")!;
  averageElement.innerHTML = `<strong>Promedio de temporadas:</strong> ${calcularPromedio(series)}`

  

  